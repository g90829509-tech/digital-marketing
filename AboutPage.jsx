import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Activity,
  Aperture,
  BrainCircuit,
  Compass,
  Layers3,
  Orbit,
  Sparkles,
  Target,
  TrendingUp,
  WandSparkles,
} from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/pages/about.css";

const principles = [
  {
    n: "01",
    icon: Compass,
    title: "Strategy before noise",
    text: "We start by understanding your audience, your offer and the business outcome that matters—then choose the channels that make sense.",
  },
  {
    n: "02",
    icon: BrainCircuit,
    title: "Creative with a purpose",
    text: "Clear messaging, considered design and useful experiences help your brand earn attention instead of simply asking for it.",
  },
  {
    n: "03",
    icon: TrendingUp,
    title: "Learn, measure, improve",
    text: "Digital growth is an ongoing process. We use meaningful signals to understand what is working and where the next opportunity may be.",
  },
];
const capabilities = [
  "Marketplace growth",
  "SEO & organic visibility",
  "Paid media strategy",
  "Social media & content",
  "Web experiences",
  "Conversion optimisation",
];

export default function AboutPage() {
  const storyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], [70, -90]);
  const orbRotate = useTransform(scrollYProgress, [0, 1], [-18, 34]);

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-grid" aria-hidden="true" />
        <motion.div
          className="about-hero-copy"
          initial={{ opacity: 0, x: -38 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.75, 0.25, 1] }}
        >
          <span className="about-kicker">
            <Sparkles size={14} /> A DIGITAL GROWTH PARTNER
          </span>
          <h1>
            Good growth starts with <em>good thinking.</em>
          </h1>
          <p>
            We bring strategy, creative and digital execution together to help
            brands build stronger experiences and make their next move with
            intention.
          </p>
          <div className="about-hero-actions">
            <Link to="/services/seo" className="about-primary">
              Explore what we do <ArrowUpRight size={17} />
            </Link>
            <a href="#our-approach" className="about-text-link">
              Our approach <ArrowDownRight size={16} />
            </a>
          </div>
          <div className="about-hero-proof">
            <span>
              <i /> Strategy-led
            </span>
            <span>
              <i /> Audience-focused
            </span>
            <span>
              <i /> Built to evolve
            </span>
          </div>
        </motion.div>
        <motion.div
          className="about-hero-art"
          initial={{ opacity: 0, scale: 0.78, rotate: 9 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.12, ease: "easeOut" }}
          aria-hidden="true"
        >
          <motion.div
            className="about-orbit orbit-one"
            style={{ rotate: orbRotate }}
          />
          <motion.div
            className="about-orbit orbit-two"
            style={{ rotate: orbRotate }}
          />
          <motion.div className="about-crystal" style={{ y: orbY }}>
            <div className="crystal-face face-one" />
            <div className="crystal-face face-two" />
            <div className="crystal-core">
              <Aperture size={32} />
              <span>
                THINK
                <br />
                FORWARD
              </span>
            </div>
          </motion.div>
          <motion.div
            className="about-float-card float-strategy"
            animate={{ y: [0, -9, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Target size={17} />
            <span>Clear direction</span>
            <strong>01</strong>
          </motion.div>
          <motion.div
            className="about-float-card float-growth"
            animate={{ y: [0, 8, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Activity size={17} />
            <span>Continuous learning</span>
            <strong>↗</strong>
          </motion.div>
          <div className="about-art-caption">IDEAS · INSIGHT · IMPACT</div>
        </motion.div>
        <a href="#our-approach" className="about-scroll-hint">
          <span>SCROLL TO DISCOVER</span>
          <i />
        </a>
      </section>

      <section className="about-manifesto" ref={storyRef}>
        <motion.div
          className="about-manifesto-orb"
          style={{ y: orbY, rotate: orbRotate }}
          aria-hidden="true"
        >
          <div />
          <div />
          <div />
        </motion.div>
        <motion.div
          className="about-manifesto-copy"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75 }}
        >
          <span className="about-section-label">OUR POINT OF VIEW / 01</span>
          <h2>
            Digital should do more than <em>look good.</em>
          </h2>
          <p>
            It should make your value easier to understand, your brand easier to
            remember and the next step easier to take. We connect the
            pieces—from first discovery to the experience after the click—so
            every part has a reason to be there.
          </p>
        </motion.div>
        <motion.div
          className="about-manifesto-note"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          <span className="note-icon">
            <WandSparkles size={22} />
          </span>
          <strong>Clarity over clutter.</strong>
          <p>
            Thoughtful choices make digital experiences feel more human, useful
            and connected.
          </p>
          <span className="note-mark">C / D</span>
        </motion.div>
      </section>

      <section className="about-journey" aria-labelledby="about-journey-title">
        <div className="journey-backdrop-grid" aria-hidden="true" />
        <div
          className="journey-ambient journey-ambient-one"
          aria-hidden="true"
        />
        <div
          className="journey-ambient journey-ambient-two"
          aria-hidden="true"
        />
        <header className="journey-heading">
          <span className="about-section-label">A BETTER WAY FORWARD / 02</span>
          <h2 id="about-journey-title">
            From scattered tactics
            <br />
            <em>to connected growth.</em>
          </h2>
          <p>
            Every strong digital presence is built in layers. We connect each
            one so your next step has something solid to stand on.
          </p>
        </header>
        <div className="journey-track">
          {[
            {
              year: "01",
              title: "Understand the landscape",
              label: "INSIGHT",
              text: "Start with the business, audience, competition and the friction points that hold growth back.",
              icon: Compass,
            },
            {
              year: "02",
              title: "Shape the direction",
              label: "STRATEGY",
              text: "Prioritise the channels and opportunities that fit your goals—not every trend on the internet.",
              icon: Target,
            },
            {
              year: "03",
              title: "Make the experience real",
              label: "EXECUTION",
              text: "Bring campaigns, content, marketplaces and web experiences into a consistent system.",
              icon: Layers3,
            },
            {
              year: "04",
              title: "Learn and compound",
              label: "MOMENTUM",
              text: "Review performance, find the next opportunity and keep improving with purpose.",
              icon: TrendingUp,
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                className={`journey-milestone journey-milestone-${i + 1}`}
                key={item.year}
                initial={{ opacity: 0, y: 70, rotateX: 12, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.08,
                  ease: [0.2, 0.75, 0.25, 1],
                }}
                whileHover={{ y: -7 }}
              >
                <div className="journey-milestone-top">
                  <span>
                    {item.year} / {item.label}
                  </span>
                  <Icon size={19} />
                </div>
                <div className="journey-milestone-node">
                  <span />
                  <i />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="journey-milestone-bottom">
                  <span>CRUZEN METHOD</span>
                  <ArrowUpRight size={16} />
                </div>
              </motion.article>
            );
          })}
        </div>
        <div className="journey-track-line" aria-hidden="true">
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        </div>
      </section>

      <section className="about-approach" id="our-approach">
        <div className="about-section-heading">
          <span className="about-section-label">THE WAY WE THINK / 02</span>
          <h2>
            One connected approach.
            <br />
            <em>Every move with a reason.</em>
          </h2>
          <p>
            Good digital work is rarely one isolated tactic. It is a set of
            connected decisions that support a clear goal.
          </p>
        </div>
        <div className="about-principles">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                className={`about-principle principle-${index + 1}`}
                key={item.n}
                initial={{ opacity: 0, y: 54, rotate: index % 2 ? 2 : -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.68,
                  delay: index * 0.13,
                  ease: [0.2, 0.75, 0.25, 1],
                }}
                whileHover={{ y: -8 }}
              >
                <div className="principle-top">
                  <span>{item.n} / PRINCIPLE</span>
                  <Icon size={23} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="principle-orb" aria-hidden="true" />
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="about-capabilities">
        <div className="capabilities-copy">
          <span className="about-section-label">WHERE WE CAN HELP / 03</span>
          <h2>
            Different channels.
            <br />
            <em>One bigger picture.</em>
          </h2>
          <p>
            We bring together the right digital capabilities for the challenge
            in front of you—not a one-size-fits-all checklist.
          </p>
          <Link to="/work" className="about-inline-link">
            Explore our work <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="capability-cloud">
          <div className="capability-cloud-core">
            <Orbit size={28} />
            <span>
              YOUR
              <br />
              GROWTH
            </span>
          </div>
          {capabilities.map((item, i) => (
            <motion.div
              key={item}
              className={`capability-pill capability-${i + 1}`}
              initial={{ opacity: 0, scale: 0.75, y: 18 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ scale: 1.06, y: -4 }}
            >
              {item}
            </motion.div>
          ))}
          <div className="capability-ring ring-inner" />
          <div className="capability-ring ring-outer" />
        </div>
      </section>

      <motion.section
        className="about-cta"
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
      >
        <div className="about-cta-art" aria-hidden="true">
          <div />
          <div />
          <div />
        </div>
        <span className="about-section-label">YOUR NEXT MOVE / 04</span>
        <h2>
          Let’s make your next digital move <em>count.</em>
        </h2>
        <p>
          Tell us what you are building, where you want to go and what feels
          stuck. We can start from there.
        </p>
        <Link to="/contact" className="about-primary">
          Start a conversation <ArrowUpRight size={17} />
        </Link>
      </motion.section>
    </main>
  );
}
