import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, BarChart3, ShoppingBag, Globe2, MousePointer2, Sparkles, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/pages/our-work.css";

const projects = [
  { number: "01", type: "MARKETPLACE EXPERIENCE", title: "A storefront built to make discovery easier.", description: "A concept direction for clearer product hierarchy, sharper catalogue storytelling and a smoother path from browse to buy.", metric: "DISCOVER → COMPARE → BUY", icon: ShoppingBag, className: "work-project-lilac", tags: ["Marketplace", "Conversion UX", "Catalogue"] },
  { number: "02", type: "PERFORMANCE CAMPAIGNS", title: "Less guesswork. More intentional growth.", description: "A campaign system concept connecting audience intent, landing-page messaging and ongoing performance insights.", metric: "PLAN → TEST → REFINE", icon: BarChart3, className: "work-project-orbit", tags: ["Google Ads", "Analytics", "Landing pages"] },
  { number: "03", type: "DIGITAL BRAND EXPERIENCE", title: "A brand presence that feels unmistakably yours.", description: "A modern digital experience concept with a consistent visual language, purposeful motion and responsive layouts.", metric: "IDENTITY → EXPERIENCE → TRUST", icon: Globe2, className: "work-project-grid", tags: ["Web design", "Branding", "UX"] },
];

const reveal = { hidden: { opacity: 0, y: 42 }, visible: { opacity: 1, y: 0 } };

export default function OurWorkPage() {
  return (
    <main className="our-work-page">
      <section className="work-hero">
        <div className="work-hero-noise" aria-hidden="true" />
        <motion.div className="work-hero-copy" initial="hidden" animate="visible" variants={reveal} transition={{ duration: .75, ease: [.2,.75,.25,1] }}>
          <span className="work-eyebrow"><Sparkles size={14} /> IDEAS INTO DIGITAL EXPERIENCES</span>
          <h1>Good digital work should <em>move something.</em></h1>
          <p>Explore how strategy, creative thinking and purposeful digital execution can come together to help a brand take its next step.</p>
          <div className="work-hero-actions"><a href="#selected-work" className="work-primary-link">Explore the work <ArrowDownRight size={17} /></a><span className="work-note"><span /> STRATEGY WITH INTENTION</span></div>
        </motion.div>
        <motion.div className="work-hero-art" initial={{ opacity: 0, scale: .82, rotate: 8 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: .15, ease: "easeOut" }} aria-hidden="true">
          <div className="work-glass-disc disc-back" /><div className="work-glass-disc disc-middle" /><div className="work-glass-disc disc-front"><span>IDEA</span><strong>IN<br/>MOTION</strong><Sparkles size={22} /></div>
          <div className="work-orbit-ring ring-a" /><div className="work-orbit-ring ring-b" />
          <div className="work-float-chip chip-top"><Target size={16} /> Strategy first</div><div className="work-float-chip chip-right"><Zap size={16} /> Built to evolve</div><div className="work-float-chip chip-bottom"><MousePointer2 size={16} /> Human-centred</div>
        </motion.div>
        <div className="work-hero-bottom"><span>SCROLL TO EXPLORE</span><div className="work-scroll-line" /></div>
      </section>

      <section className="work-intro scroll-on-view scroll-from-bottom" id="selected-work">
        <div><span className="work-section-kicker">SELECTED DIRECTIONS / 01—03</span><h2>Different challenges.<br/><em>Thoughtful digital answers.</em></h2></div>
        <p>These are illustrative creative directions that show how Cruzen Digital approaches marketplace growth, performance marketing and brand experience—not published client case studies or guaranteed results.</p>
      </section>

      <section className="work-project-list">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return <motion.article key={project.number} className={`work-project ${project.className}`} style={{ "--stack-index": index }} initial={{ opacity: 0, y: 55, rotateX: 3 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .7, delay: .06, ease: [.2,.75,.25,1] }}>
            <div className="work-project-copy"><span className="work-project-number">{project.number} / {project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="work-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><span className="work-project-metric">{project.metric}</span></div>
            <div className="work-project-visual"><div className="work-visual-grid" /><div className="work-visual-window"><div className="visual-window-top"><span/><span/><span/><small>cruzen / concept {project.number}</small></div><div className="visual-window-content"><div className="visual-mini-label">DIGITAL GROWTH SYSTEM</div><div className="visual-big-line line-one"/><div className="visual-big-line line-two"/><div className="visual-mini-bars"><i/><i/><i/><i/><i/></div><div className="visual-stat"><Icon size={21}/><strong>{project.number}</strong><span>DESIGNED WITH INTENT</span></div></div></div><div className="visual-orb"/><span className="visual-index">{project.number}</span></div>
          </motion.article>;
        })}
      </section>

      <motion.section className="work-process" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .2 }} variants={{ visible: { transition: { staggerChildren: .14 } }, hidden: {} }}>
        <div className="work-process-heading"><span className="work-section-kicker">THE THINKING BEHIND THE WORK</span><h2>Built with purpose.<br/><em>Improved with insight.</em></h2></div>
        <div className="work-process-steps">{[{n:"01",title:"Understand",text:"Start with the audience, the challenge and the outcome that matters."},{n:"02",title:"Shape",text:"Turn insights into a clear strategy and considered experience."},{n:"03",title:"Optimise",text:"Learn from real behaviour and keep improving the next move."}].map(step => <motion.div key={step.n} className="work-process-step" variants={reveal} transition={{ duration: .55 }}><span>{step.n}</span><h3>{step.title}</h3><p>{step.text}</p></motion.div>)}</div>
      </motion.section>

      <motion.section className="work-bottom-cta" initial={{ opacity: 0, y: 35, scale: .98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .65 }}><div className="work-cta-orb" aria-hidden="true"/><span className="work-section-kicker">YOUR NEXT CHAPTER STARTS HERE</span><h2>Have a challenge worth solving?</h2><p>Let’s turn your next digital idea into a thoughtful plan of action.</p><Link to="/contact" className="work-primary-link">Let’s talk about it <ArrowUpRight size={17}/></Link></motion.section>
    </main>
  );
}
