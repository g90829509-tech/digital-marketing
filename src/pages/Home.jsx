import { useEffect, useState, useRef } from "react";
import {
  ShoppingBag,
  Megaphone,
  Globe2,
  Search,
  ArrowUpRight,
  Sparkles,
  Target,
  Layers3,
  TrendingUp,
  MoveUpRight,
  Play,
  Users,
  ChartNoAxesCombined,
  Quote,
  CheckCircle2,
  Rocket,
  Newspaper,
  Clapperboard,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import HeroSearch from "../components/search/HeroSearch.jsx";
import ServicePreviewCard from "../components/services/ServicePreviewCard.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import { serviceGroups } from "../data/navigation.js";
import "../styles/pages/home.css";
import "../styles/pages/reference-experience.css";
import "../styles/pages/home-premium-polish.css";
import "../styles/pages/reference-led-motion-redesign.css";
import "../styles/pages/final-spacing-motion-polish.css";

const groupMeta = {
  "Marketplace Management": {
    icon: ShoppingBag,
    intro:
      "Marketplace strategy, catalogue quality and performance improvements that help products stand out across digital storefronts.",
  },
  "Digital Marketing": {
    icon: Megaphone,
    intro:
      "Reach the right audience with measurable campaigns, discoverability and customer engagement across digital channels.",
  },
  "Web, Creative & Business": {
    icon: Globe2,
    intro:
      "Create better digital experiences, stronger brand systems and practical online business foundations.",
  },
};
const descriptions = {
  amazon:
    "Improve product visibility, catalogue quality, advertising efficiency and sales performance on Amazon.",
  flipkart:
    "Strengthen product listings, promotions and marketplace performance across Flipkart.",
  meesho:
    "Improve catalogue presentation, product discoverability and store operations on Meesho.",
  myntra:
    "Build a consistent fashion catalogue and optimise product visibility on Myntra.",
  ajio: "Improve catalogue readiness, brand presentation and product discovery on AJIO.",
  nyka: "Support beauty and lifestyle product discovery with clearer listings and marketplace optimisation.",
  ebay: "Optimise product listings and marketplace operations to reach more relevant buyers on eBay.",
  etsy: "Present distinctive products with search-friendly listings and a stronger Etsy storefront.",
  shopify:
    "Build and optimise a Shopify store with a clear customer journey and conversion-focused pages.",
  seo: "Improve technical health, useful content and organic search visibility for sustainable growth.",
  "google-ads":
    "Plan and optimise paid search campaigns around relevant keywords, conversions and measurable results.",
  smm: "Build brand awareness and community with purposeful social content and channel-specific campaigns.",
  smo: "Improve social profiles, content discoverability and engagement across your key platforms.",
  influencer:
    "Connect your brand with relevant creators and track campaigns against clear marketing goals.",
  "retention-marketing":
    "Encourage repeat purchases with customer journeys, lifecycle messaging and thoughtful re-engagement.",
  youtube:
    "Build video discovery and audience engagement with a clear YouTube content and promotion strategy.",
  "pr-press-release":
    "Share brand news with clear messaging and digital PR activity that supports awareness.",
  "website-design":
    "Create responsive, accessible websites with polished UX and a clear path to enquiry or purchase.",
  "landing-page":
    "Design focused landing pages that connect campaign messaging to a clear conversion goal.",
  branding:
    "Build a consistent digital identity through brand positioning, visual direction and messaging.",
  "app-development":
    "Shape user-friendly digital products around real user needs, performance and scalable foundations.",
  "listing-services":
    "Create structured, persuasive product listings with accurate details and search-friendly content.",
  "gst-registration":
    "Make your business onboarding journey clearer with digital-ready GST registration support.",
  "gst-filing":
    "Keep GST filing workflows organised with timely information and a straightforward process.",
  "trademark-registration":
    "Support brand protection planning with a clearer trademark registration process.",
};
const slugOf = (path) => path.split("/").pop();

export default function Home() {
  useScrollReveal();
  const [pageProgress, setPageProgress] = useState(0);
  const [storyProgress, setStoryProgress] = useState(0);
  const [openedShowcase, setOpenedShowcase] = useState(null);
  const storyRef = useRef(null);
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setPageProgress(
        max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0,
      );
      if (storyRef.current) {
        const r = storyRef.current.getBoundingClientRect();
        const span = Math.max(
          1,
          storyRef.current.offsetHeight - window.innerHeight,
        );
        setStoryProgress(Math.min(1, Math.max(0, -r.top / span)));
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  const openAudit = () => window.dispatchEvent(new Event("open-growth-audit"));
  return (
    <>
      <aside
        className="home-rocket-progress"
        aria-label={`Page progress ${Math.round(pageProgress)} percent`}
        style={{ "--rocket-progress": `${pageProgress}%` }}
      >
        <span className="rocket-track" />
        <span className="rocket-progress-fill" />
        <span
          className="rocket-progress-icon"
          style={{ top: `${Math.min(94, Math.max(2, pageProgress))}%` }}
        >
          <Rocket size={19} />
        </span>
        <small>SCROLL TO GROW</small>
      </aside>
      <HeroSearch />
      {/* <section
        className="cruzen-scroll-story"
        ref={storyRef}
        aria-label="Interactive digital growth story"
      >
        <div className="cruzen-story-sticky">
          <div className="cruzen-story-topline">
            <span>THE CRUZEN METHOD / 01—04</span>
            <span>
              SCROLL TO BUILD THE STORY{" "}
              <i>{String(Math.round(storyProgress * 100)).padStart(2, "0")}%</i>
            </span>
          </div>
          <div className="cruzen-story-layout">
            <div className="cruzen-story-copy">
              <span className="section-label">
                NOT JUST ANOTHER AGENCY WEBSITE
              </span>
              <h2>
                Good digital work
                <br />
                moves from{" "}
                <em>
                  {
                    ["curiosity.", "insight.", "ideas.", "impact."][
                      Math.min(3, Math.floor(storyProgress * 4))
                    ]
                  }
                </em>
              </h2>
              <p className="cruzen-story-typed">
                {
                  [
                    "First, we get curious about your audience and the real challenge.",
                    "Then, we find the signal inside the noise and shape a clear strategy.",
                    "Next, we turn the strategy into creative people want to explore.",
                    "Finally, we learn from the data and make the next move count.",
                  ][Math.min(3, Math.floor(storyProgress * 4))]
                }
              </p>
              <div className="cruzen-story-steps">
                {["Discover", "Define", "Create", "Grow"].map((word, i) => (
                  <span
                    key={word}
                    className={storyProgress >= i / 4 ? "active" : ""}
                  >
                    <b>0{i + 1}</b>
                    {word}
                  </span>
                ))}
              </div>
            </div>
            <div className="cruzen-showcase-grid">
              {[
                {
                  title: "Marketplace momentum",
                  tag: "01 / COMMERCE",
                  desc: "Product stories designed to earn attention.",
                  kind: "market",
                },
                {
                  title: "Campaigns with a point",
                  tag: "02 / PERFORMANCE",
                  desc: "Creative, audience and measurement in one system.",
                  kind: "campaign",
                },
                {
                  title: "A brand worth exploring",
                  tag: "03 / EXPERIENCE",
                  desc: "Digital experiences that make the next step clear.",
                  kind: "brand",
                },
                {
                  title: "Insight into action",
                  tag: "04 / OPTIMISATION",
                  desc: "Small improvements connected to bigger goals.",
                  kind: "data",
                },
              ].map((item, i) => (
                <button
                  type="button"
                  key={item.kind}
                  className={`cruzen-showcase-tile tile-${item.kind} ${storyProgress >= i / 4 ? "tile-lit" : ""}`}
                  onClick={() => setOpenedShowcase(item)}
                  aria-label={`Open ${item.title}`}
                >
                  <span className="cruzen-tile-art">
                    <i />
                    <i />
                    <i />
                    <b>{["↗", "✳", "✦", "⌁"][i]}</b>
                    <small>{item.tag}</small>
                  </span>
                  <span className="cruzen-tile-meta">
                    <strong>{item.title}</strong>
                    <span>
                      Click to explore <ArrowUpRight size={15} />
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="cruzen-story-bottom">
            <span>STRATEGY × CREATIVE × PERFORMANCE</span>
            <div>
              <i style={{ width: `${storyProgress * 100}%` }} />
            </div>
            <span>KEEP SCROLLING ↓</span>
          </div>
        </div>
      </section> */}
      {openedShowcase && (
        <div
          className="cruzen-showcase-modal"
          role="dialog"
          aria-modal="true"
          aria-label={openedShowcase.title}
          onClick={() => setOpenedShowcase(null)}
        >
          <div
            className="cruzen-showcase-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="cruzen-modal-close"
              onClick={() => setOpenedShowcase(null)}
              aria-label="Close"
            >
              ×
            </button>
            <span className="section-label">{openedShowcase.tag}</span>
            <div className={`cruzen-modal-art tile-${openedShowcase.kind}`}>
              <i />
              <i />
              <i />
              <b>✦</b>
            </div>
            <h2>{openedShowcase.title}</h2>
            <p>
              {openedShowcase.desc} We connect clear thinking, distinctive
              creative and practical measurement to help every digital
              touchpoint work harder.
            </p>
            <button
              type="button"
              className="services-cta-link"
              onClick={() => {
                setOpenedShowcase(null);
                window.location.href = "/contact";
              }}
            >
              Discuss a project <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      )}

      <section className="all-services-section">
        <div
          className="services-3d-orb services-3d-orb-one"
          aria-hidden="true"
        />
        <div
          className="services-3d-orb services-3d-orb-two"
          aria-hidden="true"
        />
        <header className="all-services-heading scroll-on-view scroll-from-bottom">
          <span className="section-label">
            <Sparkles size={14} /> ONE PARTNER. EVERY GROWTH CHANNEL.
          </span>
          <h2>
            Digital services built around <em>your next move.</em>
          </h2>
          <p>
            Explore the complete range of services—from marketplace growth and
            performance marketing to web experiences and digital business
            support.
          </p>
        </header>
        {serviceGroups.map((group, groupIndex) => {
          const meta =
            groupMeta[group.title] || groupMeta["Web, Creative & Business"];
          const featured = group.items.slice(0, 4);
          return (
            <section
              className={`service-group service-group-${groupIndex + 1} service-scene service-scene-${groupIndex + 1} scroll-on-view`}
              key={group.title}
            >
              <div className="service-group-heading">
                <span className="service-group-icon">
                  <meta.icon size={21} />
                </span>
                <div>
                  <span className="service-group-kicker">
                    SERVICE COLLECTION 0{groupIndex + 1}
                  </span>
                  <h3>{group.title}</h3>
                  <p>{meta.intro}</p>
                </div>
                <span className="service-group-count">
                  {String(group.items.length).padStart(2, "0")} SERVICES
                </span>
              </div>
              {groupIndex === 0 && (
                <div className="service-bento-scene">
                  <div className="service-bento-brand">
                    <span className="service-bento-orbit">✳</span>
                    <strong>
                      Marketplace
                      <br />
                      growth, connected.
                    </strong>
                    <small>ONE SYSTEM · MULTIPLE CHANNELS</small>
                  </div>
                  {featured.map(([title, to], i) => (
                    <Link
                      to={to}
                      className={`service-bento-node bento-node-${i + 1}`}
                      key={to}
                    >
                      <span>0{i + 1}</span>
                      <strong>{title}</strong>
                      <small>
                        {
                          [
                            "Catalogue & listings",
                            "Storefront optimisation",
                            "Product discovery",
                            "Sales performance",
                          ][i]
                        }
                      </small>
                      <ArrowUpRight size={17} />
                    </Link>
                  ))}
                  <div className="service-bento-foot">
                    <span>AMAZON</span>
                    <i />
                    <span>FLIPKART</span>
                    <i />
                    <span>SHOPIFY</span>
                    <i />
                    <span>AND MORE</span>
                  </div>
                </div>
              )}
              {groupIndex === 1 && (
                <div className="service-motion-scene">
                  <div className="service-motion-copy">
                    <span className="service-motion-kicker">
                      CAMPAIGNS IN MOTION / 02
                    </span>
                    <h4>
                      Make every
                      <br />
                      <em>interaction count.</em>
                    </h4>
                    <p>
                      From search intent to social discovery, connect creative,
                      targeting and measurement in one moving system.
                    </p>
                    <div className="service-motion-track">
                      <span>DISCOVER</span>
                      <i />
                      <span>ENGAGE</span>
                      <i />
                      <span>CONVERT</span>
                    </div>
                  </div>
                  <div className="service-motion-stage">
                    <div className="motion-stage-glow" />
                    <div className="motion-stage-ring ring-one" />
                    <div className="motion-stage-ring ring-two" />
                    <div className="motion-stage-core">
                      <Megaphone size={38} />
                      <b>GROW</b>
                    </div>
                    {["SEO", "ADS", "SOCIAL", "VIDEO", "PR", "RETENTION"].map(
                      (label, i) => (
                        <span
                          className={`motion-orbit-label orbit-label-${i + 1}`}
                          key={label}
                        >
                          {label}
                        </span>
                      ),
                    )}
                    <span className="motion-stage-spark spark-a" />
                    <span className="motion-stage-spark spark-b" />
                  </div>
                  <div className="service-motion-links">
                    {featured.map(([title, to], i) => (
                      <Link to={to} key={to}>
                        <span>0{i + 1}</span>
                        {title}
                        <ArrowUpRight size={16} />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {groupIndex === 2 && (
                <div className="service-network-scene">
                  <div className="service-network-intro">
                    <span>DESIGN × TECHNOLOGY × BUSINESS</span>
                    <h4>
                      Build a digital
                      <br />
                      <em>ecosystem.</em>
                    </h4>
                    <p>
                      Brand, web and business essentials—connected around one
                      clear customer experience.
                    </p>
                  </div>
                  <div className="service-network-map">
                    <svg viewBox="0 0 600 390" aria-hidden="true">
                      <path d="M300 195 L115 85 M300 195 L485 85 M300 195 L115 305 M300 195 L485 305 M300 195 L300 35 M300 195 L300 355" />
                    </svg>
                    <div className="network-hub">
                      <Globe2 size={34} />
                      <b>CRUZEN</b>
                      <small>DIGITAL CORE</small>
                    </div>
                    {[
                      "WEB",
                      "BRAND",
                      "APPS",
                      "LANDING",
                      "LISTINGS",
                      "BUSINESS",
                    ].map((x, i) => (
                      <span
                        className={`network-node network-node-${i + 1}`}
                        key={x}
                      >
                        {x}
                      </span>
                    ))}
                  </div>
                  <div className="service-network-list">
                    {featured.map(([title, to], i) => (
                      <Link to={to} key={to}>
                        <span>0{i + 1}</span>
                        <strong>{title}</strong>
                        <ArrowUpRight size={17} />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              <div className="service-group-view-all">
                <Link to="/search">
                  View all {group.title.toLowerCase()} services{" "}
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </section>
          );
        })}
        <div className="services-end-cta scroll-on-view scroll-from-bottom">
          <div>
            <span className="section-label">NOT SURE WHERE TO START?</span>
            <h3>Let’s find the right growth mix for your business.</h3>
          </div>
          <Link to="/search" className="services-cta-link">
            Explore services <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section
        className="home-growth-journey"
        aria-labelledby="home-growth-title"
      >
        <div className="growth-journey-orb growth-orb-a" aria-hidden="true" />
        <div className="growth-journey-orb growth-orb-b" aria-hidden="true" />
        <header className="growth-journey-heading scroll-on-view">
          <span className="section-label">
            <Sparkles size={14} /> FROM INSIGHT TO IMPACT
          </span>
          <h2 id="home-growth-title">
            Growth isn’t one big leap.
            <br />
            <em>It’s the right moves, connected.</em>
          </h2>
          <p>
            A practical digital growth journey—built around your goals, your
            audience and the numbers that matter.
          </p>
        </header>
        <div className="growth-steps">
          {[
            {
              n: "01",
              icon: Target,
              title: "Find the signal",
              tag: "DISCOVER",
              text: "Understand your audience, competitors and current digital performance before choosing a direction.",
            },
            {
              n: "02",
              icon: Layers3,
              title: "Build the system",
              tag: "CREATE",
              text: "Connect the right channels, messaging and digital experiences into one coherent plan.",
            },
            {
              n: "03",
              icon: TrendingUp,
              title: "Improve what works",
              tag: "GROW",
              text: "Measure meaningful outcomes, learn from the data and keep improving the next move.",
            },
          ].map((step, i) => {
            const Icon = step.icon;
            return (
              <article
                className={`growth-step growth-step-${i + 1} scroll-on-view`}
                key={step.n}
                style={{ "--step-index": i }}
              >
                <div className="growth-step-visual">
                  <span className="growth-step-number">{step.n}</span>
                  <div className="growth-step-orbit orbit-a" />
                  <div className="growth-step-orbit orbit-b" />
                  <div className="growth-step-icon">
                    <Icon size={30} />
                  </div>
                  <span className="growth-step-tag">{step.tag}</span>
                </div>
                <div className="growth-step-copy">
                  <span className="growth-step-overline">
                    THE GROWTH JOURNEY / {step.n}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <Link to="/about" className="growth-step-link">
                    Our approach <MoveUpRight size={15} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
        <div className="growth-journey-footer scroll-on-view">
          <span>ONE CONNECTED STRATEGY. CONTINUOUS PROGRESS.</span>
          <Link to="/contact" className="services-cta-link">
            Build your growth plan <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section className="rx-home-proof">
        <div className="rx-home-proof-head scroll-on-view">
          <span className="section-label">
            <Sparkles size={14} /> A CONNECTED GROWTH PARTNER
          </span>
          <h2>
            Not just more marketing.
            <br />
            <em>A clearer way to grow.</em>
          </h2>
          <p>
            Bring your marketplace, campaigns, search visibility and website
            experience into one connected plan.
          </p>
        </div>
        <div className="rx-proof-steps">
          {[
            {
              n: "01",
              title: "Connect the channels",
              text: "A joined-up plan across marketplace, campaigns and web.",
              icon: Layers3,
            },
            {
              n: "02",
              title: "Read the signals",
              text: "Use meaningful data to see what is helping the business.",
              icon: ChartNoAxesCombined,
            },
            {
              n: "03",
              title: "Choose the next move",
              text: "Prioritise improvements that match your stage and goals.",
              icon: Target,
            },
          ].map((x, i) => {
            const Icon = x.icon;
            return (
              <article
                className={`rx-proof-step rx-reveal proof-${i + 1}`}
                key={x.n}
              >
                <span className="rx-proof-step-number">{x.n}</span>
                <Icon size={25} />
                <div>
                  <h3>{x.title}</h3>
                  <p>{x.text}</p>
                </div>
                <ArrowRight className="rx-proof-step-arrow" size={17} />
              </article>
            );
          })}
        </div>
      </section>
      <section className="rx-home-showcase">
        <div className="rx-showcase-copy scroll-on-view">
          <span className="section-label">
            <Play size={14} /> CREATIVE WORK & CONTENT
          </span>
          <h2>
            Make the scroll stop.
            <br />
            <em>Give the story a reason.</em>
          </h2>
          <p>
            Campaign creative, product storytelling, short-form video and
            digital experiences designed around the audience—not just the
            algorithm.
          </p>
          <Link to="/work" className="services-cta-link">
            Explore our work <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="rx-showcase-visual rx-reveal">
          <div className="rx-video-frame">
            <div className="rx-video-shape shape-one" />
            <div className="rx-video-shape shape-two" />
            <div className="rx-video-label">CREATIVE / 01</div>
            <div className="rx-play-button">
              <Play size={22} fill="currentColor" />
            </div>
            <div className="rx-video-caption">
              Ideas into experiences<span>Campaign · Content · Commerce</span>
            </div>
          </div>
          <p className="rx-video-note">
            Creative showcase concept · replace with approved campaign videos
          </p>
        </div>
      </section>
      <section className="rx-home-work">
        <header className="scroll-on-view">
          <span className="section-label">
            <Sparkles size={14} /> SELECTED DIGITAL EXPERIENCES
          </span>
          <h2>
            Different challenges.
            <br />
            <em>Thoughtful digital solutions.</em>
          </h2>
          <p>
            Illustrative portfolio categories showing the kinds of work a
            connected digital team can deliver.
          </p>
        </header>
        <div className="rx-work-cards">
          {[
            {
              tag: "E-COMMERCE",
              title: "A clearer product journey",
              text: "Product discovery, listings and store experience.",
              tone: "work-lilac",
            },
            {
              tag: "PERFORMANCE",
              title: "Campaigns with a purpose",
              text: "Creative testing, landing pages and measurement.",
              tone: "work-peach",
            },
            {
              tag: "BRAND EXPERIENCE",
              title: "A digital home for the brand",
              text: "Responsive web design and a consistent brand story.",
              tone: "work-blue",
            },
          ].map((x, i) => (
            <Link
              to="/work"
              className={`rx-work-card ${x.tone} rx-reveal`}
              key={x.tag}
              style={{ "--work-index": i }}
            >
              <span>{x.tag}</span>
              <div className="rx-work-art">
                <img
                  src={
                    i === 0
                      ? "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85"
                      : i === 1
                        ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85"
                        : "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85"
                  }
                  alt={x.title}
                  loading="lazy"
                />
                <i />
                <i />
              </div>
              <h3>{x.title}</h3>
              <p>{x.text}</p>
              <b>
                Explore project <ArrowUpRight size={16} />
              </b>
            </Link>
          ))}
        </div>
        <div className="rx-centered-link">
          <Link to="/work" className="services-cta-link">
            View portfolio <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section className="rx-home-analytics">
        <div className="rx-analytics-copy scroll-on-view">
          <span className="section-label">
            <ChartNoAxesCombined size={14} /> THE BIGGER PICTURE
          </span>
          <h2>
            Turn scattered activity
            <br />
            <em>into visible momentum.</em>
          </h2>
          <p>
            A useful growth dashboard connects discovery, engagement and
            conversion—so your next move comes from insight, not guesswork.
          </p>
          <button
            className="services-cta-link rx-audit-button"
            onClick={openAudit}
          >
            Get a free growth audit <ArrowUpRight size={17} />
          </button>
          <div className="rx-metric-row">
            <div>
              <strong>01</strong>
              <span>Discover</span>
            </div>
            <div>
              <strong>02</strong>
              <span>Optimise</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Scale</span>
            </div>
          </div>
        </div>
        <div className="rx-analytics-card rx-reveal">
          <div className="rx-analytics-card-head">
            <div>
              <span>GROWTH SIGNALS</span>
              <strong>Performance overview</strong>
            </div>
            <span className="rx-live-dot">● LIVE CONCEPT</span>
          </div>
          <div className="rx-chart-summary">
            <div>
              <small>Visibility index</small>
              <strong>↑ Momentum</strong>
            </div>
            <div>
              <small>Conversion journey</small>
              <strong>More connected</strong>
            </div>
          </div>
          <svg
            className="rx-growth-chart"
            viewBox="0 0 600 240"
            role="img"
            aria-label="Illustrative rising growth trend"
          >
            <defs>
              <linearGradient id="growthFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#8d70ff" stopOpacity=".32" />
                <stop offset="100%" stopColor="#8d70ff" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[35, 80, 125, 170, 215].map((y) => (
              <line
                key={y}
                x1="12"
                y1={y}
                x2="590"
                y2={y}
                stroke="#e9e4f5"
                strokeDasharray="4 7"
              />
            ))}
            <path
              className="rx-chart-area"
              d="M12 194 C60 180 65 158 110 167 S165 148 205 156 S260 115 300 132 S360 94 402 108 S470 52 505 74 S558 36 590 22 L590 225 L12 225 Z"
              fill="url(#growthFill)"
            />
            <path
              className="rx-chart-line"
              d="M12 194 C60 180 65 158 110 167 S165 148 205 156 S260 115 300 132 S360 94 402 108 S470 52 505 74 S558 36 590 22"
              fill="none"
              stroke="#6d4aff"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle
              cx="505"
              cy="74"
              r="7"
              fill="#fff"
              stroke="#6d4aff"
              strokeWidth="4"
            />
            <circle
              cx="590"
              cy="22"
              r="7"
              fill="#fff"
              stroke="#6d4aff"
              strokeWidth="4"
            />
          </svg>
          <div className="rx-chart-foot">
            <span>Illustrative trend · not client data</span>
            <span>
              <i /> Strategy <i /> Measurement <i /> Optimisation
            </span>
          </div>
        </div>
      </section>
      <section className="rx-home-testimonials testimonial-orbit-scene">
        <div className="testimonial-orbit-heading scroll-on-view">
          <span className="section-label">
            <Quote size={14} /> CLIENT STORIES
          </span>
          <h2>
            Good work is better
            <br />
            <em>when it moves people.</em>
          </h2>
          <p>Stories and perspectives from the people behind the progress.</p>
          <div className="testimonial-rating">
            <b>★★★★★</b>
            <span>Client-first thinking · Connected growth</span>
          </div>
        </div>
        <div className="testimonial-orbit-stage">
          <div className="testimonial-glass-orb">
            <span>“</span>
            <b>
              Real work.
              <br />
              Real momentum.
            </b>
            <i />
          </div>
          <article className="testimonial-float testimonial-float-a">
            <span>PK</span>
            <p>“They understood the business, not just the brief.”</p>
            <small>PRIYA K. · CLIENT STORY</small>
          </article>
          <article className="testimonial-float testimonial-float-b">
            <span>RM</span>
            <p>“A thoughtful team that connected every moving part.”</p>
            <small>RAHUL M. · CLIENT STORY</small>
          </article>
          <article className="testimonial-float testimonial-float-c">
            <span>SK</span>
            <p>
              “Clear thinking, creative execution and a real focus on outcomes.”
            </p>
            <small>SNEHA K. · CLIENT STORY</small>
          </article>
          <div className="testimonial-orbit-line orbit-line-a" />
          <div className="testimonial-orbit-line orbit-line-b" />
        </div>
      </section>
      <section className="rx-home-creators">
        <header className="rx-creators-heading scroll-on-view">
          <span className="section-label">
            <Clapperboard size={14} /> CREATOR CONTENT, AT SCALE
          </span>
          <h2>
            Quality content.
            <br />
            <em>At scale.</em>
          </h2>
          <p>
            Briefing, creator selection and quality checks help brands build
            platform-native stories for Instagram and YouTube. The supplied
            reference describes a curated network of 10,000+ creators; confirm
            this claim before publication.
          </p>
          <button
            type="button"
            className="services-cta-link rx-audit-button"
            onClick={openAudit}
          >
            Plan a creator campaign <ArrowUpRight size={17} />
          </button>
        </header>
        <div className="rx-creator-editorial">
          <div className="rx-creator-art rx-creator-feature-art">
            <i />
            <b>
              Ideas made
              <br />
              to move people.
            </b>
            <span>CREATIVE / SOCIAL / VIDEO</span>
          </div>
          <div className="rx-creator-editorial-list">
            <article className="rx-creator-line rx-reveal">
              <span>01</span>
              <div>
                <h3>Product stories</h3>
                <p>
                  Short-form creative that makes the value clear and memorable.
                </p>
              </div>
              <ArrowUpRight size={18} />
            </article>
            <article className="rx-creator-line rx-reveal">
              <span>02</span>
              <div>
                <h3>Creator point of view</h3>
                <p>
                  Platform-native storytelling shaped around real audiences.
                </p>
              </div>
              <ArrowUpRight size={18} />
            </article>
            <article className="rx-creator-line rx-reveal">
              <span>03</span>
              <div>
                <h3>Content built to travel</h3>
                <p>
                  Flexible assets for paid campaigns, organic social and reuse.
                </p>
              </div>
              <ArrowUpRight size={18} />
            </article>
          </div>
        </div>
      </section>
      <section className="rx-home-news">
        <header className="scroll-on-view">
          <span className="section-label">
            <Newspaper size={14} /> PRESS & MENTIONS
          </span>
          <h2>
            Cruzen Digital
            <br />
            <em>Published In News.</em>
          </h2>
          <p>
            Press-highlight section reproduced from the supplied reference ZIP.
            Confirm publication URLs and media permissions before treating these
            as independently verified press mentions.
          </p>
        </header>
        <div className="rx-news-list">
          {[
            {
              brand: "FORBES INDIA",
              date: "March 2026",
              headline:
                "Hyderabad’s Cruzen Digital is redefining performance marketing for D2C brands",
            },
            {
              brand: "YourStory",
              date: "February 2026",
              headline:
                "How this agency helped brands cut CAC while scaling ROAS",
            },
            {
              brand: "Inc42",
              date: "January 2026",
              headline:
                "The automation-first approach changing how Indian D2C brands grow online",
            },
            {
              brand: "THE ECONOMIC TIMES",
              date: "December 2025",
              headline:
                "Digital marketing agencies driving India’s D2C wave — Cruzen Digital in the spotlight",
            },
          ].map((item, i) => (
            <article
              className="rx-news-row rx-reveal"
              key={item.brand}
              style={{ "--news-index": i }}
            >
              <span className="rx-news-row-index">0{i + 1}</span>
              <div className="rx-news-brand">
                {item.brand}
                <small>{item.date}</small>
              </div>
              <h3>{item.headline}</h3>
              <span className="rx-news-row-arrow">
                <ArrowUpRight size={18} />
              </span>
            </article>
          ))}
        </div>
      </section>
      <section className="rx-home-areas">
        <div>
          <span className="section-label">
            <Globe2 size={14} /> WHERE WE WORK
          </span>
          <h2>
            Local insight.
            <br />
            <em>Digital reach.</em>
          </h2>
          <p>
            Collaborate remotely with brands across India and businesses
            reaching customers through global marketplaces.
          </p>
          <Link to="/contact" className="services-cta-link">
            Talk to our team <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="rx-area-cloud">
          {[
            "Delhi NCR",
            "Mumbai",
            "Bengaluru",
            "Hyderabad",
            "Chennai",
            "Pune",
            "Ahmedabad",
            "Jaipur",
            "Kolkata",
            "Pan-India",
            "Global Sellers",
          ].map((city, i) => (
            <span key={city} style={{ "--area-index": i }}>
              {city}
            </span>
          ))}
        </div>
      </section>
      <section className="rx-home-faq">
        <header>
          <span className="section-label">START WITH CLARITY</span>
          <h2>
            What would you like to <em>improve?</em>
          </h2>
          <p>We can help you identify the most useful place to start.</p>
        </header>
        <div className="rx-home-faq-links">
          <Link to="/services/seo">
            <Search />
            Organic visibility <ArrowUpRight />
          </Link>
          <Link to="/services/google-ads">
            <Megaphone />
            Paid campaigns <ArrowUpRight />
          </Link>
          <Link to="/services/website-design">
            <Globe2 />
            Website experience <ArrowUpRight />
          </Link>
          <Link to="/services/amazon">
            <ShoppingBag />
            Marketplace growth <ArrowUpRight />
          </Link>
        </div>
      </section>
      <section className="rx-home-final-cta rx-final-cta-premium">
        <div className="rx-final-cta-copy">
          <span className="section-label">
            <Sparkles size={14} /> YOUR NEXT CHAPTER STARTS HERE
          </span>
          <h2>
            Make your next move
            <br />
            <em>mean something.</em>
          </h2>
          <p>
            Start with a clearer view of your digital opportunities. We’ll help
            you find the right next step—without the noise.
          </p>
          <div className="rx-final-cta-actions">
            <button
              type="button"
              onClick={openAudit}
              className="services-cta-link rx-audit-button"
            >
              Get a free growth audit <ArrowUpRight size={17} />
            </button>
            <Link to="/contact" className="rx-final-contact-link">
              Talk to our team <ArrowRight size={16} />
            </Link>
          </div>
          <div className="rx-final-cta-proof">
            <span>
              <CheckCircle2 size={15} /> Practical recommendations
            </span>
            <span>
              <CheckCircle2 size={15} /> Clear next steps
            </span>
          </div>
        </div>
        <div className="rx-final-cta-art" aria-hidden="true">
          <div className="rx-final-cta-glow" />
          <div className="rx-final-orbit">
            <Rocket size={34} />
            <span />
          </div>
          <div className="rx-final-float rx-final-float-top">
            <small>THE NEXT STEP</small>
            <strong>Clarity → Momentum</strong>
          </div>
          <div className="rx-final-float rx-final-float-bottom">
            <span className="rx-final-live-dot" /> Strategy. Creativity. Growth.
          </div>
          <i className="rx-final-cta-ring ring-a" />
          <i className="rx-final-cta-ring ring-b" />
        </div>
      </section>
    </>
  );
}
