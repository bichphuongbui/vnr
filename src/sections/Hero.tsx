export default function Hero() {
  return (
    <main className="hero reveal" id="top">
      <div className="hero-background">
        <div className="hero-particles"></div>
        <div className="hero-gradient-overlay"></div>
      </div>
      
      <div className="hero-container">
        
        
        <section className="hero-content">
          <h1 className="hero-title">
            <span className="title-highlight">Từ thế</span>
            <span className="title-quote">"ngàn cân treo sợi tóc"</span>
            <span className="title-main">đến chiến thắng</span>
            <span className="title-victory">"lừng lẫy năm châu, chấn động địa cầu"</span>
          </h1>
          
          <p className="hero-description">
            Khám phá hành trình vĩ đại của dân tộc Việt Nam - từ những ngày đầu gian khó sau Cách mạng Tháng Tám đến những chiến thắng lẫy lừng làm rạng danh non sông.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">1945</div>
              <div className="stat-label">Cách mạng Tháng Tám</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1954</div>
              <div className="stat-label">Điện Biên Phủ</div>
            </div>
          
          </div>
          
          <div className="hero-actions">
            <a className="hero-btn primary" href="#context">
              <span className="btn-text">Khám phá hành trình</span>
              <span className="btn-icon">→</span>
            </a>
            
          </div>
        </section>
      </div>
    </main>
  )
}
