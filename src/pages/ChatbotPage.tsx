import { useState, useEffect, useRef } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load messages from localStorage
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatHistory');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Save messages to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatHistory', JSON.stringify(messages));
    }
  }, [messages]);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Gọi qua backend API để bảo mật API key
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: input }
          ],
          temperature: 0.7,
          max_tokens: 1024
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('API Error:', errorData);
        throw new Error(errorData.error?.message || `API returned ${response.status}`);
      }

      const data = await response.json();
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.choices[0].message.content
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const err = error as Error;
      let errorMsg = 'Xin lỗi, đã có lỗi xảy ra. ';
      
      if (err.message.includes('401')) {
        errorMsg += 'API key không hợp lệ hoặc đã hết hạn.';
      } else if (err.message.includes('429')) {
        errorMsg += 'Đã vượt quá giới hạn sử dụng API. Vui lòng thử lại sau.';
      } else if (err.message.includes('Failed to fetch')) {
        errorMsg += 'Không thể kết nối đến server. Vui lòng kiểm tra kết nối mạng.';
      } else {
        errorMsg += 'Vui lòng thử lại sau. Chi tiết: ' + err.message;
      }
      
      const errorMessage: Message = {
        role: 'assistant',
        content: errorMsg
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    if (confirm('Bạn có chắc muốn xóa toàn bộ lịch sử chat?')) {
      setMessages([]);
      localStorage.removeItem('chatHistory');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chatbot-page">
      <div className="chatbot-container">
        <div className="chatbot-header">
          <h1>🤖 Chatbot Lịch Sử Việt Nam (1945-1954)</h1>
          <div className="header-actions">
            <button className="clear-btn" onClick={clearChat}>🗑️ Xóa chat</button>
          </div>
        </div>

        <div className="chat-messages">
          {messages.length === 0 && (
            <div className="welcome-message">
              <h2>Xin chào! 👋</h2>
              <p>Tôi là trợ lý AI chuyên về lịch sử Việt Nam giai đoạn 1945-1954.</p>
              <p>Hãy hỏi tôi về Cách mạng tháng Tám, kháng chiến chống Pháp, hoặc bất kỳ sự kiện lịch sử nào trong giai đoạn này!</p>
            </div>
          )}
          
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.role}`}>
              <div className="message-content">
                {msg.content}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="message assistant">
              <div className="message-content typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-container">
          <textarea
            placeholder="Nhập câu hỏi của bạn..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            rows={3}
            disabled={isLoading}
          />
          <button 
            onClick={sendMessage} 
            disabled={isLoading || !input.trim()}
            className="send-btn"
          >
            {isLoading ? '⏳' : '📤'} Gửi
          </button>
        </div>
      </div>
    </div>
  );
}
