function Slideshow() {
  return (
    <section className="slideshow-section">
      <div className="slideshow-wrapper">
        <img id="img-slide" src="/slide1.jpg" alt="Event slide" />
        <button className="slide-btn slide-btn-left">&#10094;</button>
        <button className="slide-btn slide-btn-right">&#10095;</button>
      </div>
    </section>
  )
}

export default Slideshow