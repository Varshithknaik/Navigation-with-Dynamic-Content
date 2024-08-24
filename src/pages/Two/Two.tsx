
import "./two.css";

const Two = () => {
  return (
    <section id="about">
      <h1>About Us</h1>
      <p>Our mission is to provide the best services that empower you to succeed.</p>
      <p>
        With years of experience and a dedicated team, we are committed to delivering
        excellence in everything we do.
      </p>
      <div className="team">
        <div className="member">
          <img src="https://media.istockphoto.com/id/1562983249/photo/portrait-of-happy-and-successful-businessman-indian-man-smiling-and-looking-at-camera.jpg?s=2048x2048&w=is&k=20&c=6Vjbpv_7a1et5e_7OYsXoBOUyK1RaolsbwxBchSQdB0=" alt="Team Member" />
          <h3>John Doe</h3>
          <p>CEO</p>
          <p>John has over 20 years of experience in the industry and is the visionary behind our success.</p>
        </div>
        <div className="member">
          <img src="https://media.istockphoto.com/id/1562983249/photo/portrait-of-happy-and-successful-businessman-indian-man-smiling-and-looking-at-camera.jpg?s=2048x2048&w=is&k=20&c=6Vjbpv_7a1et5e_7OYsXoBOUyK1RaolsbwxBchSQdB0=" alt="Team Member" />
          <h3>Jane Smith</h3>
          <p>CTO</p>
          <p>Jane is the technical genius who ensures our technology is cutting-edge and reliable.</p>
        </div>
        <div className="member">
          <img src="https://media.istockphoto.com/id/1477871401/photo/portrait-of-happy-young-businesswoman-arms-crossed-with-looking-at-camera-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=LdrbKT_HOeAlf7m-tIwHdO_tO0nhI-CuLIFL8-uc6jY=" alt="Team Member" />
          <h3>Sarah Johnson</h3>
          <p>COO</p>
          <p>Sarah keeps everything running smoothly with her exceptional organizational skills.</p>
        </div>
      </div>
    </section>
  );
}

export default Two