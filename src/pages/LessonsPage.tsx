export default function LessonsPage() {
  const lessons = [
    {
      id: 1,
      title: "Giữ vững vai trò lãnh đạo của Đảng",
      summary: "Đảng Cộng sản Việt Nam đã khẳng định vai trò lãnh đạo xuyên suốt trong sự nghiệp giải phóng dân tộc và xây dựng đất nước.",
      evidence: "Thực tiễn ở Việt Nam đã chứng tỏ rằng, nhờ có sự lãnh đạo của Đảng mà cách mạng đã thu được thắng lợi vẻ vang trong sự nghiệp giải phóng dân tộc, tiến lên xây dựng chủ nghĩa xã hội."
    },
    {
      id: 2,
      title: "Phát huy sức mạnh đại đoàn kết toàn dân",
      summary: "Sức mạnh của khối đại đoàn kết dân tộc là yếu tố then chốt tạo nên thắng lợi nhanh chóng của Cách mạng Tháng Tám.",
      evidence: "Chỉ trong vòng 15 ngày, cuộc tổng khởi nghĩa đã giành thắng lợi hoàn toàn, chính quyền về tay Nhân dân."
    },
    {
      id: 3,
      title: "Nghệ thuật nắm bắt thời cơ và chỉ đạo kịp thời",
      summary: "Đảng và Chủ tịch Hồ Chí Minh đã thể hiện khả năng nhạy bén trong việc nhận diện và tận dụng thời cơ cách mạng.",
      evidence: "Lúc này thời cơ thuận lợi đã tới, dù hy sinh tới đâu, dù phải đốt cháy cả dãy Trường Sơn cũng phải giành cho được độc lập."
    },
    {
      id: 4,
      title: "Phát huy truyền thống yêu nước, ý chí tự lực tự cường",
      summary: "Tinh thần độc lập tự chủ, tự lực tự cường của dân tộc đã được phát huy cao độ trong cuộc kháng chiến chống thực dân Pháp.",
      evidence: "Thắng lợi của Cách mạng Tháng Tám là thắng lợi của ý chí độc lập tự chủ, tự lực, tự cường của dân tộc Việt Nam."
    },
    {
      id: 5,
      title: "Kết hợp mềm dẻo giữa đấu tranh vũ trang và ngoại giao",
      summary: "Đảng đã vận dụng linh hoạt cả đấu tranh vũ trang và ngoại giao để giành thắng lợi trên nhiều mặt trận.",
      evidence: "Vừa tăng cường đấu tranh vũ trang trực diện trên chiến trường, vừa khôn khéo trong ngoại giao giữ thế chủ động."
    },
    {
      id: 6,
      title: "Ý nghĩa thực tiễn và vận dụng ngày nay",
      summary: "Các bài học từ giai đoạn 1945-1954 vẫn giữ nguyên giá trị và là kim chỉ nam cho công cuộc đổi mới hiện nay.",
      evidence: "Những bài học này tiếp tục là kim chỉ nam cho công cuộc xây dựng và bảo vệ Tổ quốc trong thời đại mới."
    }
  ];

  return (
    <div className="lessons-page">
      {/* Banner */}
      <section className="lessons-banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1 className="banner-title">BÀI HỌC TỪ CÁCH MẠNG VIỆT NAM 1945–1954</h1>
          <p className="banner-subtitle">Những giá trị vượt thời gian từ lịch sử vẻ vang của dân tộc</p>
        </div>
      </section>

      {/* Lessons Cards */}
      <section className="lessons-content">
        <div className="lessons-container">
          <div className="lessons-grid">
            {lessons.map((lesson) => (
              <div key={lesson.id} className="lesson-card">
                <div className="card-number">{lesson.id}</div>
                <h3 className="card-title">{lesson.title}</h3>
                <p className="card-summary">{lesson.summary}</p>
                <blockquote className="card-evidence">
                  <span className="quote-icon">"</span>
                  {lesson.evidence}
                  <span className="quote-icon">"</span>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ý nghĩa hôm nay */}
      <section className="lessons-significance">
        <div className="significance-container">
          <h2 className="significance-title">Ý nghĩa hôm nay</h2>
          <div className="significance-content">
            <p>
              Trong bối cảnh đất nước đang hội nhập quốc tế sâu rộng, các bài học từ Cách mạng Tháng Tám 
              và kháng chiến chống thực dân Pháp (1945-1954) vẫn giữ nguyên giá trị thực tiễn.
            </p>
            <p>
              <strong>Vai trò lãnh đạo của Đảng</strong> tiếp tục là nhân tố quyết định trong công cuộc đổi mới, 
              xây dựng và bảo vệ Tổ quốc. <strong>Sức mạnh đại đoàn kết dân tộc</strong> là nền tảng để vượt qua 
              mọi khó khăn, thách thức. <strong>Tinh thần tự lực tự cường</strong> kết hợp với hợp tác quốc tế 
              là con đường phát triển bền vững.
            </p>
            <p>
              Thực tiễn hơn 79 năm qua chứng minh: khi toàn Đảng, toàn dân đoàn kết, sáng tạo, kiên định 
              với lý tưởng độc lập dân tộc và chủ nghĩa xã hội, không có khó khăn nào không thể vượt qua.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="lessons-footer">
        <div className="footer-content">
          <p className="footer-copyright">© 2025 – Trang web "Bài học"</p>
          <p className="footer-source">
            Nguồn: Tư liệu lịch sử Đảng, Hồ Chí Minh toàn tập, Cổng thông tin Chính phủ
          </p>
        </div>
      </footer>
    </div>
  );
}
