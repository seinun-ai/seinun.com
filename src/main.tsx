import { StrictMode, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Brain,
  Cloud,
  CornerUpLeft,
  Cpu,
  Database,
  FileSearch,
  Github,
  HelpCircle,
  Layers,
  Linkedin,
  Mail,
  Menu,
  Network,
  RefreshCw,
  Sparkles,
  TrendingUp,
  Upload,
  X,
} from "lucide-react";
import "./styles.css";

/* ---------------------------------- data --------------------------------- */

const EMAIL = "ajey@seinun.com";

const capabilities = [
  {
    icon: Sparkles,
    title: "GenAI & RAG applications",
    text: "Document intelligence, AI assistants, and retrieval systems that reason over your data.",
  },
  {
    icon: BarChart3,
    title: "Analytics & BI",
    text: "Dashboards and decision tools that turn raw data into action.",
  },
  {
    icon: TrendingUp,
    title: "Predictive ML",
    text: "Forecasting, scoring, and early-warning models with explainable outputs.",
  },
  {
    icon: Cloud,
    title: "Data & cloud engineering",
    text: "Pipelines and cloud-native (AWS) infrastructure behind the apps.",
  },
];

const proofPoints = [
  {
    icon: BarChart3,
    title: "British Airways data systems",
    text: "Automated pipelines that cut reporting cycle time 40% (at TCS).",
  },
  {
    icon: FileSearch,
    title: "Production RAG for a client",
    text: "Document-analysis system that cut manual review 70%.",
  },
  {
    icon: Award,
    title: "Shipped award-winning AI",
    text: "LoopMind, 1st place at the AWS GenAI Hackathon.",
  },
  {
    icon: BadgeCheck,
    title: "AWS Certified",
    text: "Solutions Architect · AI Practitioner.",
  },
];

const services = [
  {
    title: "GenAI & RAG application development",
    text: "Retrieval-augmented assistants, document analysis, and AI features grounded in your data.",
    stack: ["Python", "OpenAI / Gemini", "LangChain", "pgvector / ChromaDB", "FastAPI"],
  },
  {
    title: "Data analytics & BI",
    text: "KPI dashboards, reporting pipelines, and analysis that connects to real decisions.",
    stack: ["SQL", "Python", "Power BI", "Tableau", "Streamlit"],
  },
  {
    title: "Predictive & explainable ML",
    text: "Forecasting, risk scoring, and segmentation with interpretable outputs (SHAP).",
    stack: ["scikit-learn", "XGBoost / LightGBM", "SHAP"],
  },
  {
    title: "Data pipelines & cloud (AWS)",
    text: "ETL/ELT, Databricks/Delta Lake, and serverless deployment on AWS.",
    stack: ["AWS", "Databricks", "Delta Lake", "Serverless"],
  },
];

const workSteps = [
  {
    title: "Scope",
    text: "A short call to define the problem and what success looks like.",
  },
  {
    title: "Build",
    text: "Iterative delivery with working demos, not status decks.",
  },
  {
    title: "Hand off",
    text: "Documented, deployable, yours to own.",
  },
];

const products = [
  {
    name: "LoopMind",
    featured: true,
    tagline: "AI learning platform",
    status: "In active development",
    proof: "1st place · AWS GenAI Hackathon (UT Arlington, 2026)",
    text: "Ingests your material and generates concept cards with rendered formulas and tables, then schedules spaced-repetition review and answers your follow-up questions.",
    audience: "For students and self-learners who want to retain what they study.",
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
    icon: TrendingUp,
    title: "ML engineering services",
    text: "Predictive models, classification pipelines, feature-engineering frameworks, and model-evaluation infrastructure across tabular, NLP, and time-series domains. Production-ready outputs, not notebook experiments.",
  },
  {
    icon: BarChart3,
    title: "Data & analytics",
    text: "The pipelines, dashboards, and analytical systems that make data usable: ETL workflows, SQL-intensive reporting infrastructure, KPI dashboards, and domain analytics for finance, operations, and customer behavior.",
  },
  {
    icon: Sparkles,
    title: "GenAI & RAG applications",
    text: "LLM-powered applications grounded in real business problems: document intelligence, embedding-based search, agentic workflows, and retrieval-augmented generation. Architecture-first, not demo-first.",
  },
  {
    icon: Brain,
    title: "Applied AI products",
    text: "Seinun builds its own AI products alongside client work. LoopMind, the flagship, is an active-recall learning platform built on a connected document-to-recall architecture.",
  },
];

/* -------------------------------- loopmind -------------------------------- */

const loopSteps = [
  {
    icon: Upload,
    title: "Ingest",
    text: "Upload a PDF, paste text, or generate a document. LoopMind parses and chunks the source, then uses an LLM to rewrite each chunk into a concept-level reading unit called a Tile. Tiles group into topic sections that become learning milestones.",
  },
  {
    icon: BookOpen,
    title: "Read",
    text: "The reader surfaces Tiles in a vertical deck. Mark a Tile read, save it, bookmark it, annotate it, or ask a doubt from it. After 15 seconds as the primary visible Tile it auto-marks read. Drill into child concepts, filter by saved or doubt Tiles, and jump to the source text at any point.",
  },
  {
    icon: HelpCircle,
    title: "Doubt & explain",
    text: "When something is unclear, raise a doubt from the Tile. LoopMind resolves it and creates a child Tile anchored to the concept that caused the confusion. Explain something back and the system generates an explanation Tile with feedback. Both produce recall cards, so the moment of confusion becomes testable.",
  },
  {
    icon: RefreshCw,
    title: "Recall",
    text: "The recall feed surfaces Atomic Learning Units using SM-2 spaced repetition, scoped globally, by document, by section, or by tile. It prioritizes due, weak, user-initiated, and low-mastery cards. Reviews update both SRS state and mastery.",
  },
  {
    icon: CornerUpLeft,
    title: "Back to source",
    text: "Every card knows which Tile and which document created it. When recall fails, you don't lose context. You go back to where the concept lives, re-read it, and re-enter the loop.",
  },
];

const loopDifferentiators = [
  {
    icon: Layers,
    title: "Source spine, not a card pile",
    text: "Every learning artifact, whether a Tile, doubt, flashcard, or ALU, stays anchored to the document and concept that produced it. That's the architectural decision everything else depends on.",
  },
  {
    icon: HelpCircle,
    title: "Doubt-driven encoding",
    text: "Curiosity and confusion are the strongest encoding signals. Doubts become child Tiles with recall cards, and explain-back actions generate testable artifacts. Highlighting alone produces nothing.",
  },
  {
    icon: TrendingUp,
    title: "Retrieval effort that scales",
    text: "Review formats aren't fixed. As cards mature, the system progresses from multiple-choice recognition to typed cloze and free recall. MCQ distractors are designed as plausible misconceptions, so a wrong answer reveals the actual misunderstanding.",
  },
  {
    icon: Network,
    title: "Semantic recall routing",
    text: "pgvector-powered semantic search surfaces related cards during review, so when you see a card you can find conceptually adjacent material without navigating manually.",
  },
];

const loopHood = [
  {
    icon: Database,
    title: "Backend",
    text: "A FastAPI service backed by PostgreSQL with pgvector for embedding storage and semantic retrieval. Long-running AI tasks like ingestion, tile authoring, card batch generation, and image generation run through a durable database-backed job queue on a concurrent 4-worker Docker service. Jobs are idempotent: retries are safe and partial failures don't corrupt completed work.",
  },
  {
    icon: Layers,
    title: "Frontend",
    text: "A React Native application built with Expo and TypeScript, targeting both mobile and web. The reader, recall feed, collection manager, and home dashboard are native screens with smooth navigation and dwell-based read tracking.",
  },
  {
    icon: Cpu,
    title: "AI layer",
    text: "Gemini handles text generation, embeddings (768-dimension via gemini-embedding-001), and image generation, with provider branches for OpenAI and Ollama. The original hackathon version ran on AWS Bedrock.",
  },
  {
    icon: BadgeCheck,
    title: "Tested end to end",
    text: "Coverage spans SRS scheduling, feed scoring, review-format progression, semantic similarity, chunking, section grouping, tile trees, document ingestion, job-retry behavior, card-quality validation, and deletion cascades.",
  },
];

const loopStack = [
  "FastAPI",
  "React Native / Expo (TypeScript)",
  "PostgreSQL",
  "pgvector",
  "Gemini",
  "Docker Compose",
];

/* --------------------------------- routing -------------------------------- */

const pageMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Seinun · Applied AI consulting & products",
    description:
      "Seinun designs and builds context-aware AI applications: RAG systems, analytics and BI, and predictive ML. End to end, from model to production.",
  },
  "/services": {
    title: "Services · Seinun",
    description:
      "GenAI & RAG development, analytics & BI, predictive ML, and AWS data engineering, built end to end by a one-person studio.",
  },
  "/products": {
    title: "Products · Seinun",
    description:
      "LoopMind, Modular Orbit, and Resume Tailor: context-aware AI products built by Seinun.",
  },
  "/loopmind": {
    title: "LoopMind · Active recall, connected to the source",
    description:
      "LoopMind is an active-recall learning platform where every flashcard, doubt, and review traces back to the exact concept and document that created it.",
  },
  "/about": {
    title: "About · Seinun",
    description:
      "The person behind Seinun: a data scientist and AI engineer building production systems teams actually use.",
  },
  "/contact": {
    title: "Contact · Seinun",
    description: "Tell Seinun about your project or the problem you're trying to solve.",
  },
};

function useRoute() {
  const read = () => window.location.hash.replace(/^#/, "") || "/";
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
              Applied AI that ships,<br />
              <span className="hero-accent">not slideware.</span>
            </h1>
            <p className="hero-lede">
              Seinun designs and builds context-aware AI applications: retrieval (RAG) systems,
              analytics and BI, and predictive ML. End to end, from model to production.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#/contact">
                Start a project <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button button-secondary" href="#/products">
                See what I've built
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad section-block">
        <Reveal>
          <div className="section-heading">
            <Eyebrow>What I do</Eyebrow>
            <h2>Context-aware AI, built end to end.</h2>
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
                An AI learning platform that turns your own material into concept cards and
                spaced-repetition review.
              </p>
              <span className="featured-proof">
                <Award size={16} aria-hidden="true" /> 1st place, AWS GenAI Hackathon
              </span>
            </div>
            <a className="button button-inverse" href="#/loopmind">
              View LoopMind <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </article>
        </Reveal>
      </section>

      <section className="section-pad section-block">
        <Reveal>
          <div className="section-heading">
            <Eyebrow>What I've delivered</Eyebrow>
            <h2>Proof, not credentials.</h2>
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
            <h2>Have a problem that needs working software, not a deck?</h2>
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
          <h1>One studio. End to end.</h1>
          <p className="page-lede">
            Seinun is a one-person studio that builds applied AI systems end to end. It's the
            same capability behind the products, available for your project. You work directly
            with the person doing the work.
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
                <ul className="stack-list" aria-label="Technology stack">
                  {service.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad section-block">
        <Reveal>
          <div className="process-panel">
            <div>
              <Eyebrow>How I work</Eyebrow>
              <h2>Demos over decks, at every step.</h2>
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
            <h2>Ready when you are.</h2>
            <a className="button button-primary" href="#/contact">
              Tell me about your project <ArrowRight size={18} aria-hidden="true" />
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
            These are products I'm actively building, and proof of the same capability I bring
            to client work: context-aware AI applications, built end to end.
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
                        Explore LoopMind <ArrowUpRight size={18} aria-hidden="true" />
                      </a>
                      <a
                        className="button button-secondary"
                        href={`mailto:${EMAIL}?subject=LoopMind%20waitlist`}
                      >
                        Join the waitlist
                      </a>
                    </>
                  ) : (
                    <a
                      className="button button-secondary"
                      href={`mailto:${EMAIL}?subject=${encodeURIComponent(product.name)}`}
                    >
                      Learn more
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad section-block">
        <Reveal>
          <p className="tech-note">
            All three run on a shared foundation of FastAPI, React, Postgres + pgvector
            retrieval, and LLM reasoning: the same context-aware-AI stack behind Seinun's
            consulting work.
          </p>
        </Reveal>
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
          <h1>Who we are.</h1>
          <p className="page-lede">
            Seinun is an AI and data-analytics company founded to build applied AI products and
            deliver ML engineering services to clients.
          </p>
        </Reveal>
      </section>

      <section className="section-pad section-block about-layout">
        <Reveal className="about-body">
          <p>
            Seinun works at the intersection of data infrastructure, machine learning, and
            generative AI, with a focus on systems that are production-grounded, technically
            rigorous, and built to solve real problems.
          </p>
          <p>
            Its work spans the full stack: from ETL pipelines and analytical dashboards to
            RAG-based document intelligence, spaced-repetition learning systems, and agentic AI
            workflows. Seinun builds for clients and for itself, which means its products are
            shaped by the same engineering standards it applies to client work.
          </p>
        </Reveal>
        <Reveal delay={80} className="about-aside">
          <blockquote className="mission-card">
            <p>
              "Production-grounded, technically rigorous, and built to solve real problems: the
              same standard for client work and our own products."
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
              engagements. He holds a Master of Science in Business Analytics from the University
              of Texas at Arlington, graduating with a 4.0 GPA and induction into Beta Gamma
              Sigma, the top honors society for AACSB-accredited business programs. Before
              founding Seinun, he spent two years as a Data Analyst at Tata Consultancy Services
              on the <strong>British Airways</strong> account, where he built Python ingestion
              pipelines, owned ETL development in Informatica, delivered Power BI and Excel KPI
              dashboards across six enterprise applications, and maintained SQL data-integrity
              workflows over 2M+ records during a system migration.
            </p>
            <p>
              His analytical work spans credit-risk modeling, behavioral segmentation, natural
              language processing, and large-scale ensemble machine learning. He built an
              end-to-end portfolio-monitoring dashboard on a 240K-row synthetic account dataset,
              using SQL window functions to surface roll-rate matrices and vintage curves, and an
              XGBoost early-warning model with SHAP explainability for 3-month-forward
              delinquency risk. In NLP, he built a pipeline that processed 65M+ social-media
              posts using Sentence-BERT embeddings, UMAP, and BERTopic clustering to extract 871
              coherent topics at scale.
            </p>
            <p>
              His most technically demanding project engineered 159 features across 8 relational
              tables for a credit-default model and trained a 4-model stacked ensemble (LightGBM,
              XGBoost, CatBoost, PyTorch MLP) that reached a final OOF ROC-AUC of 0.792 by
              diagnosing and resolving a meta-learner calibration failure through rank-based
              stacking inputs. On the client side, he built a RAG document-intelligence system
              for Neviton that ingested business-requirement documents, embedded them with
              Docling and pgvector, and produced per-criteria gap verdicts with confidence scores
              across 30+ acceptance criteria per document, cutting manual review time by 70%.
            </p>
            <p>
              Ajey is an AWS Certified Solutions Architect (SAA-C03) and AWS Certified AI
              Practitioner (AIF-C01), with further certifications from Microsoft Azure (DevOps
              Engineer Expert, Data Fundamentals) and from IBM and Google in data science and
              analytics. In 2026, his team won 1st place at the UTA Business Analytics Symposium
              AWS GenAI Hackathon, the project that became the foundation for{" "}
              <a href="#/loopmind">LoopMind</a>.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad section-block">
        <Reveal>
          <div className="section-heading">
            <Eyebrow>What we do</Eyebrow>
            <h2>From pipelines to applied AI products.</h2>
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
            pile and a learning system.
          </p>
          <span className="status-dot loop-status">Coming soon, currently in active development</span>
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
              being forced to recall something before you look it up again, but only when it
              targets the concepts you actually struggle with, connected to the material where the
              struggle happened. Most tools give you cards. LoopMind gives you a loop.
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
            <h2>A source spine, not a card pile.</h2>
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
          <div className="section-heading">
            <Eyebrow>Under the hood</Eyebrow>
            <h2>Built for reliability and extensibility.</h2>
          </div>
        </Reveal>
        <div className="proof-grid">
          {loopHood.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <article className="proof-card">
                <item.icon size={20} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <ul className="stack-list loop-stack" aria-label="Technology stack">
            {loopStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section-pad section-block">
        <Reveal>
          <article className="featured-band">
            <div className="featured-copy">
              <span className="pill pill-light">Status</span>
              <h2>In active development</h2>
              <p>
                The core read-recall loop, tile-based reader, spaced-repetition engine, doubt and
                explain-back flows, semantic card retrieval, and background job infrastructure are
                all implemented and tested. The team is working on product polish, deployment, and
                onboarding ahead of a public release.
              </p>
              <span className="featured-proof">
                <Award size={16} aria-hidden="true" /> 1st place · AWS GenAI Hackathon (UT
                Arlington, March 2026)
              </span>
            </div>
            <a
              className="button button-inverse"
              href={`mailto:${EMAIL}?subject=LoopMind%20early%20access`}
            >
              Request early access <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </article>
        </Reveal>
      </section>
    </>
  );
}

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

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
        <h1>Let's talk.</h1>
        <p className="page-lede">
          Tell me about your project or the problem you're trying to solve. I respond within 1–2
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
          <img className="brand-mark" src="/wave_spiral.svg" alt="" width={34} height={34} aria-hidden="true" />
          <span>Seinun</span>
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
            <span className="footer-wordmark">Seinun</span>
            <p>Applied AI consulting & products.</p>
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
