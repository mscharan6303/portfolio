import React, { useState, useEffect } from 'react';
import { 
  GitBranch, 
  Mail, 
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Download,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Terminal,
  CheckCircle2,
  Sparkles,
  Menu,
  X,
  Search,
  FileText,
  Layers,
  ShieldCheck,
  Train,
  Sprout,
  Globe,
  Copy,
  Check,
  ArrowUpRight,
  ArrowUp,
  MapPin,
  User,
  Cpu,
  Database,
  Server,
  Zap,
  BookOpen,
  Star,
  Send,
  Filter
} from 'lucide-react';

import profileImg from './assets/profile.jpg';

const GithubIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [copiedEmail, setCopiedEmail] = useState(false);
  
  // Filter states
  const [projectFilter, setProjectFilter] = useState('all');
  const [skillCategory, setSkillCategory] = useState('all');
  const [skillSearch, setSkillSearch] = useState('');
  const [certSearch, setCertSearch] = useState('');
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);

  // Form state
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple section active tracker
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'leadership', 'contact'];
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('mscharan2807@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Trigger direct mailto link as fallback
    const mailtoUrl = `mailto:mscharan2807@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.open(mailtoUrl, '_blank');
    
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  // Projects Data
  const projects = [
    {
      id: 'farm-to-home',
      title: 'Farm to Home',
      category: 'fullstack',
      subtitle: 'Direct Agricultural Marketplace & E-Commerce Platform',
      description: 'Full-stack platform connecting local farmers directly with urban consumers to ensure fair pricing for crops and fresh organic produce delivery. Features transparent pricing algorithms, shopping cart system, user authentication, and order status tracking.',
      detailedDesc: 'Farm to Home eliminates intermediate brokers in the agricultural supply chain. Farmers can list harvest yields with real-time pricing and stock, while consumers can browse organic items, build shopping carts, and place direct orders. Built with scalable REST API backend endpoints and responsive frontend UI.',
      technologies: ['ReactJS', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'HTML5/CSS3'],
      features: [
        'Direct farmer-to-consumer product listing',
        'Shopping cart & checkout workflow',
        'Role-based dashboards for farmers & buyers',
        'Real-time inventory and pricing management'
      ],
      icon: Sprout,
      color: 'from-emerald-500 to-teal-600',
      badge: 'Full-Stack Web'
    },
    {
      id: 'rail-swap',
      title: 'Rail Swap',
      category: 'fullstack',
      subtitle: 'Smart Railway Seat Exchange & Coordination Platform',
      description: 'Innovative web app enabling train passengers to request and coordinate seat swaps seamlessly. Features automatic QR & PDF ticket parsing, direct chat between travelers, and intelligent match notifications.',
      detailedDesc: 'Rail Swap improves passenger travel comfort without requiring manual railway staff intervention. Travelers upload or enter ticket details, specify preferred berth/seat preferences (e.g. side lower, window), and find matching passengers on the same train route willing to exchange seats.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'Supabase', 'Tailwind CSS'],
      features: [
        'Automated seat swap matching algorithm',
        'PDF ticket & QR code ticket parsing',
        'In-app passenger communication channel',
        'Seat preference filters (Berth type, Bay, Coach)'
      ],
      icon: Train,
      color: 'from-blue-600 to-indigo-600',
      badge: 'Smart Systems'
    },
    {
      id: 'ai-privacy',
      title: 'AI-Based Privacy Intelligence System',
      category: 'ai-security',
      subtitle: 'Real-Time Browser Extension & Threat Detector',
      description: 'Browser extension and security suite protecting users against malicious URLs and phishing threats in real time using Machine Learning algorithms and crowdsourced threat intelligence.',
      detailedDesc: 'Developed during research into web security, this extension inspects active web page URLs on-the-fly. It extracts lexical features, domain age, SSL details, and heuristics to predict malicious behavior before the user inputs sensitive credentials or downloads unsafe payloads.',
      technologies: ['JavaScript', 'Python', 'Machine Learning', 'WebExtension API', 'REST API', 'Scikit-Learn'],
      features: [
        'Real-time active tab URL inspection',
        'Machine learning classification engine for phishing detection',
        'Instant browser notification & threat warnings',
        'Crowdsourced community threat signal aggregation'
      ],
      icon: ShieldCheck,
      color: 'from-violet-600 to-purple-600',
      badge: 'AI & Web Security'
    }
  ];

  // Skills Data
  const skillCategories = [
    { id: 'all', label: 'All Tech Stack' },
    { id: 'languages', label: 'Languages' },
    { id: 'web', label: 'Frontend & Backend' },
    { id: 'cloud-db', label: 'Databases & Cloud' },
    { id: 'tools', label: 'Tools & Practices' }
  ];

  const skills = [
    { name: 'Java', category: 'languages', level: 'Proficient', icon: Code2, desc: 'Core Java, OOPs, Data Structures, Collections' },
    { name: 'JavaScript (ES6+)', category: 'languages', level: 'Intermediate', icon: Code2, desc: 'Async/Await, DOM, Modern JS' },
    { name: 'Python', category: 'languages', level: 'Proficient', icon: Terminal, desc: 'Data Analytics, ML Fundamentals, Scripts' },
    { name: 'C Language', category: 'languages', level: 'Basic', icon: Terminal, desc: 'Procedural Programming, Logic Building' },
    { name: 'ReactJS', category: 'web', level: 'Proficient', icon: Layers, desc: 'Hooks, State Management, Router, Vite' },
    { name: 'HTML5 & CSS3', category: 'web', level: 'Proficient', icon: Globe, desc: 'Responsive Design, Modern Layouts' },
    { name: 'Node.js', category: 'web', level: 'Intermediate', icon: Server, desc: 'Runtime Environment, Async Execution' },
    { name: 'Express.js', category: 'web', level: 'Intermediate', icon: Server, desc: 'REST APIs, Middleware, Routing' },
    { name: 'Tailwind CSS', category: 'web', level: 'Proficient', icon: Layers, desc: 'Utility-First Styling, Responsive UI' },
    { name: 'TypeScript', category: 'web', level: 'Basic', icon: Code2, desc: 'Static Typing, Interfaces, Types' },
    { name: 'MongoDB', category: 'cloud-db', level: 'Intermediate', icon: Database, desc: 'NoSQL, Mongoose Schemas, Aggregations' },
    { name: 'MySQL', category: 'cloud-db', level: 'Intermediate', icon: Database, desc: 'Relational Schemas, Queries, Joins' },
    { name: 'Microsoft Azure', category: 'cloud-db', level: 'Intermediate', icon: Cpu, desc: 'Cloud Fundamentals, Azure App Services' },
    { name: 'AWS (Simulation)', category: 'cloud-db', level: 'Practitioner', icon: Cpu, desc: 'Solutions Architecture & Storage' },
    { name: 'Git & GitHub', category: 'tools', level: 'Proficient', icon: GitBranch, desc: 'Version Control, Branching, PRs' },
    { name: 'Postman', category: 'tools', level: 'Proficient', icon: Zap, desc: 'API Testing & Documentation' },
    { name: 'VS Code', category: 'tools', level: 'Proficient', icon: Terminal, desc: 'Primary IDE & Extensions Setup' }
  ];

  // Certifications Data
  const certifications = [
    {
      id: 1,
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      category: 'web',
      year: '2024',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      fileName: 'RESPONSIVE WEB DESIGN FREE CODE CAMP CERTIFICATION.pdf',
      description: 'Mastery of HTML5, CSS3, Flexbox, CSS Grid, and media queries for building adaptive web interfaces.'
    },
    {
      id: 2,
      title: 'Programming in Java',
      issuer: 'NPTEL (IIT)',
      category: 'languages',
      year: '2024',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      fileName: 'Java certificate.pdf',
      description: 'Comprehensive certification in Java OOPs principles, multithreading, exception handling, and core API libraries.'
    },
    {
      id: 3,
      title: 'Data Analytics with Python',
      issuer: 'NPTEL (IIT)',
      category: 'data',
      year: '2024',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      fileName: 'Data Analytics With Python.pdf',
      description: 'Data wrangling, statistical analysis, Pandas, NumPy, and visualization libraries in Python.'
    },
    {
      id: 4,
      title: 'The Joy of Computing using Python',
      issuer: 'NPTEL (IIT)',
      category: 'languages',
      year: '2023',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      fileName: 'The Joy of Computing using Python certificate.pdf',
      description: 'Core algorithmic thinking, problem-solving, computational logic, and Python programming.'
    },
    {
      id: 5,
      title: 'AI-ML Virtual Internship',
      issuer: 'EduSkills / AICTE / Google',
      category: 'ai',
      year: '2024',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      fileName: 'MANNEPALLI SAI CHARAN   LONG CERTIFICATE 851054.pdf',
      description: 'Government-recognized virtual internship supported by Google and AICTE covering ML algorithms and model deployment.'
    },
    {
      id: 6,
      title: 'AWS Solutions Architecture Job Simulation',
      issuer: 'Forage / AWS',
      category: 'cloud',
      year: '2024',
      badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      fileName: 'AWS  Solutions Architecture Job Simulation certificate.pdf',
      description: 'Practical simulation designing resilient, cost-optimized AWS cloud architectures & infrastructure.'
    },
    {
      id: 7,
      title: 'Deloitte Technology Job Simulation',
      issuer: 'Forage / Deloitte',
      category: 'industry',
      year: '2024',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-300',
      fileName: 'Deloitte Technology Job Simulation Certificate.pdf',
      description: 'Technology consulting simulation focusing on software requirements, architecture, and technology transformation.'
    },
    {
      id: 8,
      title: 'Java Training Certification',
      issuer: 'CodeTantra',
      category: 'languages',
      year: '2023',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      fileName: 'CODE TANTRA Java Certifcate.pdf',
      description: 'Hands-on practical Java coding coursework covering data structures and object-oriented paradigms.'
    },
    {
      id: 9,
      title: 'Java Masterclass Course',
      issuer: 'Udemy',
      category: 'languages',
      year: '2023',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      fileName: 'UDEMY JAVA certificate.pdf',
      description: 'In-depth Java application development training covering core libraries and standard coding practices.'
    },
    {
      id: 10,
      title: 'Quantum Fundamentals Program',
      issuer: 'APSCHE / WISER',
      category: 'advanced',
      year: '2024',
      badgeColor: 'bg-violet-50 text-violet-700 border-violet-200',
      fileName: 'APGOVQUANTUMCOMPUTINGCERTIFICATE.pdf',
      description: 'State government initiative program introducing quantum computing concepts, qubits, and quantum logic.'
    }
  ];

  // Leadership & Achievements Data
  const achievements = [
    {
      role: 'Class Representative (CR)',
      organization: 'QIS College of Engineering & Technology',
      period: 'B.Tech CSE Batch',
      type: 'Leadership',
      desc: 'Elected as the communication bridge between 60+ Computer Science students and department faculty. Managed academic schedules, facilitated student feedback, and organized technical workshops.',
      icon: GraduationCap,
      accent: 'border-blue-500 bg-blue-50/40 text-blue-600'
    },
    {
      role: 'Master Minds Prathibha Puraskaram',
      organization: 'Master Minds Educational Institution',
      period: 'Intermediate Board Exams',
      type: 'Academic Excellence',
      desc: 'Honored with prestigious academic award for securing 975/1000 (97.5%) in the Intermediate Board Examinations, demonstrating consistent academic dedication.',
      icon: Award,
      accent: 'border-emerald-500 bg-emerald-50/40 text-emerald-600'
    },
    {
      role: 'WIZ National Spell Bee — State Qualifier',
      organization: 'WIZ National Spell Bee Organization',
      period: 'State Level Competition',
      type: 'State Recognition',
      desc: 'Awarded Certificate of Merit for exceptional performance in vocabulary and linguistics, qualifying to represent at the State Level Competition.',
      icon: Star,
      accent: 'border-amber-500 bg-amber-50/40 text-amber-600'
    },
    {
      role: '1st Prize — Science Expo',
      organization: 'Sri Chaitanya Educational Institutions',
      period: 'Annual Science Fair',
      type: 'Innovation Award',
      desc: 'Secured 1st place for presenting an innovative applied science & technology model demonstrating problem-solving capabilities.',
      icon: Sparkles,
      accent: 'border-indigo-500 bg-indigo-50/40 text-indigo-600'
    }
  ];

  // Filtered Lists
  const filteredProjects = projects.filter(p => projectFilter === 'all' || p.category === projectFilter);
  
  const filteredSkills = skills.filter(s => {
    const matchesCategory = skillCategory === 'all' || s.category === skillCategory;
    const matchesSearch = s.name.toLowerCase().includes(skillSearch.toLowerCase()) || 
                          s.desc.toLowerCase().includes(skillSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredCerts = certifications.filter(c => {
    return c.title.toLowerCase().includes(certSearch.toLowerCase()) || 
           c.issuer.toLowerCase().includes(certSearch.toLowerCase()) ||
           c.description.toLowerCase().includes(certSearch.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. Header Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md group-hover:shadow-blue-500/25 transition-all duration-300">
              MC
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                Sai Charan
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Available for roles
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 backdrop-blur-xs p-1.5 rounded-full border border-slate-200/70 text-sm font-medium text-slate-600">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'certifications', label: 'Certifications' },
              { id: 'leadership', label: 'Leadership' },
              { id: 'contact', label: 'Contact' }
            ].map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-1.5 rounded-full transition-all duration-200 ${
                  activeSection === item.id 
                    ? 'bg-white text-blue-600 shadow-xs font-semibold' 
                    : 'hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="#contact" 
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-blue-500/20 active:scale-95"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Me' },
              { id: 'skills', label: 'Technical Skills' },
              { id: 'projects', label: 'Featured Projects' },
              { id: 'certifications', label: 'Certifications' },
              { id: 'leadership', label: 'Leadership & Awards' },
              { id: 'contact', label: 'Contact' }
            ].map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:pl-2 transition-all"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* 2. Hero Section */}
        <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-grid-pattern">
          {/* Subtle background glow blobs */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Hero Left Content */}
              <div className="lg:col-span-7 space-y-6 text-left">
                
                {/* Status Chip */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
                  <span className="bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent font-bold">
                    Computer Science Engineer & Full-Stack Developer
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                  Hi, I'm <br className="hidden sm:inline" />
                  <span className="gradient-text">Mannepalli Sai Charan</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
                  Motivated B.Tech Computer Science student specializing in <span className="font-semibold text-slate-900">Java</span>, <span className="font-semibold text-slate-900">Full-Stack Web Development</span>, and <span className="font-semibold text-slate-900">AI/ML Systems</span>. Building clean, intuitive, and performant web experiences.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a 
                    href="#projects" 
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-semibold hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-blue-500/25 active:scale-95"
                  >
                    Explore Projects <ArrowUpRight size={18} />
                  </a>
                  
                  <a 
                    href="#certifications" 
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-700 font-semibold border border-slate-200 hover:border-slate-300 hover:bg-slate-100/70 transition-all duration-200 shadow-xs active:scale-95"
                  >
                    View Credentials <Award size={18} className="text-blue-600" />
                  </a>

                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-50 text-blue-700 font-semibold hover:bg-blue-100 transition-all duration-200 active:scale-95"
                  >
                    Get In Touch <Mail size={18} />
                  </a>
                </div>

                {/* Key Metrics Strip */}
                <div className="pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">97.5%</p>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">Board Exam Score (Prathibha Puraskaram)</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">10+</p>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">Professional Certifications</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">3+</p>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">Full-Stack & AI Projects</p>
                  </div>
                </div>

              </div>

              {/* Hero Right Column — User Uploaded Image Card */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative group w-full max-w-sm">
                  
                  {/* Glowing background frame */}
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-500 to-teal-400 opacity-30 blur-xl group-hover:opacity-50 transition duration-500"></div>

                  {/* Profile Card */}
                  <div className="relative bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/90 shadow-xl space-y-4">
                    
                    {/* User Image Container */}
                    <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                      <img 
                        src={profileImg} 
                        alt="Mannepalli Sai Charan" 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = `${import.meta.env.BASE_URL}profile.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                      
                      {/* Floating Badge inside image */}
                      <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md p-2.5 rounded-xl border border-white/50 text-slate-900 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 bg-blue-100 text-blue-700 rounded-lg">
                            <GraduationCap size={16} />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900">B.Tech CSE Student</p>
                            <p className="text-[10px] text-slate-500">QIS College of Engineering</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-100 text-blue-700">
                          2026
                        </span>
                      </div>
                    </div>

                    {/* Social Buttons Row */}
                    <div className="flex items-center justify-between pt-1">
                      <a 
                        href="https://github.com/mscharan6303" 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-900 hover:text-white text-xs font-semibold transition-all duration-200 flex-1 justify-center mr-1.5"
                      >
                        <GithubIcon size={15} /> GitHub
                      </a>
                      
                      <a 
                        href="https://www.linkedin.com/in/sai-charan-mannepalli/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white text-xs font-semibold transition-all duration-200 flex-1 justify-center ml-1.5"
                      >
                        <LinkedinIcon size={15} /> LinkedIn
                      </a>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. About Me Section */}
        <section id="about" className="py-20 md:py-28 bg-white border-y border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Background & Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                About Me.
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                A dedicated software developer with a strong foundation in Java programming, full-stack web technologies, and practical AI/ML exposure.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Detailed Bio Column */}
              <div className="lg:col-span-7 space-y-6 text-slate-600 leading-relaxed text-base sm:text-lg">
                <p>
                  I am a Computer Science and Engineering student at <strong className="text-slate-900 font-semibold">QIS College of Engineering & Technology</strong>. Driven by a passion for solving real-world challenges through technology, I specialize in crafting robust web applications with modern frontend and backend frameworks.
                </p>
                <p>
                  During my <strong className="text-slate-900 font-semibold">AI-ML Virtual Internship</strong> supported by AICTE & Google, I gained hands-on experience in machine learning pipelines, intelligent automation, and data analytics. From direct agricultural platforms (<strong className="text-slate-900 font-semibold">Farm to Home</strong>) to smart railway travel software (<strong className="text-slate-900 font-semibold">Rail Swap</strong>) and web browser privacy tools, I enjoy building software that delivers tangible value.
                </p>
                <p>
                  Beyond coding, I serve as the elected <strong className="text-slate-900 font-semibold">Class Representative (CR)</strong> for my batch, bridging communication between students and faculty, facilitating event organization, and advocating for collaborative peer learning.
                </p>

                {/* Highlights List */}
                <div className="pt-4 grid sm:grid-cols-2 gap-3 text-sm">
                  {[
                    'Strong Proficiency in Java & OOPs',
                    'Full-Stack MERN / React Development',
                    'AI-ML Internship (Google / AICTE)',
                    'Class Representative Leadership',
                    'Microsoft Azure & AWS Knowledge',
                    '97.5% Intermediate Board Excellence'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-slate-800 font-medium">
                      <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Pillars Cards Column */}
              <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {[
                  {
                    title: 'Full-Stack Web Dev',
                    desc: 'Building responsive React frontend UIs coupled with RESTful Node.js / Express backends and MongoDB / MySQL databases.',
                    icon: Code2,
                    color: 'text-blue-600 bg-blue-50 border-blue-200'
                  },
                  {
                    title: 'AI & Machine Learning',
                    desc: 'Practical experience applying machine learning classification models for threat detection and data intelligence.',
                    icon: Cpu,
                    color: 'text-purple-600 bg-purple-50 border-purple-200'
                  },
                  {
                    title: 'Cloud & Infrastructure',
                    desc: 'Familiarity with Microsoft Azure fundamentals and AWS Solutions Architecture concepts for scalable cloud deployments.',
                    icon: Server,
                    color: 'text-teal-600 bg-teal-50 border-teal-200'
                  },
                  {
                    title: 'Leadership & Soft Skills',
                    desc: 'Proven leadership as Class Representative, strong problem-solving abilities, analytical mindset, and clear communication.',
                    icon: User,
                    color: 'text-amber-600 bg-amber-50 border-amber-200'
                  }
                ].map((pillar, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:bg-white hover:shadow-md transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className={`p-2.5 rounded-xl border ${pillar.color}`}>
                        <pillar.icon size={20} />
                      </div>
                      <h3 className="font-bold text-slate-900 text-base">{pillar.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* 4. Technical Skills Section */}
        <section id="skills" className="py-20 md:py-28 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Technical Skills & Tools
              </h2>
              <p className="text-slate-600 text-base">
                A comprehensive showcase of technologies, languages, frameworks, and databases I work with.
              </p>
            </div>

            {/* Filter and Search Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
              
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                {skillCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSkillCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                      skillCategory === cat.id 
                        ? 'bg-blue-600 text-white shadow-sm' 
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full sm:w-64">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search skill..."
                  value={skillSearch}
                  onChange={(e) => setSkillSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>

            </div>

            {/* Skills Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div 
                    key={index} 
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex items-start justify-between group"
                  >
                    <div className="space-y-1.5 flex-1 pr-3">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors">
                          {skill.name}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">{skill.desc}</p>
                    </div>

                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                      <div className="p-2 rounded-xl bg-slate-50 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                        <IconComponent size={18} />
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        skill.level === 'Proficient' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                        skill.level === 'Intermediate' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                        'bg-slate-100 text-slate-700 border-slate-200'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredSkills.length === 0 && (
              <div className="text-center py-12 text-slate-500">
                No matching skills found. Try resetting the search filter.
              </div>
            )}

          </div>
        </section>

        {/* 5. Projects Section */}
        <section id="projects" className="py-20 md:py-28 bg-white border-y border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Portfolio Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Featured Projects
              </h2>
              <p className="text-slate-600 text-base">
                Selected full-stack and AI-driven applications built with modern web technologies.
              </p>
            </div>

            {/* Project Category Filter */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
                {[
                  { id: 'all', label: 'All Projects' },
                  { id: 'fullstack', label: 'Full-Stack Web' },
                  { id: 'ai-security', label: 'AI & Security' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setProjectFilter(tab.id)}
                    className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                      projectFilter === tab.id 
                        ? 'bg-white text-slate-900 shadow-xs' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => {
                const ProjectIcon = project.icon;
                return (
                  <div 
                    key={project.id}
                    className="group bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden"
                  >
                    {/* Top Decorative Header Banner */}
                    <div className={`h-3 shadow-xs bg-gradient-to-r ${project.color}`}></div>

                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                      
                      <div className="space-y-4">
                        {/* Header Row */}
                        <div className="flex items-center justify-between">
                          <div className={`p-3 rounded-2xl bg-gradient-to-tr ${project.color} text-white shadow-md`}>
                            <ProjectIcon size={22} />
                          </div>
                          <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 uppercase tracking-wider">
                            {project.badge}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-xs font-semibold text-blue-600 mt-1">{project.subtitle}</p>
                        </div>

                        {/* Summary Description */}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Key Features Bullet List */}
                        <div className="space-y-1.5 pt-2 border-t border-slate-100">
                          {project.features.map((feat, fidx) => (
                            <div key={fidx} className="flex items-center gap-2 text-xs text-slate-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack Pills & Action Button */}
                      <div className="space-y-4 pt-4 border-t border-slate-100">
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <span 
                              key={tech} 
                              className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/80"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => setSelectedProjectModal(project)}
                          className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-blue-600 hover:text-white text-slate-800 text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 border border-slate-200/80 hover:border-blue-600"
                        >
                          View Full Overview <ChevronRight size={16} />
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Modal for Project Overview */}
        {selectedProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto">
              
              <button 
                onClick={() => setSelectedProjectModal(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-2xl bg-gradient-to-tr ${selectedProjectModal.color} text-white`}>
                  <selectedProjectModal.icon size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{selectedProjectModal.badge}</span>
                  <h3 className="text-2xl font-extrabold text-slate-900">{selectedProjectModal.title}</h3>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Detailed Architecture & Scope</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{selectedProjectModal.detailedDesc}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Functionalities</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {selectedProjectModal.features.map((f, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs font-medium text-slate-800 flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-blue-600 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProjectModal.technologies.map(t => (
                      <span key={t} className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded-lg border border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedProjectModal(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-colors"
                >
                  Close
                </button>
                <a
                  href="https://github.com/mscharan6303"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <GithubIcon size={15} /> View GitHub Repo
                </a>
              </div>

            </div>
          </div>
        )}

        {/* 6. Certifications Section */}
        <section id="certifications" className="py-20 md:py-28 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Verified Credentials
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Certifications & Achievements
              </h2>
              <p className="text-slate-600 text-base">
                Industry-recognized credentials from NPTEL, freeCodeCamp, EduSkills Google Internship, AWS, and Deloitte.
              </p>
            </div>

            {/* Certifications Search Bar */}
            <div className="max-w-md mx-auto mb-10">
              <div className="relative">
                <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter by certificate name or issuer (e.g., NPTEL, AWS, Java)..."
                  value={certSearch}
                  onChange={(e) => setCertSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-xs"
                />
              </div>
            </div>

            {/* Certifications Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {filteredCerts.map((cert) => {
                const pdfUrl = `${import.meta.env.BASE_URL}certificates/${encodeURIComponent(cert.fileName)}`;
                return (
                  <div 
                    key={cert.id}
                    className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex-shrink-0">
                            <Award size={22} />
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
                              {cert.title}
                            </h3>
                            <p className="text-xs font-semibold text-blue-600 mt-0.5">{cert.issuer}</p>
                          </div>
                        </div>

                        <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border flex-shrink-0 ${cert.badgeColor}`}>
                          {cert.year}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                        <FileText size={14} /> PDF Document
                      </span>

                      <a 
                        href={pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 text-xs font-bold transition-all duration-200"
                      >
                        View Credential <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredCerts.length === 0 && (
              <div className="text-center py-12 text-slate-500">
                No matching certificates found for "{certSearch}".
              </div>
            )}

          </div>
        </section>

        {/* 7. Leadership & Honors Section */}
        <section id="leadership" className="py-20 md:py-28 bg-white border-y border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Honors & Roles
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Leadership & Recognition
              </h2>
              <p className="text-slate-600 text-base">
                Responsibility, academic excellence awards, and competitive achievements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-6 sm:p-7 rounded-3xl bg-slate-50/70 border border-slate-200/90 hover:bg-white hover:shadow-lg transition-all duration-300 space-y-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-2xl border ${item.accent}`}>
                          <ItemIcon size={22} />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-lg leading-tight">{item.role}</h3>
                          <p className="text-xs font-semibold text-slate-500 mt-0.5">{item.organization}</p>
                        </div>
                      </div>

                      <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-white text-slate-700 border border-slate-200 shadow-2xs whitespace-nowrap">
                        {item.type}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-xs font-medium text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                      <span>{item.period}</span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 8. Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
          {/* Glowing accent circles */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Contact Information Column */}
              <div className="lg:col-span-5 space-y-8">
                
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950 px-3 py-1 rounded-full border border-blue-800">
                    Get In Touch
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                    Let's Build Something Great Together.
                  </h2>
                  <p className="text-slate-400 text-base leading-relaxed">
                    I am actively seeking software engineering roles, full-stack developer opportunities, and innovative collaborative projects. Feel free to send a message!
                  </p>
                </div>

                {/* Direct Contact Cards */}
                <div className="space-y-4">
                  
                  {/* Email Card with Copy Button */}
                  <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Email Address</p>
                        <a href="mailto:mscharan2807@gmail.com" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                          mscharan2807@gmail.com
                        </a>
                      </div>
                    </div>

                    <button 
                      onClick={copyEmailToClipboard}
                      className="p-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors flex items-center gap-1.5 text-xs font-medium"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                      <span className="hidden sm:inline">{copiedEmail ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  {/* Location Card */}
                  <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Location</p>
                      <p className="text-sm font-semibold text-white">Andhra Pradesh, India</p>
                    </div>
                  </div>

                </div>

                {/* Direct Gmail & Social Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=mscharan2807@gmail.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold text-xs hover:bg-slate-100 transition-colors flex items-center gap-2"
                  >
                    <Mail size={16} /> Open in Gmail
                  </a>
                  
                  <a 
                    href="https://github.com/mscharan6303" 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon size={18} />
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/sai-charan-mannepalli/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                </div>

              </div>

              {/* Interactive Contact Form Column */}
              <div className="lg:col-span-7 bg-slate-800/60 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-700/80 shadow-2xl">
                
                <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>

                {formSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-center space-y-2">
                    <CheckCircle2 size={32} className="mx-auto text-emerald-400" />
                    <p className="font-bold text-base">Thank you for reaching out!</p>
                    <p className="text-xs text-emerald-200">Your email client has been launched with your message. I will respond to your email promptly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-300">Your Name</label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-300">Your Email</label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Subject</label>
                      <input
                        type="text"
                        placeholder="Opportunity / Collaboration"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Message</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all duration-200 shadow-md hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                    >
                      <Send size={16} /> Send Message
                    </button>
                  </form>
                )}

              </div>

            </div>

          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <footer className="bg-slate-950 py-10 text-slate-400 text-xs border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-extrabold text-sm">
              MC
            </div>
            <div>
              <p className="font-bold text-slate-200">Mannepalli Sai Charan</p>
              <p className="text-[11px] text-slate-500">Computer Science Engineering Portfolio</p>
            </div>
          </div>

          <p>© {new Date().getFullYear()} Mannepalli Sai Charan. All rights reserved.</p>

          <a 
            href="#home" 
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors flex items-center gap-1.5 text-xs font-semibold"
          >
            Back to top <ArrowUp size={14} />
          </a>

        </div>
      </footer>

    </div>
  );
};

export default App;
