import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  Search,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { serviceGroups } from "../data/navigation.js";
import "../styles/header.css";

const navClass = ({ isActive }) => `nav-link${isActive ? " active" : ""}`;
export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [auditOpen, setAuditOpen] = useState(false);
  const [auditSent, setAuditSent] = useState(false);
  const closeTimer = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const openAudit = () => { setAuditSent(false); setAuditOpen(true); };
    window.addEventListener("open-growth-audit", openAudit);
    return () => window.removeEventListener("open-growth-audit", openAudit);
  }, []);
  useEffect(() => {
    if (!auditOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [auditOpen]);
  useEffect(() => {
    const onKey = (event) => { if (event.key === "Escape") setAuditOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const openMenu = () => {
    window.clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const delayClose = () => {
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 180);
  };
  const go = (path) => {
    setServicesOpen(false);
    setMobileOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="header-inner">
          <Link
            className="brand"
            to="/"
            aria-label="Cruzen Digital home"
            onClick={() => setMobileOpen(false)}
          >
            <img src={`${import.meta.env.BASE_URL}assets/cruzen.png`} alt="Cruzen Digital" />
            <span className="brand-wordmark">
              <strong>cruzen</strong>
              <small>DIGITAL</small>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            <NavLink className={navClass} to="/">
              Home
            </NavLink>
            <NavLink className={navClass} to="/about">
              About
            </NavLink>
            <NavLink className={navClass} to="/work">Our Work</NavLink>
            <div
              className={`nav-dropdown${servicesOpen ? " menu-open" : ""}`}
              onMouseEnter={openMenu}
              onMouseLeave={delayClose}
            >
              <button
                className="nav-link dropdown-trigger"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
              >
                Our Services <ChevronDown size={15} strokeWidth={2.1} />
              </button>
              {servicesOpen && (
                <div
                  className="mega-menu"
                  onMouseEnter={openMenu}
                  onMouseLeave={delayClose}
                >
                  <div className="mega-heading">
                    <div>
                      <span className="eyebrow">WHAT WE DO</span>
                      <h3>Everything your brand needs to grow.</h3>
                    </div>
                    <span className="mega-spark">
                      <Sparkles size={21} />
                    </span>
                  </div>
                  <div className="mega-columns">
                    {serviceGroups.map((group) => (
                      <div className="mega-column" key={group.title}>
                        <h4>{group.title}</h4>
                        {group.items.map(([label, path]) => (
                          <button
                            key={path}
                            onClick={() => go(path)}
                            className="mega-item"
                          >
                            {label}
                            <ChevronRight size={13} />
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="mega-bottom">
                    <span>
                      Not sure what you need? Let's find the right growth plan.
                    </span>
                    <Link to="/consult" onClick={() => setServicesOpen(false)}>
                      Talk to an expert <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <button className="nav-link audit-nav-trigger" onClick={() => { setAuditSent(false); setAuditOpen(true); }}>Get a Free Audit <span className="free-pill">FREE</span></button>
            <Link className="nav-link" to="/blog">
              Our Blog
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </nav>
          <div className="header-actions">
            <Link className="login-link" to="/login">
              Login
            </Link>
            <button className="consult-btn" onClick={() => { setAuditSent(false); setAuditOpen(true); }}>Get Consultation <ArrowUpRight size={16} /></button>
          </div>
          <button
            className="mobile-toggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      {mobileOpen && (
        <div className="mobile-panel">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setMobileOpen(false)}>
            About
          </Link>
          <Link to="/work" onClick={() => setMobileOpen(false)}>Our Work</Link>
          <button onClick={() => setServicesOpen((v) => !v)}>
            Our Services <ChevronDown size={16} />
          </button>
          {servicesOpen &&
            serviceGroups.map((group) => (
              <div className="mobile-service-group" key={group.title}>
                <strong>{group.title}</strong>
                {group.items.map(([label, path]) => (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => {
                      setMobileOpen(false);
                      setServicesOpen(false);
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            ))}
          <button onClick={() => { setMobileOpen(false); setAuditSent(false); setAuditOpen(true); }}>Get a Free Audit — FREE</button>
          <Link to="/blog" onClick={() => setMobileOpen(false)}>
            Our Blog
          </Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>
          <Link to="/login" onClick={() => setMobileOpen(false)}>
            Login
          </Link>
          <button className="mobile-consult" onClick={() => { setMobileOpen(false); setAuditSent(false); setAuditOpen(true); }}>Get Consultation <ArrowUpRight size={16} /></button>
        </div>
      )}
      {auditOpen && createPortal(<div className="audit-modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setAuditOpen(false); }}>
        <section className="audit-modal" role="dialog" aria-modal="true" aria-labelledby="audit-modal-title">
          <button className="audit-modal-close" aria-label="Close audit form" onClick={() => setAuditOpen(false)}><X size={21}/></button>
          <div className="audit-modal-art"><span className="audit-orbit audit-orbit-a"/><span className="audit-orbit audit-orbit-b"/><Sparkles size={29}/><small>YOUR GROWTH, DECODED</small></div>
          {auditSent ? <div className="audit-modal-success"><span>✓</span><h2>You're one step closer.</h2><p>Your details are ready. Connect this form to your CRM/email endpoint to receive real submissions.</p><button className="audit-submit" onClick={() => setAuditOpen(false)}>Done <ArrowUpRight size={16}/></button></div> : <><span className="audit-modal-eyebrow">COMPLIMENTARY DIGITAL REVIEW</span><h2 id="audit-modal-title">Let’s find your next <em>growth opportunity.</em></h2><p className="audit-modal-desc">Tell us a little about your business. We’ll map the conversation around your goals.</p>
          <form className="audit-modal-form" onSubmit={(e) => { e.preventDefault(); setAuditSent(true); }}>
            <label>Your name<input required name="name" placeholder="e.g. Priya Sharma"/></label>
            <label>Work email<input required type="email" name="email" placeholder="you@company.com"/></label>
            <label>Website URL<input name="website" type="url" placeholder="https://yourwebsite.com"/></label>
            <label>What would you like to grow?<select name="goal" defaultValue=""><option value="" disabled>Select your priority</option><option>More qualified leads</option><option>Website traffic & SEO</option><option>Paid ads performance</option><option>Marketplace sales</option><option>Brand & social presence</option><option>Not sure yet</option></select></label>
            <button className="audit-submit" type="submit">Request my free audit <ArrowUpRight size={17}/></button><small className="audit-privacy">No pressure. Just a useful first conversation.</small>
          </form></>}
        </section>
      </div>, document.body)}
    </>
  );
}
