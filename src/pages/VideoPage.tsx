export default function VideoPage() {
  return (
    <section className="section video-page reveal">
      <div className="section-inner">
        <h1 className="section-title">Video tóm tắt</h1>
        <p className="section-subtitle">Từ gian khổ đến vinh quang</p>
        <div className="video-frame" style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: 960, width: '100%', borderRadius: 12, overflow: 'hidden', margin: '0 auto' }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/c3byDo-FqLw?si=U4Y-iYKYf47_sFUj"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
              style={{ width: '100%', aspectRatio: '16/9', display: 'block', border: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

