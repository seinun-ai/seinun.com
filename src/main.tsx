import { StrictMode, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Brain,
  Compass,
  CornerUpLeft,
  Cpu,
  FileSearch,
  Github,
  HelpCircle,
  Layers,
  Linkedin,
  Mail,
  Menu,
  RefreshCw,
  Sparkles,
  TrendingUp,
  Upload,
  X,
} from "lucide-react";
import "@fontsource-variable/inter";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./styles.css";

/* ---------------------------------- data --------------------------------- */

const EMAIL = "ajey@seinun.com";

const capabilities = [
  {
    icon: Compass,
    title: "AI Strategy & Workflow Discovery",
    text: "AI isn't one-size-fits-all. We study how your business operates, find the specific places where AI will create meaningful value, and build a clear roadmap, so every investment goes where it counts.",
  },
  {
    icon: Cpu,
    title: "Intelligent Business Applications",
    text: "AI tools built around your data and your people. Systems that answer questions, automate repetitive decisions, and surface what your team needs to know, without replacing the people who make the real calls.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Decision Intelligence",
    text: "Turn raw data into clarity. Dashboards and reporting systems that connect directly to your operations and help your team make confident, well-informed decisions every day.",
  },
  {
    icon: TrendingUp,
    title: "Predictive & Proactive AI",
    text: "Anticipate problems before they arrive. Systems that forecast outcomes, flag risks early, and give your business the lead time to act, not just react.",
  },
];

const proofPoints = [
  {
    icon: BarChart3,
    title: "Enterprise Data Systems",
    text: "Built automated reporting infrastructure for British Airways (via TCS) that freed teams from manual data work and gave them time back for decisions that matter.",
  },
  {
    icon: FileSearch,
    title: "Document Intelligence for a Client",
    text: "An AI system that read and assessed business documents against acceptance criteria, dramatically reducing the time teams spent on manual review.",
  },
  {
    icon: Award,
    title: "Award-Winning AI Product",
    text: "LoopMind, 1st place at the AWS GenAI Hackathon 2026. Proof that accessible, well-designed AI can compete at the highest level.",
  },
  {
    icon: BadgeCheck,
    title: "Certified & Accountable",
    text: "AWS Certified Solutions Architect and AI Practitioner. We hold ourselves to the same standards we set for the work.",
  },
];

const services = [
  {
    title: "AI Assistants & Document Intelligence",
    text: "Give your team an AI that knows your business. We build systems that read your documents, answer questions from your internal knowledge, and help your people work faster, without replacing them. The goal is always more capable people, not fewer people.",
  },
  {
    title: "Analytics & Business Intelligence",
    text: "Stop reporting on the past and start understanding it. We build dashboards and data systems that connect directly to your operations, so your team can make confident, informed decisions, not just collect numbers.",
  },
  {
    title: "Predictive & Early-Warning Systems",
    text: "Know what's coming before it arrives. We build systems that forecast outcomes, flag risks, and surface patterns, giving your business the lead time to act, not just react.",
  },
  {
    title: "Data Infrastructure & Cloud",
    text: "AI is only as good as the data behind it. We build the pipelines and cloud infrastructure that keeps your data clean, reliable, and ready to power the applications your business depends on.",
  },
];

const workSteps = [
  {
    title: "Discover",
    text: "We map your workflow, understand your goals, and identify the specific places where AI will create real productivity and profit gains. You'll know exactly what we're building, and why, before any work begins.",
  },
  {
    title: "Build",
    text: "We build in stages and show you working results at every step, not status updates. You stay informed and in control throughout the process.",
  },
  {
    title: "Hand off",
    text: "Everything we build is yours. Documented, ready to deploy, and designed so your team can own and operate it independently going forward.",
  },
];

const products = [
  {
    name: "LoopMind",
    featured: true,
    tagline: "AI learning platform",
    status: "In active development",
    proof: "1st place · AWS GenAI Hackathon (UT Arlington, 2026)",
    text: "An AI learning platform that turns your own material into a structured active recall experience: with spaced review, connected explanations, and every card anchored to the source it came from.",
    audience: "For students, professionals, and lifelong learners who want knowledge that actually sticks.",
  },
  {
    name: "Modular Orbit",
    featured: false,
    tagline: "Personal AI workspace",
    status: "In development",
    proof: null,
    text: "Organizes your tasks, notes, plans, and goals, and builds a model of your priorities so its suggestions get more relevant over time.",
    audience: null,
  },
  {
    name: "Resume Tailor",
    featured: false,
    tagline: "Job-fit analysis",
    status: "In development",
    proof: null,
    text: "Not another AI rewriter. It extracts structured requirements from a job description, runs a gap analysis against your experience, scores fit, and tracks which version you sent where.",
    audience: null,
  },
];

const whatWeDo = [
  {
    icon: Compass,
    title: "AI Strategy & Workflow Analysis",
    text: "We don't assume we know where AI fits in your business. We find out, by understanding your operations, identifying high-value opportunities, and designing a practical roadmap that makes sense for your team and your goals.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Data Systems",
    text: "Clean data and clear reporting are the foundation of any good AI system. We build the infrastructure and dashboards that make your information usable, so decisions are based on reality, not gut feel.",
  },
  {
    icon: Sparkles,
    title: "Intelligent Business Applications",
    text: "AI tools built around your actual business context. Systems that help your people work faster, make better decisions, and spend less time on work that shouldn't require human attention.",
  },
  {
    icon: Brain,
    title: "Applied AI Products",
    text: "Seinun builds its own AI products alongside client work. LoopMind, our flagship, is an accessible learning platform built to put the benefits of AI-powered education within reach of everyone: students, professionals, and lifelong learners.",
  },
];

/* -------------------------------- loopmind -------------------------------- */

const loopSteps = [
  {
    icon: Upload,
    title: "Ingest",
    text: "Upload any document or paste your material. LoopMind reads it, organises it into structured concepts, and prepares it for review. Your content, your way.",
  },
  {
    icon: BookOpen,
    title: "Read",
    text: "Move through your material in a focused, distraction-free reader. Mark concepts, save what matters, and flag anything you want to come back to.",
  },
  {
    icon: HelpCircle,
    title: "Ask & Understand",
    text: "When something is unclear, ask LoopMind directly. It resolves your question and creates a linked concept, so the answer becomes part of your ongoing review, not a dead end.",
  },
  {
    icon: RefreshCw,
    title: "Recall",
    text: "Your review feed surfaces the right concepts at the right time, intelligently scheduled so what you're most likely to forget comes up before you do.",
  },
  {
    icon: CornerUpLeft,
    title: "Back to source",
    text: "Every review card knows exactly which concept and document it came from. When recall fails, you return to the original context in one tap. Context always within reach.",
  },
];

const loopDifferentiators = [
  {
    icon: Layers,
    title: "Everything stays connected to its source",
    text: "Every concept, question, and review card is anchored to the document it came from. You always know where your knowledge lives.",
  },
  {
    icon: HelpCircle,
    title: "Questions become knowledge",
    text: "When you're confused, that confusion is captured and turned into a learning opportunity, not ignored. Doubt is a feature, not a friction point.",
  },
  {
    icon: TrendingUp,
    title: "Review that adapts as you improve",
    text: "As your knowledge deepens, the way you're tested evolves, building toward deeper, more durable retention over time.",
  },
  {
    icon: RefreshCw,
    title: "Surfaces what you're about to forget",
    text: "Intelligent scheduling brings up the right material at the right moment, so your review time goes further and forgetting happens less.",
  },
];

/* --------------------------------- routing -------------------------------- */

const pageMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Seinun · AI that works for your business",
    description:
      "Seinun bridges businesses and people with AI that works. We study your workflow, find where AI creates real value, and build it end to end. No guesswork, no slideware.",
  },
  "/services": {
    title: "Services · Seinun",
    description:
      "We find where AI works for your business, then build it: AI assistants and document intelligence, analytics, predictive systems, and data infrastructure.",
  },
  "/products": {
    title: "Products · Seinun",
    description:
      "Built by Seinun: AI products made to be genuinely accessible and useful, including LoopMind, our award-winning learning platform.",
  },
  "/loopmind": {
    title: "LoopMind · Active recall, connected to the source",
    description:
      "LoopMind is an AI learning platform where every flashcard, doubt, and review traces back to the exact concept and document that created it.",
  },
  "/about": {
    title: "About · Seinun",
    description:
      "Bridging the gap between AI and the people who need it. Seinun builds people-first AI, ethically and practically.",
  },
  "/contact": {
    title: "Contact · Seinun",
    description: "Tell Seinun about your project or where you're trying to fit AI. We respond within 1-2 business days.",
  },
};

function useRoute() {
  const read = () => (window.location.hash.replace(/^#/, "") || "/").split("?")[0] || "/";
  const [route, setRoute] = useState(read);

  useEffect(() => {
    const onHash = () => {
      setRoute(read());
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    const meta = pageMeta[route] ?? { title: "Page not found · Seinun", description: "" };
    document.title = meta.title;
    const tag = document.querySelector('meta[name="description"]');
    if (tag && meta.description) tag.setAttribute("content", meta.description);
  }, [route]);

  return route;
}

/* -------------------------------- utilities ------------------------------- */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

/* ---------------------------------- pages --------------------------------- */

function HomePage() {
  return (
    <>
      <section className="hero section-pad">
        <div className="hero-copy">
          <Reveal>
            <Eyebrow>Applied AI consulting & products</Eyebrow>
            <h1>
              AI that works for your business,<br />
              <span className="hero-accent">not just in theory.</span>
            </h1>
            <p className="hero-lede">
              Most businesses know AI is powerful, but don't know where it fits, what's realistic,
              or how to make it profitable. Seinun bridges that gap. We study your workflow,
              identify where AI creates real value, and build it end to end. No guesswork. No
              slideware. Just AI that actually works for you.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#/contact">
                Start a conversation <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button button-secondary" href="#/products">
                See what we've built
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad section-block">
        <Reveal>
          <div className="section-heading">
            <Eyebrow>What we do</Eyebrow>
            <h2>AI that fits your workflow, not the other way around.</h2>
          </div>
        </Reveal>
        <div className="capability-grid">
          {capabilities.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <article className="capability-card">
                <div className="icon-tile">
                  <item.icon size={22} aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad section-block">
        <Reveal>
          <article className="featured-band">
            <div className="featured-copy">
              <span className="pill pill-light">Built by Seinun</span>
              <h2>LoopMind</h2>
              <p>
                An AI learning platform that transforms any material into an active recall
                experience, making knowledge retention accessible to everyone.
              </p>
              <span className="featured-proof">
                <Award size={16} aria-hidden="true" /> 1st place · AWS GenAI Hackathon
              </span>
            </div>
            <a className="button button-inverse" href="#/loopmind">
              View LoopMind <ArrowRight size={18} aria-hidden="true" />
            </a>
          </article>
        </Reveal>
      </section>

      <section className="section-pad section-block">
        <Reveal>
          <div className="section-heading">
            <Eyebrow>What we've delivered</Eyebrow>
            <h2>Results, not promises.</h2>
          </div>
        </Reveal>
        <div className="proof-grid">
          {proofPoints.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <article className="proof-card">
                <item.icon size={20} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad section-block">
        <Reveal>
          <div className="closing-band">
            <h2>Not sure where AI fits in your business? That's exactly where we start.</h2>
            <a className="button button-primary" href="#/contact">
              Get in touch <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <section className="page-hero section-pad">
        <Reveal>
          <Eyebrow>Services</Eyebrow>
          <h1>We find where AI works for you. Then we build it.</h1>
          <p className="page-lede">
            AI isn't a plug-and-play solution. Every business is different: its processes, its
            people, its data. Seinun starts by understanding your workflow and identifying
            precisely where AI will create measurable value. Then we build it, end to end, and
            hand it over ready to use.
          </p>
        </Reveal>
      </section>

      <section className="section-pad section-block">
        <div className="service-list">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 50}>
              <article className="service-row">
                <div className="service-main">
                  <span className="service-index">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h2>{service.title}</h2>
                    <p>{service.text}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad section-block">
        <Reveal>
          <div className="process-panel">
            <div>
              <Eyebrow>How we work</Eyebrow>
              <h2>We start with your problem, not our tools.</h2>
            </div>
            <ol>
              {workSteps.map((step) => (
                <li key={step.title}>
                  <div>
                    <strong>{step.title}</strong>
                    <span>{step.text}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </section>

      <section className="section-pad section-block">
        <Reveal>
          <div className="closing-band">
            <h2>Ready to find out where AI fits in your business?</h2>
            <a className="button button-primary" href="#/contact">
              Tell us about your project <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function ProductsPage() {
  return (
    <>
      <section className="page-hero section-pad">
        <Reveal>
          <Eyebrow>Products</Eyebrow>
          <h1>Built by Seinun.</h1>
          <p className="page-lede">
            These are products we're building from the ground up, applying the same thinking we
            bring to client work. Each one exists to make AI genuinely accessible and useful to
            the people who need it most.
          </p>
        </Reveal>
      </section>

      <section className="section-pad section-block">
        <div className="product-stack">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={i * 50}>
              <article className={product.featured ? "product-card product-featured" : "product-card"}>
                <header className="product-head">
                  <div>
                    <span className="pill">{product.tagline}</span>
                    <h2>{product.name}</h2>
                  </div>
                  <span className="status-dot">{product.status}</span>
                </header>
                <p>{product.text}</p>
                {product.audience && <p className="product-audience">{product.audience}</p>}
                {product.proof && (
                  <span className="featured-proof">
                    <Award size={16} aria-hidden="true" /> {product.proof}
                  </span>
                )}
                <div className="product-actions">
                  {product.featured ? (
                    <>
                      <a className="button button-primary" href="#/loopmind">
                        Explore LoopMind <ArrowRight size={18} aria-hidden="true" />
                      </a>
                      <a
                        className="button button-secondary"
                        href="#/contact?intent=loopmind-waitlist"
                      >
                        Join the waitlist
                      </a>
                    </>
                  ) : (
                    <a
                      className="button button-secondary"
                      href={`#/contact?intent=${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      Get notified
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <section className="page-hero section-pad">
        <Reveal>
          <Eyebrow>About</Eyebrow>
          <h1>Bridging the gap between AI and the people who need it.</h1>
          <p className="page-lede">
            Most businesses and individuals know AI is changing the world, but feel locked out of
            it. It seems too technical, too expensive, or too disconnected from how they actually
            work. Seinun exists to change that.
          </p>
        </Reveal>
      </section>

      <section className="section-pad section-block about-layout">
        <Reveal className="about-body">
          <p>
            We believe AI should be accessible to every business and every person, not just those
            with the resources or the technical background to figure it out alone. That's not just
            a positioning statement. It's the reason Seinun exists.
          </p>
          <p>
            AI should make people's lives better. It should augment what people are capable of,
            not make them feel replaced, overwhelmed, or left behind. We don't see AI as a
            substitute for human judgement, creativity, or leadership. We see it as a tool that,
            in the right hands and the right places, makes people significantly more capable.
          </p>
          <p>
            A team working alongside intelligent systems is far stronger than either one alone.
            More people with AI working for them beats fewer people trying to compete against it.
            Our job is to find that balance for your business, and build it, ethically,
            practically, and in a way that puts your people first.
          </p>
          <p>
            We don't arrive with a predetermined solution. We start by understanding how you work,
            what you're trying to achieve, and where AI genuinely fits. Then we build it end to
            end, and hand it over so you own it.
          </p>
        </Reveal>
        <Reveal delay={80} className="about-aside">
          <blockquote className="mission-card">
            <p>
              "AI should exist to make people's lives better, not to make them feel inferior or
              replaced. We find that balance, and we build it."
            </p>
          </blockquote>
          <a className="button button-primary" href="#/contact">
            Work with us <ArrowRight size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </section>

      <section className="section-pad section-block">
        <Reveal>
          <div className="section-heading">
            <Eyebrow>Founder</Eyebrow>
            <h2>Ajey Dhayashanker Loganathan</h2>
          </div>
        </Reveal>
        <div className="founder-layout">
          <Reveal className="founder-photo">
            <img
              src="/ajey_headshot.png"
              alt="Ajey Dhayashanker Loganathan, founder of Seinun LLC"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={80} className="about-body">
            <p>
              Ajey is the founder of Seinun LLC and the engineer behind its products and client
              work. He founded Seinun with a clear conviction: that AI should be accessible to
              every business and every person who can benefit from it, not just those who already
              understand it.
            </p>
            <p>
              That belief shapes everything about how Seinun works. We don't lead with technology.
              We lead with questions: What are you trying to accomplish? Where does your team lose
              time? What decisions would you make differently if you had better information? The
              answers tell us where AI belongs, and where it doesn't.
            </p>
            <p>
              Ajey has worked across industries and domains, building systems that connect data,
              intelligence, and real business outcomes. His work spans enterprise data
              infrastructure, AI-powered document analysis, and machine learning applications,
              always with the same standard: production-ready, ethically grounded, and built to be
              genuinely useful.
            </p>
            <p>
              In 2026, his team won 1st place at the UTA Business Analytics Symposium AWS GenAI
              Hackathon. That project became <a href="#/loopmind">LoopMind</a>, a product built on
              the belief that quality AI-powered learning should be available to anyone, not just
              those who can afford premium tools.
            </p>
            <p>
              Ajey holds certifications from AWS, Microsoft Azure, IBM, and Google in cloud
              architecture, AI, and data science.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad section-block">
        <Reveal>
          <div className="section-heading">
            <Eyebrow>What we do</Eyebrow>
            <h2>From strategy to working AI: fully delivered.</h2>
          </div>
        </Reveal>
        <div className="capability-grid">
          {whatWeDo.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <article className="capability-card">
                <div className="icon-tile">
                  <item.icon size={22} aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function LoopMindPage() {
  return (
    <>
      <section className="page-hero section-pad loop-hero">
        <Reveal>
          <Eyebrow>LoopMind</Eyebrow>
          <h1>
            Active recall,<br />
            <span className="hero-accent">connected to the source.</span>
          </h1>
          <p className="page-lede">
            Most learning apps generate content and leave you with a pile. LoopMind is built
            differently. Every flashcard, doubt, explanation, and review traces back to the exact
            concept and document that created it. That connection is the difference between a card
            pile and a real learning system.
          </p>
          <span className="status-dot loop-status">Coming soon · Currently in active development</span>
        </Reveal>
      </section>

      <section className="section-pad section-block">
        <Reveal>
          <div className="closing-band loop-problem">
            <div>
              <Eyebrow>The problem</Eyebrow>
              <h2>Highlighting is not learning.</h2>
            </div>
            <p>
              Generating AI flashcards isn't learning either. What works is retrieval practice:
              being forced to recall something from memory, working through the difficulty, and
              succeeding. LoopMind is built around that science. And it keeps every moment of
              recall connected to where the knowledge came from, so you never lose the thread.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section-pad section-block">
        <Reveal>
          <div className="section-heading">
            <Eyebrow>How it works</Eyebrow>
            <h2>One connected cycle.</h2>
          </div>
        </Reveal>
        <div className="loop-steps">
          {loopSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 50}>
              <article className="loop-step">
                <span className="loop-step-index">{String(i + 1).padStart(2, "0")}</span>
                <div className="icon-tile">
                  <step.icon size={22} aria-hidden="true" />
                </div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad section-block">
        <Reveal>
          <div className="section-heading">
            <Eyebrow>What makes it different</Eyebrow>
            <h2>A learning system, not a card pile.</h2>
          </div>
        </Reveal>
        <div className="capability-grid">
          {loopDifferentiators.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <article className="capability-card">
                <div className="icon-tile">
                  <item.icon size={22} aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad section-block">
        <Reveal>
          <article className="featured-band">
            <div className="featured-copy">
              <span className="pill pill-light">Status</span>
              <h2>In active development</h2>
              <p>
                The core learning experience (reading, recall, doubt resolution, and spaced
                review) is fully built and tested. We're focused on product polish and onboarding
                ahead of a public launch. Early access is available now.
              </p>
              <span className="featured-proof">
                <Award size={16} aria-hidden="true" /> 1st place · AWS GenAI Hackathon (UT
                Arlington, March 2026)
              </span>
            </div>
            <a className="button button-inverse" href="#/contact?intent=loopmind-early-access">
              Request early access <ArrowRight size={18} aria-hidden="true" />
            </a>
          </article>
        </Reveal>
      </section>
    </>
  );
}

const contactIntents: Record<string, string> = {
  "loopmind-waitlist": "I'd like to join the LoopMind waitlist.",
  "loopmind-early-access": "I'd like to request early access to LoopMind.",
  "modular-orbit": "I'd like to be notified when Modular Orbit is available.",
  "resume-tailor": "I'd like to be notified when Resume Tailor is available.",
};

function readContactIntent() {
  const hash = window.location.hash;
  const query = hash.includes("?") ? hash.slice(hash.indexOf("?") + 1) : "";
  const intent = new URLSearchParams(query).get("intent") ?? "";
  return contactIntents[intent] ?? "";
}

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [prefill] = useState(readContactIntent);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email: String(data.get("email") ?? ""),
          company: String(data.get("company") ?? ""),
          message: String(data.get("message") ?? ""),
          _subject: `Project inquiry from ${name || "the Seinun website"}`,
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="page-hero section-pad contact-layout">
      <Reveal className="contact-copy">
        <Eyebrow>Contact</Eyebrow>
        <h1>Let's find out what AI can do for you.</h1>
        <p className="page-lede">
          Whether you have a specific project in mind or you're just starting to explore where AI
          fits in your business, reach out. We'll have an honest conversation about what's
          possible, what's realistic, and what's genuinely worth building. We respond within 1–2
          business days.
        </p>
        <div className="contact-direct">
          <a href={`mailto:${EMAIL}`}>
            <Mail size={17} aria-hidden="true" /> {EMAIL}
          </a>
          <a href="https://www.linkedin.com/in/ajeyds/" target="_blank" rel="noreferrer">
            <Linkedin size={17} aria-hidden="true" /> LinkedIn
          </a>
          <a href="https://github.com/AjeyDS" target="_blank" rel="noreferrer">
            <Github size={17} aria-hidden="true" /> GitHub
          </a>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <form className="contact-form" onSubmit={onSubmit}>
          <label>
            Name
            <input name="name" type="text" placeholder="Your name" autoComplete="name" required />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
              required
            />
          </label>
          <label className="full">
            <span>
              Company <span className="optional">(optional)</span>
            </span>
            <input name="company" type="text" placeholder="Company" autoComplete="organization" />
          </label>
          <label className="full">
            What you're working on
            <textarea
              name="message"
              placeholder="A few lines about the problem, the data, or the product idea."
              defaultValue={prefill}
              rows={5}
              required
            />
          </label>
          <button
            className="button button-primary full"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send"}
            {status !== "sending" && <ArrowRight size={18} aria-hidden="true" />}
          </button>
          {status === "sent" && (
            <p className="form-note full" role="status">
              Thanks! Your message is on its way. We'll get back to you within 1–2 business days.
            </p>
          )}
          {status === "error" && (
            <p className="form-note form-note-error full" role="alert">
              Something went wrong sending that. Please email us directly at{" "}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
            </p>
          )}
        </form>
      </Reveal>
    </section>
  );
}

function NotFoundPage() {
  return (
    <section className="page-hero section-pad not-found">
      <Reveal>
        <Eyebrow>404</Eyebrow>
        <h1>This page doesn't exist.</h1>
        <p className="page-lede">The link may be old or mistyped. Head back to the homepage.</p>
        <a className="button button-primary" href="#/">
          Go home <ArrowRight size={18} aria-hidden="true" />
        </a>
      </Reveal>
    </section>
  );
}

/* ---------------------------------- shell --------------------------------- */

const navLinks = [
  { href: "#/services", label: "Services", route: "/services" },
  { href: "#/products", label: "Products", route: "/products" },
  { href: "#/loopmind", label: "LoopMind", route: "/loopmind" },
  { href: "#/about", label: "About", route: "/about" },
  { href: "#/contact", label: "Contact", route: "/contact" },
];

function App() {
  const route = useRoute();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  let page: ReactNode;
  switch (route) {
    case "/":
      page = <HomePage />;
      break;
    case "/services":
      page = <ServicesPage />;
      break;
    case "/products":
      page = <ProductsPage />;
      break;
    case "/loopmind":
      page = <LoopMindPage />;
      break;
    case "/about":
      page = <AboutPage />;
      break;
    case "/contact":
      page = <ContactPage />;
      break;
    default:
      page = <NotFoundPage />;
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#/" aria-label="Seinun home" onClick={closeMenu}>
          <img className="brand-logo" src="/seinun-logo.png" alt="Seinun" width={125} height={30} />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.route}
              href={link.href}
              onClick={closeMenu}
              aria-current={route === link.route ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#/contact" onClick={closeMenu}>
          Get in touch
        </a>
      </header>

      <main key={route} className="page">
        {page}
      </main>

      <footer className="footer section-pad">
        <div className="footer-top">
          <div className="footer-brand">
            <img className="footer-logo" src="/seinun-logo.png" alt="Seinun" width={108} height={26} />
            <p>Bridging businesses and people with AI that works.</p>
          </div>
          <div className="footer-contact">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <span>Based in Texas, USA</span>
          </div>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/ajeyds/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} aria-hidden="true" />
            </a>
            <a href="https://github.com/AjeyDS" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Seinun LLC. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
