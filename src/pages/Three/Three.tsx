import ContactForm from "../../components/ContactForm/ContactForm"
import "./Three.css"

const Three = () => {
  return (
    <div className="three-container">
      <div className="content-intro">
        <h1>Get in Touch with Us</h1>
        <p>
          We're here to help! Whether you have a question about our services, need assistance, 
          or just want to talk, our team is ready to answer all your questions.
        </p>
      </div>
      <ContactForm />
      <div className="contact-info">
        <h2>Our Contact Information</h2>
        <p>Address: 438 king's Rd</p>
        <p>Phone: +123456789</p>
        <p>Email: contact@example.com</p>
      </div>
    </div>
  )
}

export default Three