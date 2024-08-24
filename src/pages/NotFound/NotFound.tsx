import { Link } from "react-router-dom"
import "./NotFound.css"

const NotFound = () => {
  return (
    <section className="not-found-container">
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <Link to="/" className="home-link">Go Back Home</Link>
  </section>
  )
}

export default NotFound