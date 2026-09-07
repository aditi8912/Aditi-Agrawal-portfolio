import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X, ExternalLink, Sparkles, Send, FileText, Brain, BarChart3, Code2, FlaskConical, Database, Wand2, Bot, Target, Download, ChevronRight } from "lucide-react";
import "./styles.css";

const profile = {
  name: "Aditi Agrawal",
  email: "aditiagrawal896@gmail.com",
  phone: "7205177826",
  linkedin: "https://linkedin.com/in/aditi-agrawal-98b3b1331",
  github: "https://github.com/aditi8912",
  clause: "https://clauseai-o2kybfnlzzrhbn5atbqqje.streamlit.app/",
  resume: "/resume.pdf"
};

const experience = [
  {
    company: "Coding Jr",
    role: "AI Research Intern",
    period: "AI RESEARCH · LLM WORKFLOWS",
    text: "Contributed to an AI-powered coding assistant delivered through a VS Code extension. Worked across AI-assisted developer workflows, frontend and backend features, model integration and product-facing interaction."
  },
  {
    company: "Zenlegal Technology Private Limited",
    role: "AI Intern",
    period: "AI · DATA · LEGAL TECH",
    text: "Worked with legal documents and datasets to support AI model training and evaluation. Researched Indian legal frameworks, evaluated AI-generated responses, supported annotation and validation, and performed quality checks across AI workflows."
  },
  {
    company: "Forematic Techenow Solution Pvt. Ltd.",
    role: "Associate Engineer",
    period: "FULL-STACK · BACKEND · APIs",
    text: "Developed features for a full-stack Gate Management System using React.js, Node.js, Express.js and MongoDB. Built responsive dashboards and REST APIs while working on authentication, validation, search, CRUD workflows and frontend-backend integration."
  }
];

const projects = [
  {
    n: "01",
    title: "ClauseAI",
    category: "AI · PRODUCT · RAG",
    short: "An AI-powered contract analysis platform that turns long legal PDFs into searchable, contextual knowledge.",
    overview: "ClauseAI addresses a practical information problem: contracts contain dense language, but users often need one specific clause, obligation or answer quickly. The platform turns uploaded PDFs into structured context, retrieves the most relevant passages and uses that context to support natural-language questions and summaries.",
    approach: ["PDF text extraction and preprocessing", "Document chunking and embedding generation", "Vector database / semantic retrieval", "Retrieval-Augmented Generation for grounded answers", "Contract summarisation and contextual Q&A", "Streamlit deployment for an end-to-end user workflow"],
    outcome: "The project brings ingestion, semantic retrieval and AI-assisted understanding into one workflow, reducing the need to manually scan long documents.",
    stack: "Python · RAG · Embeddings · Vector Search · Streamlit",
    link: profile.clause,
    github: "https://github.com/aditi8912/ClauseAI",
    color: "violet",
    icon: FileText
  },
  {
    n: "02",
    title: "Deepfake Detection",
    category: "RESEARCH PAPER · AUDIO + VIDEO",
    short: "A research project studying multimodal deepfake detection through acoustic cues, facial/temporal artifacts, explainability and emerging Quantum ML approaches.",
    overview: "This research paper explores detection of manipulated media across audio and video. The audio component studies acoustic features and explainable classification, while the video component investigates facial and temporal artifacts that can reveal synthetic manipulation. The work also explores Quantum Machine Learning as an emerging research direction.",
    approach: ["Audio feature extraction from speech signals", "Random Forest classification for audio deepfake detection", "SHAP-based interpretation of model decisions", "Video analysis using facial and temporal artifacts", "Random Forest + explainability for video-side classification", "Exploration of Quantum Machine Learning for future detection pipelines"],
    outcome: "The project is positioned as research rather than a commercial application, with emphasis on detection methodology, interpretability and future research directions across both modalities.",
    stack: "Machine Learning · Random Forest · SHAP · Audio · Video · Quantum ML",
    research: true,
    color: "pink",
    icon: FlaskConical
  },
  {
    n: "03",
    title: "Credit Card Fraud Detection",
    category: "DATA ANALYTICS · MACHINE LEARNING",
    short: "A fraud-detection study on 284K+ transactions, combining classification, imbalance handling and business-cost analysis.",
    overview: "The project treats fraud detection as both a modelling and decision problem. With fraud representing only 0.17% of the dataset, the work focuses on severe class imbalance and the real-world trade-off between false positives and false negatives.",
    approach: ["Data cleaning and exploratory analysis", "Stratified sampling for imbalanced data", "Logistic Regression and Random Forest comparison", "Cost-sensitive class weighting", "Business-cost analysis of false-positive and false-negative outcomes", "End-to-end sklearn Pipeline and interactive Tableau dashboard"],
    outcome: "The analysis showed that the highest-precision model is not automatically the most cost-optimal choice, connecting model evaluation to a practical deployment decision.",
    stack: "Python · Scikit-learn · Random Forest · SQL · Tableau · Data Analysis",
    github: "https://github.com/aditi8912/Fraud_credit_card_Detection",
    color: "orange",
    icon: BarChart3
  },
  {
    n: "04",
    title: "IoT Fire Alerting System",
    category: "IOT · EMBEDDED SYSTEMS",
    short: "A lab-scale Arduino-based fire alert prototype that converts threshold conditions into immediate visual and audible alerts.",
    overview: "This project simplified an extensive IoT architecture into a practical lab-scale prototype. The system uses an Arduino-based setup with threshold-driven logic to detect a fire-related condition and trigger immediate alerts through LEDs and a buzzer.",
    approach: ["Translated a larger IoT architecture into a simplified circuit", "Arduino-based embedded control logic", "Threshold-based event detection", "Immediate LED and buzzer alerting", "Prototype validation in Tinkercad", "Focus on clear, deterministic emergency signalling"],
    outcome: "The prototype demonstrates how a broader IoT concept can be reduced to a clear, testable embedded workflow suitable for lab experimentation and rapid validation.",
    stack: "Arduino · C++ · IoT · Tinkercad · Sensors · Embedded Logic",
    color: "lime",
    icon: Database
  }
];

const focus = [
  { icon: Brain, num: "01", title: "AI / Machine Learning", text: "Machine learning, LLM applications, RAG, semantic retrieval, explainability and intelligent workflows." },
  { icon: BarChart3, num: "02", title: "Data Analytics", text: "SQL, data cleaning, exploratory analysis, visualisation, dashboards and business-oriented insights." },
  { icon: Code2, num: "03", title: "Full-Stack Development", text: "React, Node.js, Express, FastAPI, REST APIs, databases and complete user-facing workflows." },
  { icon: FlaskConical, num: "04", title: "Research & Emerging Tech", text: "Research-led experimentation across deepfake detection, explainability and emerging technologies." }
];

const strengths = [
  { n: "01", title: "Analytical thinking", text: "I start with the data and the real decision behind it — not just the model." },
  { n: "02", title: "Product thinking", text: "I care about turning technical output into something a person can actually use." },
  { n: "03", title: "Engineering range", text: "I can move between frontend, backend, APIs, databases, analytics and intelligent systems." },
  { n: "04", title: "Research mindset", text: "I enjoy testing new ideas, understanding why they work and turning them into practical prototypes." }
];

function localAgent(question) {
  const q = question.toLowerCase();
  if (q.includes("data analyst") || q.includes("data analytics") || q.includes("analytics")) {
    return "For a Data Analyst role, Aditi brings Python and SQL, data cleaning, exploratory analysis, Tableau dashboards and business-oriented interpretation. The strongest proof point is her Credit Card Fraud Detection project, where she connected model performance with the cost of false positives and false negatives.";
  }
  if (q.includes("full stack") || q.includes("frontend") || q.includes("backend")) {
    return "For a Full-Stack role, Aditi has hands-on engineering experience at Forematic using React.js, Node.js, Express.js and MongoDB. She worked across responsive dashboards, REST APIs, authentication, validation, search, CRUD and frontend-backend integration.";
  }
  if (q.includes("ai") || q.includes("machine learning") || q.includes("ml") || q.includes("gen")) {
    return "Aditi's AI profile combines AI research, machine learning and applied AI products. Her work includes an LLM-based coding assistant at Coding Jr, ClauseAI with RAG and semantic retrieval, and deepfake detection research using Random Forest, SHAP and exploration of Quantum ML.";
  }
  if (q.includes("research") || q.includes("deepfake") || q.includes("paper")) {
    return "Her research work focuses on Audio & Video Deepfake Detection. The study covers acoustic features, facial and temporal artifacts, Random Forest classification, SHAP explainability and an exploration of Quantum Machine Learning. It is presented as a research paper/project, not as a GitHub application.";
  }
  if (q.includes("clause") || q.includes("contract")) {
    return "ClauseAI is Aditi's applied AI product project. It extracts and preprocesses PDF text, chunks documents, creates embeddings, retrieves semantically relevant context and uses RAG for contextual contract Q&A and summarisation. It is deployed on Streamlit.";
  }
  if (q.includes("iot") || q.includes("fire")) {
    return "The IoT Fire Alerting System is a lab-scale Arduino prototype. It uses threshold-based C++ logic to trigger immediate LED and buzzer alerts, and was validated in Tinkercad.";
  }
  if (q.includes("hire") || q.includes("good fit") || q.includes("why")) {
    return "Aditi offers a broad technical profile: AI/ML, Data Analytics, Full-Stack Development and research. Her portfolio shows both analytical work — such as fraud detection and Tableau — and engineering work across React, Node.js, APIs and databases, with additional AI and research experience.";
  }
  return "Aditi works across AI/ML, Data Analytics, Full-Stack Development and research. Ask me about her role fit, a project, her experience, or what she brings to a technical team.";
}

function App() {
  const [menu, setMenu] = useState(false);
  const [selected, setSelected] = useState(null);
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [assistantInput, setAssistantInput] = useState("");
  const [assistantAnswer, setAssistantAnswer] = useState("Hi — I can help you explore Aditi's profile. Pick a role or ask a question.");
  const [agentMode, setAgentMode] = useState("explore");
  const [generating, setGenerating] = useState(false);

    useEffect(() => {
      const nodes = document.querySelectorAll(".reveal-on-scroll");

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.14 });

      nodes.forEach((node) => observer.observe(node));

      return () => observer.disconnect();
    }, []);

    // Lock the website behind mobile menu and project case-study modal
    useEffect(() => {
      const locked = Boolean(selected || menu);

      document.body.style.overflow = locked ? "hidden" : "";

      return () => {
        document.body.style.overflow = "";
      };
    }, [selected, menu]);

  // Escape closes the open menu/modal
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        if (selected) setSelected(null);
        if (menu) setMenu(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected, menu]);

  const go = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    setMenu(false);
  };

  const roleScore = useMemo(() => ({
    "AI / ML": 92,
    "Data Analyst": 89,
    "Full-Stack": 91,
    "Research": 90
  }), []);

  const askAgent = (question) => {
    const q = question.trim();
    if (!q) return;
    setGenerating(true);
    setAssistantAnswer("");
    window.setTimeout(() => {
      setAssistantAnswer(localAgent(q));
      setGenerating(false);
    }, 550);
  };

  const generatePitch = () => {
    setGenerating(true);
    setAssistantAnswer("");
    window.setTimeout(() => {
      setAssistantAnswer("Aditi Agrawal is a Computer Science student building across AI/ML, Data Analytics and Full-Stack Development. Her experience spans AI research, legal-tech AI workflows and production-oriented engineering, while her projects demonstrate RAG, machine learning, Tableau, data analysis, research and embedded systems.");
      setGenerating(false);
    }, 650);
  };

  return (
    <div className="page">
      <header className="topbar">
        <button className="wordmark" onClick={() => go("home")}>ADITI AGRAWAL<span>.</span></button>
        <div className="nav-wrap">
          <nav className={menu ? "nav open" : "nav"}>
            {[['about', 'About'], ['experience', 'Experience'], ['work', 'Work'], ['lab', 'Focus'], ['agent', 'Agent'], ['contact', 'Contact']].map(([id, label]) => <button key={id} onClick={() => go(id)}>{label}</button>)}
          </nav>
        </div>
        <div className="top-actions"><button className="talk" onClick={() => go("contact")}>Let’s talk <ArrowUpRight size={14}/></button><a className="resume" href={profile.resume} target="_blank" rel="noreferrer"><FileText size={14}/> Resume</a><button className="menu" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button></div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-top"><div className="hero-kicker">COMPUTER SCIENCE · BENGALURU, INDIA</div><div className="availability"><span/> OPEN TO OPPORTUNITIES</div></div>
          <div className="hero-main">
            <div className="hero-copy">
              <div className="eyebrow-chip"><Sparkles size={14}/> AI · DATA · SOFTWARE · RESEARCH</div>
              <h1>I build with <em>data,</em><br/>intelligence <span>&amp; software.</span></h1>
              <p className="hero-lead">A multidisciplinary Computer Science profile spanning <b>AI / ML, Data Analytics, Data Analyst workflows, Full-Stack Development</b> and research — from finding patterns in data to shipping usable products.</p>
              <div className="hero-buttons"><button className="primary" onClick={() => go("work")}>Explore my work <ArrowUpRight size={16}/></button><button className="secondary" onClick={() => { setAssistantOpen(true); go("agent"); }}>Try the portfolio agent <Bot size={16}/></button></div>
            </div>
            <div className="hero-visual" aria-label="AI and data visual graphics">
              <div className="visual-card visual-a"><div className="visual-label">DATA → INSIGHT</div><div className="bars"><i/><i/><i/><i/><i/></div><div className="visual-foot"><span>ANALYSIS</span><b>+ 84%</b></div></div>
              <div className="visual-card visual-b"><div className="visual-label">MODEL → PRODUCT</div><div className="node-map"><span/><span/><span/><span/><span/><b/></div><div className="visual-foot"><span>AI WORKFLOW</span><b>LIVE</b></div></div>
              <div className="visual-orb"><span>AG</span></div>
            </div>
          </div>
          <div className="hero-bottom"><span>01 / PROFILE</span><p>AI/ML · DATA ANALYTICS · FULL-STACK · RESEARCH</p><button className="circle-arrow" onClick={() => go("about")}><ArrowUpRight/></button></div>
        </section>

        <section id="about" className="section profile-section">
          <div className="section-head reveal-on-scroll"><div className="section-label">01 / PROFILE</div><span>A MULTIDISCIPLINARY BUILDER</span></div>
          <div className="profile-layout">
            <div className="profile-copy reveal-on-scroll">
              <div className="profile-kicker"><span className="pulse-dot"/> COMPUTER SCIENCE · AI · DATA · SOFTWARE</div>
              <h2>I like working where <em>ideas become useful.</em></h2>
              <p>I move comfortably between analysing data, building intelligent workflows and developing the software around them. That means looking at a problem from both sides — what the data says and what the user actually needs.</p>
              <p>My experience covers AI research, legal-tech AI workflows and full-stack engineering, with projects spanning RAG, machine learning, Tableau, research and embedded systems.</p>
              <div className="profile-tags"><span>AI / ML</span><span>Data Analytics</span><span>Data Analyst</span><span>Full-Stack</span><span>Research</span></div>
            </div>
            <div className="profile-board reveal-on-scroll">
              <div className="board-top"><span>ADITI / SYSTEM MAP</span><b>04 FOCUS AREAS</b></div>
              <div className="board-core"><div className="core-initials">AG</div><div><strong>Build → Analyse → Learn</strong><small>Turning technical work into useful outcomes.</small></div></div>
              <div className="board-lines">
                <div><span>01</span><b>AI / ML</b><i><em style={{width:'92%'}}/></i><small>Intelligent systems</small></div>
                <div><span>02</span><b>DATA</b><i><em style={{width:'86%'}}/></i><small>Analysis & insights</small></div>
                <div><span>03</span><b>FULL-STACK</b><i><em style={{width:'89%'}}/></i><small>Product engineering</small></div>
                <div><span>04</span><b>RESEARCH</b><i><em style={{width:'84%'}}/></i><small>Experiment & explain</small></div>
              </div>
              <div className="board-footer"><span>OPEN TO OPPORTUNITIES</span><strong>● ACTIVE</strong></div>
            </div>
          </div>
        </section>

        <section id="experience" className="section experience">
          <div className="section-head"><div className="section-label">02 / EXPERIENCE</div><span>WHERE I HAVE WORKED</span></div>
          <div className="timeline">{experience.map((item, i) => <article className="experience-row reveal-on-scroll" style={{"--delay": `${i * 120}ms`}} key={item.company}><div className="exp-index">0{i+1}</div><div className="exp-main"><h3>{item.company}</h3><div className="role">{item.role}</div></div><div className="exp-period">{item.period}</div><p>{item.text}</p></article>)}</div>
        </section>

        <section id="work" className="section work">
          <div className="section-head"><div className="section-label">03 / SELECTED WORK</div><span>CLICK TO OPEN THE FULL CASE STUDY</span></div>
          <div className="project-list">{projects.map((p) => { const Icon=p.icon; return <article className={`project project-${p.color} reveal-on-scroll`} style={{"--delay": `${(Number(p.n)-1)*90}ms`}} key={p.n} onClick={() => setSelected(p)}><div className="project-num">{p.n}</div><div className="project-icon"><Icon size={20}/></div><div className="project-info"><div className="project-cat">{p.category}</div><h3>{p.title}</h3><p>{p.short}</p><div className="stack">{p.stack}</div></div><div className="project-arrow"><ArrowUpRight/></div></article>; })}</div>
        </section>

        <section id="lab" className="section lab">
          <div className="section-label">04 / AREAS OF FOCUS</div>
          <div className="lab-grid">
            <div><div className="focus-number">04</div><h2>I work across <span>the stack.</span></h2><p>Not locked into one title. My strongest interests sit at the intersection of intelligent systems, data and software — broad enough to contribute beyond a single role.</p></div>
            <div className="lab-items">{focus.map(({icon:Icon,num,title,text},i) => <div className="reveal-on-scroll" style={{"--delay": `${i * 100}ms`}} key={num}><span>{num}</span><div className="focus-icon"><Icon size={17}/></div><div><b>{title}</b><small>{text}</small></div><ChevronRight size={17}/></div>)}</div>
          </div>
        </section>

        <section id="agent" className="section agent-section">
          <div className="section-label">05 / PORTFOLIO AGENT</div>
          <div className="agent-intro"><div><div className="ai-badge"><Wand2 size={14}/> INTERACTIVE AI-STYLE FEATURE</div><h2>Don’t just browse.<br/><span>Interrogate the portfolio.</span></h2><p>Use the agent to match Aditi with a role, generate a recruiter-ready summary or ask about a project. It is designed to surface the strongest evidence quickly.</p></div><div className="agent-mini-stats"><div><b>4</b><span>role lenses</span></div><div><b>4</b><span>case studies</span></div><div><b>∞</b><span>questions</span></div></div></div>
          <div className="agent-shell reveal-on-scroll">
            <div className="agent-side"><div className="agent-brand"><span className="agent-dot"/> ADITI AGENT <small>ONLINE</small></div><p>Choose what you want to know.</p>
              <button className={agentMode==="explore"?"active":""} onClick={()=>setAgentMode("explore")}><Bot size={15}/> Ask the portfolio</button>
              <button className={agentMode==="match"?"active":""} onClick={()=>setAgentMode("match")}><Target size={15}/> Role fit matcher</button>
              <button className={agentMode==="pitch"?"active":""} onClick={()=>{setAgentMode("pitch");generatePitch();}}><Wand2 size={15}/> Generate recruiter pitch</button>
            </div>
            <div className="agent-main">
              {agentMode==="match" ? <div className="match-view"><div className="match-head"><span>ROLE FIT ANALYSIS</span><small>BASED ON PORTFOLIO EVIDENCE</small></div>{Object.entries(roleScore).map(([role,score]) => <button className="score-row" key={role} onClick={()=>askAgent(`Why is Aditi a good fit for ${role}?`)}><span>{role}</span><div className="score-track"><i style={{width:`${score}%`}}/></div><b>{score}%</b></button>)}<p>Click a role to generate the reasoning behind the match.</p></div> : <><div className="agent-answer"><div className="agent-answer-head"><span><span className="agent-dot"/> Agent response</span><small>{generating ? "GENERATING" : "READY"}</small></div>{generating ? <div className="agent-generating"><i/><i/><i/></div> : <p>{assistantAnswer}</p>}</div><div className="quick-prompts"><button onClick={()=>askAgent("Why is Aditi a good fit for a Data Analyst role?")}>Data Analyst fit</button><button onClick={()=>askAgent("Tell me about ClauseAI")}>Explain ClauseAI</button><button onClick={()=>askAgent("What is her research work?")}>Research</button><button onClick={()=>askAgent("Why should I hire her?")}>Why hire her?</button></div><form className="agent-input" onSubmit={e=>{e.preventDefault();askAgent(assistantInput);}}><input value={assistantInput} onChange={e=>setAssistantInput(e.target.value)} placeholder="Ask anything about Aditi's profile..."/><button><Send size={17}/></button></form></>}
            </div>
          </div>
        </section>

        <section className="section strengths">
          <div className="section-head"><div className="section-label">06 / WHAT I BRING</div><span>HOW I THINK ABOUT WORK</span></div>
          <div className="strength-grid">{strengths.map((s,i)=><article className="reveal-on-scroll" style={{"--delay": `${i * 100}ms`}} key={s.n}><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p></article>)}</div>
        </section>

        <section id="contact" className="contact">
          <div className="contact-glow glow-one"/><div className="contact-glow glow-two"/>
          <div className="section-label">07 / LET’S CONNECT</div>
          <div className="contact-main"><div><h2>Have a problem<br/><em>worth building for?</em></h2><p>Open to opportunities across AI/ML, Data Analytics, Data Analyst, Full-Stack Development and research-oriented roles.</p></div><div className="contact-card"><span>CONTACT</span><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a><a className="contact-phone" href="tel:7205177826">720 517 7826</a><div className="contact-links"><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a href={profile.resume} target="_blank" rel="noreferrer"><Download size={17}/> Resume</a></div></div></div>
          <div className="contact-bottom"><span>ADITI AGRAWAL</span><span>BENGALURU · INDIA</span><span>AI · DATA · SOFTWARE · RESEARCH</span></div>
        </section>
      </main>

      {selected && <div className="modal-backdrop" onClick={()=>setSelected(null)}><div className={`modal modal-${selected.color}`} onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setSelected(null)}><X/></button><div className="project-cat">{selected.category}</div><div className="modal-number">{selected.n}</div><h2>{selected.title}</h2><p className="modal-overview">{selected.overview}</p><div className="detail-grid"><div className="detail-block"><h4>WHAT I EXPLORED</h4><ul>{selected.approach.map(x=><li key={x}>{x}</li>)}</ul></div><div className="detail-block"><h4>PROJECT OUTCOME</h4><p>{selected.outcome}</p></div></div><div className="modal-stack">{selected.stack}</div><div className="modal-actions">{selected.link && <a href={selected.link} target="_blank" rel="noreferrer">Open live project <ExternalLink/></a>}{selected.github && <a className="dark-action" href={selected.github} target="_blank" rel="noreferrer">GitHub <Github/></a>}{selected.research && <span className="research-note">Research paper / project · no GitHub link</span>}</div></div></div>}
      {assistantOpen && <button className="assistant-fab" onClick={()=>{setAssistantOpen(false);go("agent")}} aria-label="Portfolio agent"><Bot size={19}/></button>}
      {!assistantOpen && <button className="assistant-fab" onClick={()=>{setAssistantOpen(true);go("agent")}} aria-label="Open portfolio agent"><Sparkles size={19}/></button>}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
