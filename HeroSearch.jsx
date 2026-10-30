import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowRight, ArrowUpRight } from "lucide-react";
import { searchableServices } from "../../data/navigation.js";
import "../../styles/hero.css";
const quickLinks = ["Amazon Management", "SEO", "Website Design", "Meta Ads"];
export default function HeroSearch() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [active, setActive] = useState(0);
  const wrap = useRef(null);
  const navigate = useNavigate();
  const matches = query.trim()
    ? searchableServices
        .filter(
          (s) =>
            s.label.toLowerCase().includes(query.toLowerCase()) ||
            s.group.toLowerCase().includes(query.toLowerCase()),
        )
        .slice(0, 7)
    : [];
  useEffect(() => {
    const close = (e) => {
      if (wrap.current && !wrap.current.contains(e.target)) setFocused(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
  const pick = (item) => {
    setQuery(item.label);
    setFocused(false);
    navigate(item.path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const submit = (e) => {
    e?.preventDefault();
    if (matches.length) pick(matches[Math.min(active, matches.length - 1)]);
    else if (query.trim())
      navigate(`/search?search=${encodeURIComponent(query.trim())}`);
  };
  const onKey = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((v) => Math.min(v + 1, Math.max(0, matches.length - 1)));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((v) => Math.max(0, v - 1));
    }
    if (e.key === "Escape") setFocused(false);
  };
  return (
    <section className="hero-section">
      <div className="hero-ambient ambient-one" />
      <div className="hero-ambient ambient-two" />
      <div className="hero-grid" />
      <div className="hero-content">
        <div className="review-line">
          <span className="review-stars">★★★★★</span>
          <span>4.7/5</span>
          <i /> <span>1000+ Reviews</span>
          <span className="google-mark">G</span>
        </div>
        <div className="hero-kicker">
          <span className="kicker-dot" /> YOUR GROWTH, OUR MISSION
        </div>
        <h1>
          You Focus on Your Business.
          <br />
          <span>We'll Take Care of Growing It.</span>
        </h1>
        <p className="hero-description">
          Marketplaces, marketing, SEO, websites &amp; branding — one dedicated
          team, all under one roof.
        </p>
        <div className="hero-search-wrap" ref={wrap}>
          <form
            className={`hero-search${focused ? " search-focused" : ""}`}
            onSubmit={submit}
            role="search"
          >
            <Search className="search-icon" size={21} />
            <input
              aria-label="Search services"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActive(0);
              }}
              onFocus={() => setFocused(true)}
              onKeyDown={onKey}
              placeholder="What do you want to grow today?"
              autoComplete="off"
            />
            <span className="search-shortcut">⌘ K</span>
            <button type="submit" className="search-submit" aria-label="Search">
              <ArrowRight size={20} />
            </button>
          </form>
          {focused && matches.length > 0 && (
            <div className="search-suggestions" role="listbox">
              {matches.map((item, i) => (
                <button
                  type="button"
                  role="option"
                  aria-selected={i === active}
                  className={`suggestion${i === active ? " selected" : ""}`}
                  key={item.path}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => pick(item)}
                >
                  <span className="suggestion-icon">
                    <Search size={15} />
                  </span>
                  <span className="suggestion-copy">
                    <strong>{item.label}</strong>
                    <small>{item.group}</small>
                  </span>
                  <ArrowUpRight size={16} />
                </button>
              ))}
            </div>
          )}
          {focused && query.trim() && matches.length === 0 && (
            <div className="search-suggestions no-results">
              No exact match yet. Press Enter to search all services for “
              {query}”.
            </div>
          )}
        </div>
        <div className="popular-searches">
          <span>Popular:</span>
          {quickLinks.map((label) => {
            const item =
              searchableServices.find(
                (s) =>
                  s.label
                    .toLowerCase()
                    .includes(
                      label
                        .toLowerCase()
                        .replace("seo", "search engine optimization"),
                    ) ||
                  (label === "Meta Ads" && s.label === "Google Ads & PPC"),
              ) || searchableServices.find((s) => s.label === label);
            return (
              <button
                key={label}
                onClick={() => {
                  if (label === "Meta Ads") {
                    setQuery("Meta Ads");
                    setFocused(true);
                  } else if (item) pick(item);
                  else {
                    setQuery(label);
                    setFocused(true);
                  }
                }}
              >
                {label}
                <ArrowUpRight size={12} />
              </button>
            );
          })}
        </div>
        <div className="hero-proof">
          <div className="proof-avatars">
            <span>R</span>
            <span>A</span>
            <span>S</span>
            <span>+</span>
          </div>
          <div>
            <strong>Built for ambitious brands</strong>
            <small>Strategy-first. Performance-focused.</small>
          </div>
          <div className="proof-divider" />
          <div className="proof-stat">
            <strong>360°</strong>
            <small>Growth support</small>
          </div>
        </div>
      </div>
      <div className="hero-side-note">
        <span className="side-note-line" />
        MARKETING THAT MOVES YOU FORWARD
      </div>
    </section>
  );
}
