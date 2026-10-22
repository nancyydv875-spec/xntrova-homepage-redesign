import { useState } from "react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Check,
  Search, MousePointer2, Layers3, LineChart, Sparkles
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Search,
    title: "Search & growth",
    text: "Get found by the people already looking for what you do.",
    tags: ["SEO", "Paid search", "Analytics"]
  },
  {
    number: "02",
    icon: MousePointer2,
    title: "Brand & content",
    text: "Turn what makes you different into a story people remember.",
    tags: ["Social media", "Content", "Creative"]
  },
  {
    number: "03",
    icon: Layers3,
    title: "Digital experiences",
    text: "Useful, thoughtful websites that make the next step feel easy.",
    tags: ["Web design", "Development", "UX"]
  },
  {
    number: "04",
    icon: LineChart,
    title: "Performance",
    text: "Make decisions with a clear view of what is working and why.",
    tags: ["Campaigns", "Reporting", "Optimisation"]
  }
];

const projects = [
  {
    category: "DIGITAL EXPERIENCE",
    title: "A clearer path to conversion",
    type: "Website strategy · UI design",
    className: "project-art project-art--one",
    label: "01"
  },
  {
    category: "BRAND & CONTENT",
    title: "A brand with something to say",
    type: "Creative direction · Social",
    className: "project-art project-art--two",
    label: "02"
  },
  {
    category: "GROWTH MARKETING",
    title: "Turning attention into action",
    type: "Search · Performance",
    className: "project-art project-art--three",
    label: "03"
  }
];

const steps = [
  ["01", "Get the full picture", "We start with your goals, your audience, and the things getting in the way."],
  ["02", "Find the right move", "Together, we shape a practical plan around the opportunities that matter most."],
  ["03", "Make it happen", "Our team builds, tests, and launches with care—not guesswork."],
  ["04", "Learn and improve", "We look at the results, share what we learn, and keep making progress."]
];

function Brand({ footer = false }) {
  return (
    <a className={`brand ${footer ? "brand--footer" : ""}`} href="#home" aria-label="Xntrova home">
      <span className="brand-mark"><span /><span /><span /></span>
      <span>xntrova<span className="brand-dot">.</span></span>
    </a>
  );
}

function SectionLabel({ children }) {
  return <div className="section-label"><span />{children}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  function updateForm(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    setSubmitted(false);
  }

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <Brand />
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={menuOpen ? "nav nav--open" : "nav"} aria-label="Main navigation">
            <a href="#services" onClick={closeMenu}>What we do</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#work" onClick={closeMenu}>Our work</a>
            <a href="#process" onClick={closeMenu}>How we work</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <div className="eyebrow"><span className="status-dot" /> DIGITAL STRATEGY. HUMAN THINKING.</div>
              <h1>Make your<br />next move <span>matter.</span></h1>
              <p className="hero-text">We bring strategy, creative, and technology together to help ambitious businesses move forward—with purpose.</p>
              <div className="hero-actions">
                <a className="button button--light" href="#contact">Let’s build something <ArrowUpRight size={17} /></a>
                <a className="text-link text-link--light" href="#work">See what we do <ArrowDownRight size={17} /></a>
              </div>
              <div className="hero-note"><span className="note-line" />A thoughtful digital partner for your next chapter.</div>
            </div>
            <div className="hero-visual" aria-label="Abstract digital growth illustration">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="visual-orbit orbit-three" />
              <div className="visual-core"><span className="core-star">✳</span><span className="core-caption">IDEAS<br />IN MOTION</span></div>
              <div className="float-card float-card--top"><span className="mini-icon"><Sparkles size={15} /></span><span><b>Think clearly.</b><small>Strategy first</small></span></div>
              <div className="float-card float-card--bottom"><span className="chart-mini"><i /><i /><i /><i /><i /></span><span><b>Move forward.</b><small>Built to grow</small></span><ArrowUpRight size={16} /></div>
              <div className="visual-index">01 / 04</div>
            </div>
            <a className="scroll-cue" href="#services"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={15} /></a>
          </div>
        </section>

        <section className="trust-strip" aria-label="Our approach">
          <div className="container trust-inner">
            <span>GOOD WORK STARTS WITH GOOD QUESTIONS.</span>
            <div className="trust-items"><span>Strategy-led</span><i /> <span>People-first</span><i /> <span>Built for progress</span></div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <div><SectionLabel>WHAT WE DO</SectionLabel><h2>All the right pieces.<br /><span>Working together.</span></h2></div>
              <p>Digital growth isn’t one big trick. It’s a series of smart choices, connected by a clear point of view.</p>
            </div>
            <div className="services-grid">
              {services.map(({ number, icon: Icon, title, text, tags }) => (
                <article className="service-card" key={number}>
                  <div className="service-top"><span className="service-number">{number}</span><span className="service-icon"><Icon size={21} strokeWidth={1.7} /></span></div>
                  <h3>{title}</h3><p>{text}</p>
                  <div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <a href="#contact" className="card-arrow" aria-label={`Ask us about ${title}`}><ArrowUpRight size={18} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="container about-grid">
            <div className="about-art">
              <div className="about-art-inner">
                <div className="art-topline"><span>THE XNTROVA APPROACH</span><span>EST. ON CURIOSITY</span></div>
                <div className="big-symbol">x<span>.</span></div>
                <div className="art-bottomline"><span>THINK</span><span>MAKE</span><span>MOVE</span></div>
              </div>
              <div className="about-sticker">Curiosity<br />into clarity <ArrowDownRight size={18} /></div>
            </div>
            <div className="about-copy">
              <SectionLabel>A LITTLE ABOUT US</SectionLabel>
              <h2>Good digital work<br />starts with <span>people.</span></h2>
              <p className="about-lead">Before the clicks, the code, or the campaigns, there’s a person trying to solve a problem. That’s where we start.</p>
              <p>We combine considered strategy with practical execution, keeping the big picture in view while paying attention to the details that make an experience feel right.</p>
              <a href="#process" className="button button--dark">How we work <ArrowUpRight size={16} /></a>
              <div className="about-values"><div><b>01</b><span>Listen before<br />we make</span></div><div><b>02</b><span>Keep it clear<br />and useful</span></div><div><b>03</b><span>Make progress<br />measurable</span></div></div>
            </div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="container">
            <div className="section-heading">
              <div><SectionLabel>SELECTED WORK</SectionLabel><h2>Thoughtful work.<br /><span>Real-world focus.</span></h2></div>
              <p>Every business has a different challenge. The work should reflect that—not follow the same formula every time.</p>
            </div>
            <div className="projects-grid">
              {projects.map(project => (
                <article className="project-card" key={project.label}>
                  <div className={project.className}>
                    <span className="project-count">{project.label}</span>
                    {project.label === "01" && <div className="mock-browser"><div className="browser-dots"><i /><i /><i /></div><div className="browser-content"><span className="mock-line" /><span className="mock-line short" /><div className="mock-button" /><div className="mock-circle" /></div></div>}
                    {project.label === "02" && <div className="brand-poster"><span>MAKE<br />SOME<br /><i>NOISE.</i></span><div className="poster-sun" /></div>}
                    {project.label === "03" && <div className="growth-board"><span>GROWTH / 01</span><b>Make the<br />signal clear.</b><div className="growth-bars"><i /><i /><i /><i /><i /><i /></div></div>}
                    <span className="project-open"><ArrowUpRight size={19} /></span>
                  </div>
                  <div className="project-meta"><span>{project.category}</span><span>CASE STUDY CONCEPT</span></div>
                  <h3>{project.title}</h3><p>{project.type}</p>
                </article>
              ))}
            </div>
            <p className="work-disclaimer">Concept directions shown for this redesign assessment.</p>
          </div>
        </section>

        <section className="benefits-section">
          <div className="container benefits-grid">
            <div className="benefits-intro"><SectionLabel>WHY XNTROVA</SectionLabel><h2>Less noise.<br /><span>More direction.</span></h2><p>You don’t need more digital activity. You need the right activity, connected to a reason and measured against a goal.</p><a href="#contact" className="text-link">Let’s find your next move <ArrowRight size={17} /></a></div>
            <div className="benefit-list">
              <div className="benefit-item"><span>01</span><div><h3>Clear thinking, from day one</h3><p>We make the complex easier to understand, so the next step feels obvious.</p></div><Check size={19} /></div>
              <div className="benefit-item"><span>02</span><div><h3>Made around your business</h3><p>No copy-paste playbooks. The approach should fit your audience, goals, and resources.</p></div><Check size={19} /></div>
              <div className="benefit-item"><span>03</span><div><h3>People you can work with</h3><p>Open conversations, honest recommendations, and collaboration without the jargon.</p></div><Check size={19} /></div>
              <div className="benefit-item"><span>04</span><div><h3>Progress you can see</h3><p>We agree what success looks like and keep learning from what the work tells us.</p></div><Check size={19} /></div>
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container">
            <div className="process-heading"><SectionLabel>HOW WE WORK</SectionLabel><h2>A good process makes<br /><span>good work possible.</span></h2><p>Structured enough to keep things moving. Flexible enough to find a better answer.</p></div>
            <div className="steps-grid">{steps.map(([number, title, text]) => <article className="step-card" key={number}><span className="step-number">{number}</span><div className="step-line" /><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
        </section>

        <section className="testimonials-section" id="testimonials">
          <div className="container testimonials-grid">
            <div className="testimonials-intro"><SectionLabel>CLIENT PERSPECTIVE</SectionLabel><h2>Good work is a<br /><span>shared effort.</span></h2><p>Strong partnerships are built on clear communication, thoughtful decisions, and progress everyone can understand.</p></div>
            <article className="testimonial-card">
              <div className="testimonial-stars" aria-label="Illustrative five-star rating">★★★★★</div>
              <blockquote>“The best partnerships make complex things feel clear. Everyone understands the goal, the next step, and how the work is moving forward.”</blockquote>
              <div className="testimonial-author"><span className="testimonial-avatar" aria-hidden="true">XP</span><span><b>Example testimonial</b><small>Illustrative copy · Replace with an approved client quote</small></span></div>
              <p className="testimonial-note">This is sample content for the assessment layout, not a real client endorsement.</p>
            </article>
          </div>
        </section>

        <section className="quote-section">
          <div className="container quote-inner"><span className="quote-mark">“</span><blockquote>The best digital experiences don’t make people think harder. They make the right next step feel natural.</blockquote><div className="quote-credit"><span className="credit-line" />OUR WORKING PRINCIPLE</div></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy"><SectionLabel>YOUR NEXT MOVE</SectionLabel><h2>Have a good<br />challenge? <span>Let’s talk.</span></h2><p>Tell us a little about what you’re working on. We’ll take it from there, one useful conversation at a time.</p><div className="contact-note"><span className="contact-note-icon"><ArrowUpRight size={18} /></span><div><b>No hard sell. Just a conversation.</b><small>Share what you need and we’ll help you think it through.</small></div></div></div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-heading"><span>START A CONVERSATION</span><span>01 — 04</span></div>
              {submitted ? (
                <div className="success-message" role="status"><span className="success-icon"><Check size={24} /></span><h3>Thanks, {form.name.split(" ")[0]}.</h3><p>Your details have been validated in this demo. Connect the form to an email or backend service to receive real enquiries.</p><button type="button" className="text-link" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", service: "", message: "" }); }}>Send another message <ArrowRight size={16} /></button></div>
              ) : (
                <>
                  <label>Your name<input name="name" value={form.name} onChange={updateForm} placeholder="How should we call you?" required minLength={2} /></label>
                  <label>Email address<input type="email" name="email" value={form.email} onChange={updateForm} placeholder="you@company.com" required /></label>
                  <label>What can we help with?
                    <select name="service" value={form.service} onChange={updateForm} required>
                      <option value="">Choose an area</option><option>Website design & development</option><option>SEO & search marketing</option><option>Brand & social content</option><option>Performance marketing</option><option>Not sure yet</option>
                    </select>
                  </label>
                  <label>A little about your project<textarea name="message" value={form.message} onChange={updateForm} placeholder="What would you like to make better?" rows="3" required minLength={10} /></label>
                  <button className="button button--light form-submit" type="submit">Send your enquiry <ArrowUpRight size={17} /></button>
                  <p className="form-privacy">Your details are only used to respond to this enquiry.</p>
                </>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-top"><div className="footer-brand-wrap"><Brand footer /><p>Clear thinking for your next digital move.</p></div><div className="footer-links"><div><b>EXPLORE</b><a href="#services">What we do</a><a href="#about">About</a><a href="#work">Our work</a><a href="#testimonials">Client perspective</a></div><div><b>LET’S CONNECT</b><a href="#contact">Start a conversation <ArrowUpRight size={13} /></a><a href="#process">Our process</a></div></div><a className="back-top" href="#home" aria-label="Back to top"><ArrowUpRight size={20} /></a></div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Xntrova. Homepage redesign concept.</span><span>MADE WITH INTENTION <span className="footer-star">✳</span></span></div>
      </footer>
    </>
  );
}

export default App;
