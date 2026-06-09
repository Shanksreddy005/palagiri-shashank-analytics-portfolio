"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Database, 
  LineChart, 
  Cpu, 
  Terminal, 
  Layers, 
  ArrowRight, 
  ExternalLink, 
  Briefcase, 
  Award, 
  Mail, 
  FileText, 
  ShieldCheck, 
  ChevronRight,
  TrendingUp,
  FileSpreadsheet
} from "lucide-react";

// CountUp Component for Metrics Section
function MetricCountUp({ value, suffix = "" }: { value: string; suffix?: string }) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let start = 0;
    const end = numericValue;
    if (isNaN(end)) return;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [numericValue]);

  return (
    <span ref={countRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  // Track active section for floating nav highlights
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero", "about", "skills", "projects", "dashboards", 
        "experience", "certifications", "metrics", "contact"
      ];
      
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-apple-softGray text-apple-graphite font-sans">
      
      {/* 1. Header / Floating Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-apple-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div 
            onClick={() => scrollTo("hero")} 
            className="text-lg font-bold font-display cursor-pointer hover:opacity-85 transition tracking-wider flex items-center space-x-2"
          >
            <span className="bg-apple-graphite text-white px-2 py-1 rounded text-sm font-mono">PSR</span>
            <span className="hidden sm:inline font-normal text-sm text-gray-500 font-sans">| Data Analytics Portfolio</span>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            {[
              { id: "hero", label: "Overview" },
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "dashboards", label: "Dashboards" },
              { id: "experience", label: "Experience" },
              { id: "certifications", label: "Certificates" },
              { id: "contact", label: "Connect" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-xs font-medium transition-colors hover:text-apple-mutedBlue ${
                  activeSection === item.id ? "text-apple-mutedBlue font-semibold" : "text-gray-500"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <a 
              href="/resume/Palagiri_Shashank_Reddy_Resume.pdf" 
              download
              className="inline-flex items-center justify-center px-4 py-2 bg-apple-graphite hover:bg-black text-white rounded-full text-xs font-semibold transition"
            >
              <FileText className="w-3.5 h-3.5 mr-1.5" /> Download Resume
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen pt-32 pb-16 px-6 flex flex-col justify-center max-w-5xl mx-auto">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 bg-blue-50 text-apple-mutedBlue rounded-full text-xs font-semibold border border-blue-100">
            Open to Data, Business, &amp; Product Analyst Roles
          </div>
          <h1 className="text-4xl sm:text-7xl font-bold font-display tracking-tight text-apple-graphite leading-none">
            Transforming Data Into <br/>
            <span className="bg-gradient-to-r from-apple-mutedBlue to-apple-indigo bg-clip-text text-transparent">
              Actionable Business Insights
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed">
            Data Analyst skilled in SQL, Python, Tableau, and statistical analysis, building analytics solutions that drive business decisions. Specialize in translating complex transactional trends into clear, revenue-driving business strategies.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center px-6 py-3 bg-apple-mutedBlue hover:bg-blue-600 text-white rounded-full text-sm font-semibold transition shadow-md"
            >
              Explore Projects <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button 
              onClick={() => scrollTo("dashboards")}
              className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-50 text-apple-graphite border border-apple-border rounded-full text-sm font-semibold transition"
            >
              View Dashboards
            </button>
            <button 
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center px-6 py-3 bg-transparent hover:bg-gray-100 text-apple-graphite rounded-full text-sm font-semibold transition"
            >
              Let&apos;s Connect
            </button>
          </div>

          {/* Recruiter-friendly KPI cards */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-apple-border max-w-2xl">
            <div>
              <p className="text-2xl font-bold text-apple-graphite font-display">500K+</p>
              <p className="text-xs text-gray-500">Orders Analysed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-apple-emerald font-display">2.5M+</p>
              <p className="text-xs text-gray-500">Records Processed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-apple-indigo font-display">40+</p>
              <p className="text-xs text-gray-500">Advanced Queries</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white border-y border-apple-border">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-4">
            <h2 className="text-3xl font-bold font-display tracking-tight text-apple-graphite">About Me</h2>
            <p className="text-xs font-semibold uppercase tracking-wider text-apple-mutedBlue">Analytical Mindset &amp; Storytelling</p>
          </div>
          
          <div className="md:col-span-8 space-y-6 text-gray-600 leading-relaxed text-sm">
            <p>
              I bridge the gap between complex databases and executive decision-making. My core expertise lies in parsing vast transaction logs to surface actionable patterns—whether identifying user retention cliffs using cohort metrics or mapping portfolio volatility trends using custom statistical indicator scripts.
            </p>
            <p>
              With a background in Computer Science Engineering (B.Tech CSE from VIT University), I combine rigorous engineering principles with business intelligence tools (Tableau, SQL, Python) to deploy reliable datasets, write optimization-ready window queries, and convey insights that direct business metrics upwards.
            </p>
            <div className="border-t border-apple-border pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-apple-graphite font-medium">
              <div>
                <p className="text-xs text-gray-400">Education</p>
                <p className="text-sm">B.Tech in Computer Science Engineering</p>
                <p className="text-xs text-gray-500">Vellore Institute of Technology (VIT)</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Core Expertise</p>
                <p className="text-sm">SQL (Advanced), Python, Tableau, Cohort matrices, RFM Segmentation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 max-w-7xl mx-auto px-6">
        <div className="space-y-4 text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-display tracking-tight">Technical Stack &amp; Skills</h2>
          <p className="text-sm text-gray-500">Recruiter-ready skills categorized according to project needs &amp; master resume alignment</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              category: "SQL & Databases",
              icon: <Database className="w-5 h-5 text-apple-mutedBlue" />,
              skills: ["SQL (Advanced)", "PostgreSQL", "Window Functions", "CTEs & Joins"]
            },
            {
              category: "Python & Analytics",
              icon: <Terminal className="w-5 h-5 text-apple-emerald" />,
              skills: ["Python", "Pandas", "NumPy", "Jupyter Notebooks"]
            },
            {
              category: "Visualization",
              icon: <LineChart className="w-5 h-5 text-apple-indigo" />,
              skills: ["Tableau", "Interactive Dashboards", "KPI Reporting"]
            },
            {
              category: "Machine Learning",
              icon: <Cpu className="w-5 h-5 text-red-500" />,
              skills: ["Scikit-learn", "Statistical Profiling", "Feature Engineering", "Classification Pipelines"]
            },
            {
              category: "Cloud & Methods",
              icon: <Layers className="w-5 h-5 text-amber-500" />,
              skills: ["AWS", "GitHub", "Cohort Analysis", "RFM Segmentation"]
            }
          ].map((cat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-apple-border shadow-sm hover:shadow-md transition">
              <div className="flex items-center space-x-2.5 mb-4">
                {cat.icon}
                <h3 className="font-bold text-sm text-apple-graphite">{cat.category}</h3>
              </div>
              <ul className="space-y-2">
                {cat.skills.map((s, sIdx) => (
                  <li key={sIdx} className="text-xs text-gray-500 flex items-center">
                    <ChevronRight className="w-3 h-3 mr-1 text-gray-400" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 bg-white border-y border-apple-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-4 text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-display tracking-tight">Featured Analytics Projects</h2>
            <p className="text-sm text-gray-500">Real-world business problems analyzed, modeled, and delivered.</p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "Food Delivery Platform Analytics",
                tagline: "Uncovering user retention cliffs and dynamic suburban logistics parameters via SQL matrices",
                metrics: "500K+ Orders Analysed | Month-3 Retention Cliff Isolated",
                businessProblem: "Acquisition spend was lost to steep post-purchase dropoffs. Isolated the 55% churn cliff after the first purchase, showing dynamic risk vectors.",
                analysis: "Cohort Analysis, RFM Segmentation, PostgreSQL Window Calculations, and executive Tableau summaries.",
                recommendations: "Deliver post-order-1 credits precisely on day 4; relocate suburban dispatch to avoid 40%+ delivery delays.",
                tech: ["SQL (Advanced)", "PostgreSQL", "Tableau", "Cohort Analysis", "RFM Segmentation"],
                hasCaseStudy: true,
                caseStudyUrl: "/projects/food-delivery-analytics",
                githubUrl: "https://github.com/Shanksreddy005/food-delivery-analytics-sql",
                dashboardUrl: "https://public.tableau.com/app/profile/shashank.reddy4125/viz/FoodDeliveryPlatformAnalyticsDashboard/ExecutiveOverview",
                highlighted: true
              },
              {
                title: "Financial Market Trend Dashboard",
                tagline: "Automated portfolio volatility monitoring and moving average indicators",
                metrics: "2.5M+ Records Processed | Volatility Gauge Automated",
                businessProblem: "Portfolio risk adjustments lagged due to slow manual tracking. Accelerated reporting speed to under 10 seconds.",
                analysis: "Constructed Bollinger Band deviation systems and dual Exponential Moving Average crossovers.",
                recommendations: "Automatically trigger hedge positions when annualized volatility breaches 22%.",
                tech: ["Python", "Pandas", "Tableau", "Volatility Modeling", "Statistical Profiling"],
                hasCaseStudy: true,
                caseStudyUrl: "/projects/financial-market-dashboard",
                githubUrl: "https://github.com/Shanksreddy005/Finance_Analysis",
                dashboardUrl: "https://public.tableau.com/app/profile/shashank.reddy4125/viz/Financial_Market_Dashboard/FinancialMarketTrendAnalysisDashboard",
                highlighted: true
              },
              {
                title: "DataLens",
                tagline: "Automated Exploratory Data Analysis & Quality Scoring utility",
                metrics: "Automated EDA | Data Quality Scoring Engine",
                businessProblem: "Analysts wasted 40% of standard project workflows on raw data cleaning & initial column profiles.",
                analysis: "Statistical profiling, automated missingness identification, correlation metrics.",
                recommendations: "Integrate as a pre-ingest checker to enforce schema alignment.",
                tech: ["FastAPI", "React", "Python", "Pandas", "Statistical Profiling"],
                hasCaseStudy: false,
                githubUrl: "https://github.com/Shanksreddy005/DataLens",
                dashboardUrl: ""
              },
              {
                title: "AutoLead AI",
                tagline: "Structured lead analytics and classification pipeline via LLM logic",
                metrics: "LLM Workflows | Automated Structured Reporting",
                businessProblem: "Raw sales data lacked structural labels, making priority sorting difficult.",
                analysis: "Feature engineering, parsing unstructured lead fields.",
                recommendations: "Automate outbound messaging campaigns for high-intent client tiers.",
                tech: ["LLM API", "Python", "Pandas", "Feature Engineering"],
                hasCaseStudy: false,
                githubUrl: "https://github.com/Shanksreddy005/AutoLead-AI",
                dashboardUrl: ""
              },
              {
                title: "AI PDF Chatbot",
                tagline: "Semantic retrieval and QA assistant for financial filings and reports",
                metrics: "RAG Pipelines | Semantic Retrieval",
                businessProblem: "Locating specific figures in quarterly reports took hours of manual parsing.",
                analysis: "RAG pipeline creation, chunk semantic mapping.",
                recommendations: "Standardize financial report exploration to secure fast lookups.",
                tech: ["Python", "FastAPI", "VectorDB", "RAG Pipelines"],
                hasCaseStudy: false,
                githubUrl: "https://github.com/Shanksreddy005/ai-pdf-chatbot",
                dashboardUrl: ""
              }
            ].map((p, idx) => (
              <div 
                key={idx} 
                className={`p-8 rounded-3xl border border-apple-border transition flex flex-col md:flex-row justify-between gap-8 ${
                  p.highlighted 
                    ? "bg-gradient-to-br from-white via-white to-blue-50/20 ring-1 ring-apple-mutedBlue/15" 
                    : "bg-apple-softGray"
                }`}
              >
                <div className="space-y-4 max-w-3xl">
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-apple-graphite font-display">{p.title}</h3>
                    <p className="text-sm font-semibold text-apple-mutedBlue">{p.tagline}</p>
                    <p className="text-xs font-mono text-apple-emerald">{p.metrics}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-600 pt-2 border-t border-apple-border/50">
                    <div>
                      <p className="font-semibold text-apple-graphite uppercase text-[10px] tracking-wider mb-1">Business Problem</p>
                      <p>{p.businessProblem}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-apple-graphite uppercase text-[10px] tracking-wider mb-1">Analysis & Methods</p>
                      <p>{p.analysis}</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="font-semibold text-apple-graphite uppercase text-[10px] tracking-wider mb-1">Recommendations</p>
                    <p className="text-xs text-gray-600">{p.recommendations}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-white border border-apple-border text-[10px] font-medium rounded text-gray-500">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 justify-center min-w-[150px]">
                  {p.hasCaseStudy ? (
                    <Link 
                      href={p.caseStudyUrl || "#"}
                      className="w-full text-center py-2 bg-apple-graphite hover:bg-black text-white text-xs font-bold rounded-full transition shadow-sm"
                    >
                      View Case Study
                    </Link>
                  ) : (
                    <button 
                      disabled
                      className="w-full text-center py-2 bg-gray-200 text-gray-400 text-xs font-semibold rounded-full cursor-not-allowed"
                    >
                      No Case Study
                    </button>
                  )}
                  
                  <a 
                    href={p.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full text-center py-2 bg-white hover:bg-gray-50 text-apple-graphite border border-apple-border text-xs font-bold rounded-full transition"
                  >
                    GitHub Repo
                  </a>

                  {p.dashboardUrl && (
                    <a 
                      href={p.dashboardUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full text-center py-2 bg-transparent text-apple-mutedBlue hover:underline text-xs font-bold transition flex items-center justify-center"
                    >
                      Live Dashboard <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Showcase */}
      <section id="dashboards" className="py-24 max-w-7xl mx-auto px-6">
        <div className="space-y-4 text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-display tracking-tight">Interactive Tableau Dashboards</h2>
          <p className="text-sm text-gray-500">Directly explore performance metrics. Open links to interact dynamically.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dashboard 1 */}
          <div className="bg-white p-6 rounded-3xl border border-apple-border shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg text-apple-graphite font-display">Food Delivery Executive Overview</h3>
                <span className="px-2.5 py-0.5 bg-green-50 text-apple-emerald border border-green-100 rounded text-xs font-semibold">SQL + Tableau</span>
              </div>
              <p className="text-xs text-gray-500 mb-6">
                Tracks user acquisition velocity, cohort month retention drop-offs, and suburbs average delivery durations. Helps managers adjust driver density during peak operational hours.
              </p>
            </div>
            
            {/* Tableau Embed Container Representation */}
            <div className="bg-apple-softGray rounded-2xl h-64 border border-apple-border mb-6 flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/45 flex items-end p-4">
                <p className="text-white text-xs font-medium">Tableau Public Executive Overview Preview Image</p>
              </div>
              <FileSpreadsheet className="w-16 h-16 text-gray-300 group-hover:scale-110 transition duration-300" />
            </div>

            <div className="flex justify-between items-center">
              <a 
                href="https://public.tableau.com/app/profile/shashank.reddy4125/viz/FoodDeliveryPlatformAnalyticsDashboard/ExecutiveOverview" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-apple-mutedBlue hover:bg-blue-600 text-white rounded-full text-xs font-semibold transition shadow-sm"
              >
                Open in Tableau Public <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
              <Link href="/projects/food-delivery-analytics" className="text-xs text-apple-graphite font-bold hover:underline">
                Read Case Study
              </Link>
            </div>
          </div>

          {/* Dashboard 2 */}
          <div className="bg-white p-6 rounded-3xl border border-apple-border shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg text-apple-graphite font-display">Financial Market Trend Analysis</h3>
                <span className="px-2.5 py-0.5 bg-indigo-50 text-apple-indigo border border-indigo-100 rounded text-xs font-semibold">Python + Tableau</span>
              </div>
              <p className="text-xs text-gray-500 mb-6">
                Monitors daily NIFTY index fluctuations, tracking moving average crossovers and standard deviation Bollinger Bands to visualize risk parameters.
              </p>
            </div>
            
            {/* Tableau Embed Container Representation */}
            <div className="bg-apple-softGray rounded-2xl h-64 border border-apple-border mb-6 flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/45 flex items-end p-4">
                <p className="text-white text-xs font-medium">Tableau Public Financial Market Trend Preview Image</p>
              </div>
              <TrendingUp className="w-16 h-16 text-gray-300 group-hover:scale-110 transition duration-300" />
            </div>

            <div className="flex justify-between items-center">
              <a 
                href="https://public.tableau.com/app/profile/shashank.reddy4125/viz/Financial_Market_Dashboard/FinancialMarketTrendAnalysisDashboard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-apple-mutedBlue hover:bg-blue-600 text-white rounded-full text-xs font-semibold transition shadow-sm"
              >
                Open in Tableau Public <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
              <Link href="/projects/financial-market-dashboard" className="text-xs text-apple-graphite font-bold hover:underline">
                Read Case Study
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white border-y border-apple-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4 text-center mb-16">
            <h2 className="text-3xl font-bold font-display tracking-tight">Professional Experience</h2>
            <p className="text-sm text-gray-500">Master resume timeline alignment</p>
          </div>

          <div className="relative border-l border-apple-border pl-8 ml-4 space-y-12">
            {[
              {
                role: "Data Analytics Intern",
                company: "SkillFied Mentor",
                duration: "Analytics Simulation",
                highlights: [
                  "Executed Exploratory Data Analysis (EDA) on client transactional datasets to surface sales distribution patterns.",
                  "Formulated predictive modeling pipelines to forecast customer drop-off thresholds.",
                  "Prepared structured stakeholder reporting decks detailing data findings and strategic business recommendations."
                ]
              },
              {
                role: "Machine Learning Intern",
                company: "CodSoft",
                duration: "Analytics Simulation",
                highlights: [
                  "Engineered model features from raw tabular files, improving baseline score accuracy.",
                  "Built automated classification pipelines to score and prioritize consumer lead channels.",
                  "Documented data processing logic to ensure alignment with standard software engineering practices."
                ]
              }
            ].map((exp, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-[41px] top-0 bg-white border border-apple-border p-1.5 rounded-full flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-apple-mutedBlue" />
                </span>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between">
                    <h3 className="font-bold text-base text-apple-graphite">{exp.role}</h3>
                    <span className="text-xs font-semibold text-gray-400">{exp.duration}</span>
                  </div>
                  <p className="text-xs font-bold text-apple-mutedBlue">{exp.company}</p>
                  <ul className="list-disc list-inside space-y-1.5 text-xs text-gray-500 ml-2">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="leading-relaxed">{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 max-w-6xl mx-auto px-6">
        <div className="space-y-4 text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-display tracking-tight">Professional Credentials</h2>
          <p className="text-sm text-gray-500">Verified credentials and industry simulations matching qualifications</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "AWS Solutions Architect Associate", issuer: "AWS Certified" },
            { title: "HackerRank SQL (Advanced)", issuer: "HackerRank Credentials" },
            { title: "Oracle AI Foundations Associate", issuer: "Oracle Associate" },
            { title: "Oracle Foundations Associate", issuer: "Oracle Associate" },
            { title: "Microsoft Career Essentials in Generative AI", issuer: "Microsoft Certificate" },
            { title: "Deloitte Data Analytics Simulation", issuer: "Deloitte / Forage" },
            { title: "Quantium Data Analytics Simulation", issuer: "Quantium / Forage" },
            { title: "BCG GenAI Simulation", issuer: "BCG / Forage" }
          ].map((c, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-apple-border shadow-sm flex items-start space-x-3 hover:shadow-md transition">
              <Award className="w-5 h-5 text-apple-mutedBlue flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-xs text-apple-graphite leading-snug">{c.title}</h4>
                <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider font-semibold">{c.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Metrics Section */}
      <section id="metrics" className="py-24 bg-apple-graphite text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-5 gap-8 text-center">
          {[
            { value: "500000", suffix: "+", label: "Orders Analysed" },
            { value: "2500000", suffix: "+", label: "Records Processed" },
            { value: "40", suffix: "+", label: "Advanced SQL Queries" },
            { value: "5", suffix: "+", label: "Analytics Projects" },
            { value: "8", suffix: "+", label: "Certifications" }
          ].map((m, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-apple-emerald">
                <MetricCountUp value={m.value} suffix={m.suffix} />
              </h3>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Narrative Section: What I Bring to Analytics Teams */}
      <section className="py-24 bg-white border-b border-apple-border">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl font-bold font-display text-apple-graphite">What I Bring to Analytics Teams</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            <div className="p-6 border border-apple-border rounded-2xl">
              <ShieldCheck className="w-8 h-8 text-apple-mutedBlue mx-auto mb-3" />
              <h4 className="font-bold text-sm mb-1">SQL Proficiency</h4>
              <p className="text-xs text-gray-500">Advanced query construction, clean indexes, and window aggregation procedures.</p>
            </div>
            <div className="p-6 border border-apple-border rounded-2xl">
              <Database className="w-8 h-8 text-apple-emerald mx-auto mb-3" />
              <h4 className="font-bold text-sm mb-1">Analytical Execution</h4>
              <p className="text-xs text-gray-500">Transform raw server logs into clear transactional patterns and retention graphs.</p>
            </div>
            <div className="p-6 border border-apple-border rounded-2xl">
              <LineChart className="w-8 h-8 text-apple-indigo mx-auto mb-3" />
              <h4 className="font-bold text-sm mb-1">Business Alignment</h4>
              <p className="text-xs text-gray-500">Focus on metrics impact: conversion rates, MRR growth, and logistics dispatch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Footer Section */}
      <section id="contact" className="py-24 bg-apple-softGray">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-display tracking-tight text-apple-graphite">Let&apos;s Connect</h2>
            <p className="text-sm text-gray-500 max-w-lg mx-auto">
              I am open to Data Analyst, Product Analyst, Business Analyst, and Founder&apos;s Office opportunities. Let&apos;s discuss how my analytics pipeline processes can benefit your team.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <a 
              href="mailto:shashank.reddy5804@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-50 text-apple-graphite border border-apple-border rounded-full text-sm font-semibold transition shadow-sm"
            >
              <Mail className="w-4 h-4 mr-2 text-apple-mutedBlue" /> shashank.reddy5804@gmail.com
            </a>
            <a 
              href="tel:+918919332454"
              className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-50 text-apple-graphite border border-apple-border rounded-full text-sm font-semibold transition shadow-sm"
            >
              <svg className="w-4 h-4 mr-2 text-apple-emerald" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg> +91 8919332454
            </a>
            <a 
              href="https://www.linkedin.com/in/shashank-reddy-147227260/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-50 text-apple-graphite border border-apple-border rounded-full text-sm font-semibold transition shadow-sm"
            >
              <svg className="w-4 h-4 mr-2 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg> LinkedIn Profile
            </a>
            <a 
              href="https://github.com/Shanksreddy005" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-50 text-apple-graphite border border-apple-border rounded-full text-sm font-semibold transition shadow-sm"
            >
              <svg className="w-4 h-4 mr-2 text-apple-graphite" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg> GitHub
            </a>
          </div>

          <div className="pt-12 border-t border-apple-border/50 text-xs text-gray-400 space-y-2">
            <p>&copy; {new Date().getFullYear()} Palagiri Shashank Reddy. Built with Next.js &amp; Tailwind CSS.</p>
            <p className="font-medium text-gray-500">&quot;Business Impact &gt; Technical Implementation | Insights &gt; Algorithms&quot;</p>
          </div>
        </div>
      </section>

    </div>
  );
}
