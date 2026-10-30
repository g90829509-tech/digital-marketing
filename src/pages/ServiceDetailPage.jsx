import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles, Target, TrendingUp, Layers3 } from "lucide-react";
import { searchableServices } from "../data/navigation.js";
import "../styles/pages/service-detail.css";

const copyBySlug = {
  amazon: { eyebrow: "MARKETPLACE GROWTH", title: "Make your marketplace presence work harder.", intro: "A clearer strategy for stronger product visibility, smoother operations and sustainable growth across Amazon.", points: ["Store and catalogue optimisation", "Product detail page improvements", "Campaign and performance monitoring"] },
  "google-ads": { eyebrow: "PERFORMANCE MARKETING", title: "Turn intent into measurable action.", intro: "Build smarter paid-search campaigns around the people, products and outcomes that matter to your business.", points: ["Campaign structure and keyword planning", "Conversion-focused ad messaging", "Ongoing optimisation and reporting"] },
  seo: { eyebrow: "ORGANIC GROWTH", title: "Get found by the right people, naturally.", intro: "Create a strong search foundation with useful content, technical improvements and a strategy built for long-term discovery.", points: ["Technical and on-page SEO", "Search intent and content planning", "Performance tracking and insights"] },
  "website-design": { eyebrow: "DIGITAL EXPERIENCE", title: "A digital experience that moves people forward.", intro: "Bring your brand to life with thoughtful page structure, clear messaging and a responsive experience across devices.", points: ["UX and conversion-focused layouts", "Responsive design systems", "Performance and usability improvements"] },
};

const steps = [
  { icon: Target, number: "01", title: "Discover", text: "We learn about your goals, audience and current challenges." },
  { icon: Layers3, number: "02", title: "Build the plan", text: "We shape a focused roadmap around the right priorities." },
  { icon: TrendingUp, number: "03", title: "Improve and grow", text: "We review what is working and refine the next move." },
];

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = useMemo(() => searchableServices.find((item) => item.path.split("/").pop() === slug), [slug]);
  const details = copyBySlug[slug] || {
    eyebrow: service?.group?.toUpperCase() || "CRUZEN DIGITAL SERVICES",
    title: `${service?.label || "Digital growth"}, with a clearer direction.`,
    intro: `A practical, tailored approach to ${String(service?.label || "your business goals").toLowerCase()}—designed around your audience, priorities and next stage of growth.`,
    points: ["Strategy aligned to your goals", "Clear execution and communication", "Ongoing review and improvement"],
  };

  if (!service) return <main className="service-detail not-found-service"><span className="section-label">SERVICE NOT FOUND</span><h1>Let’s find the right service for you.</h1><Link className="service-detail-button" to="/">Back to home <ArrowUpRight size={17} /></Link></main>;

  return (
    <main className="service-detail">
      <section className="service-detail-hero">
        <motion.div className="service-detail-copy" initial={{ opacity: 0, x: -36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <Link to="/" className="service-back"><ArrowLeft size={15} /> Back to overview</Link>
          <span className="service-eyebrow"><Sparkles size={14} /> {details.eyebrow}</span>
          <h1>{details.title}</h1>
          <p className="service-detail-intro">{details.intro}</p>
          <div className="service-detail-actions"><Link className="service-detail-button" to="/">Let’s talk <ArrowUpRight size={17} /></Link><a className="service-text-link" href="#approach">Explore our approach <ArrowDownRight size={17} /></a></div>
        </motion.div>
        <motion.div className="service-orbit-visual" initial={{ opacity: 0, scale: 0.78, rotate: -12 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }} aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <motion.div className="orbit-core" animate={{ y: [0, -9, 0], rotate: [0, 4, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}><Sparkles size={35} strokeWidth={1.4} /><span>GROW<br />WITH INTENT</span></motion.div>
          <span className="orbit-tag orbit-tag-top">Strategy</span><span className="orbit-tag orbit-tag-right">Clarity</span><span className="orbit-tag orbit-tag-bottom">Momentum</span>
        </motion.div>
        <motion.a href="#what-you-get" className="service-scroll-cue" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>SCROLL TO EXPLORE <ArrowDownRight size={15} /></motion.a>
      </section>

      <section className="service-benefits" id="what-you-get">
        <motion.div className="service-section-heading" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
          <span className="section-label">WHAT YOU GET</span><h2>Good work starts with the <em>right foundations.</em></h2><p>Focused support that connects the everyday details to your bigger business goals.</p>
        </motion.div>
        <div className="service-benefit-grid">
          {details.points.map((point, index) => <motion.article className={`service-benefit-card${index === 0 ? " service-benefit-card--featured" : ""}`} key={point} initial={{ opacity: 0, y: 30, rotate: index % 2 ? 2 : -2 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, delay: index * 0.13 }} whileHover={{ y: -7 }}><span className="benefit-index">0{index + 1}</span><CheckCircle2 size={23} strokeWidth={1.7} /><h3>{point}</h3><p>Thoughtful, practical improvements that support a more consistent customer experience.</p></motion.article>)}
        </div>
      </section>

      <section className="service-approach" id="approach">
        <div className="service-approach-heading"><span className="section-label">A SIMPLE APPROACH</span><h2>From first conversation to <em>forward motion.</em></h2></div>
        <div className="service-steps"><motion.span className="service-steps-progress" aria-hidden="true" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} />{steps.map((step, index) => { const Icon = step.icon; return <motion.article key={step.number} className="service-step" initial={{ opacity: 0, x: index % 2 ? 25 : -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: index * 0.12 }}><span className="step-number">{step.number}</span><Icon size={25} strokeWidth={1.6} /><h3>{step.title}</h3><p>{step.text}</p></motion.article>; })}</div>
      </section>

      <motion.section className="service-bottom-cta" initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }}><span className="section-label">YOUR NEXT MOVE</span><h2>Ready to make your next move count?</h2><p>Tell us where you want to go. We’ll help you work out a practical way forward.</p><Link className="service-detail-button" to="/">Start a conversation <ArrowUpRight size={17} /></Link></motion.section>
    </main>
  );
}
