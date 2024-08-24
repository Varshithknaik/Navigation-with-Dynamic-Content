import "./One.css"

const One = () => {
  return (
    <section id="home">
      <h1>Welcome to Our Site</h1>
      <p>Discover our features and services that help you achieve success.</p>
      <p>We offer a wide range of solutions tailored to your needs.</p>
      <div className="features">
        <div className="feature-item">
          <h3>Feature 1</h3>
          <p>Explore the key aspects of our top-notch service offerings.</p>
        </div>
        <div className="feature-item">
          <h3>Feature 2</h3>
          <p>Experience seamless integration and outstanding support.</p>
        </div>
        <div className="feature-item">
          <h3>Feature 3</h3>
          <p>Maximize your productivity with our innovative tools.</p>
        </div>
      </div>
      <button>Learn More</button>
    </section>
  )
}

export default One