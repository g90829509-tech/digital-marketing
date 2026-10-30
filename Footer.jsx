import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer rx-site-footer">
      <div className="rx-footer-main">
        <div className="footer-brand rx-footer-brand">
          <Link to="/" aria-label="Cruzen Digital home">
            <img
              src={`${import.meta.env.BASE_URL}assets/cruzen-footer.png`}
              alt="Cruzen Digital"
            />
          </Link>
          <p>
            Strategy, creativity and performance—connected to help ambitious
            brands grow with clarity.
          </p>
        </div>
        <div className="rx-footer-links">
          <strong>Explore</strong>
          <Link to="/about">About Cruzen</Link>
          <Link to="/work">Our Work</Link>
          <Link to="/growth-plan">Growth Plan</Link>
          <Link to="/team">Our Team</Link>
          <Link to="/blog">Insights</Link>
        </div>
        <div className="rx-footer-links">
          <strong>Capabilities</strong>
          <Link to="/services/seo">SEO &amp; Content</Link>
          <Link to="/services/google-ads">Performance Marketing</Link>
          <Link to="/services/website-design">Web Experiences</Link>
          <Link to="/services/amazon">Marketplace Growth</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rx-footer-bottom">
        <span>
          © {new Date().getFullYear()} Cruzen Digital. Built for growth.
        </span>
      </div>
    </footer>
  );
}
