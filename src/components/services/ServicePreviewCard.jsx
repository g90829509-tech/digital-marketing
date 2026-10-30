import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const localVisuals = {
  amazon: "amazon", flipkart: "flipkart", meesho: "meesho", myntra: "myntra", ajio: "ajio",
  nyka: "nykaa", ebay: "ebay", etsy: "etsy", shopify: "shopify",
};

const artWords = ["SELL", "REACH", "CREATE", "GROW"];

export default function ServicePreviewCard({ icon: Icon, title, desc, to, index = 0, groupIndex = 0 }) {
  const slug = to.split("/").pop();
  const visual = localVisuals[slug];
  const number = String(index + 1).padStart(2, "0");
  return (
    <Link
      to={to}
      className={`editorial-service-card service-variant-${groupIndex + 1}`}
      style={{ "--service-index": index, "--service-group": groupIndex }}
      aria-label={`${title}: ${desc}`}
    >
      <span className={`editorial-service-art editorial-art-${(index + groupIndex) % 4}`} aria-hidden="true">
        <span className="editorial-art-grid" />
        <span className="editorial-art-orbit editorial-art-orbit-a" />
        <span className="editorial-art-orbit editorial-art-orbit-b" />
        <span className="editorial-art-core"><Icon size={36} strokeWidth={1.35} /></span>
        {visual && <img className="editorial-platform-logo" src={`${import.meta.env.BASE_URL}assets/logos/${visual}.png`} alt="" loading="lazy" onError={(e) => { e.currentTarget.hidden = true; }} />}
        <span className="editorial-art-word">{artWords[(index + groupIndex) % artWords.length]}</span>
        <span className="editorial-art-index">CRUZEN / {number}</span>
      </span>
      <span className="editorial-service-copy">
        <span className="editorial-service-meta"><span>CAPABILITY {number}</span><span className="editorial-service-arrow"><ArrowUpRight size={19} /></span></span>
        <strong>{title}</strong>
        <span className="editorial-service-desc">{desc}</span>
        <span className="editorial-service-explore">Explore capability <i><ArrowUpRight size={14} /></i></span>
      </span>
      <span className="editorial-service-edge" aria-hidden="true" />
    </Link>
  );
}
