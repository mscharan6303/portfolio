import React, { useState, useEffect } from 'react';
import { 
  GitBranch, 
  Mail, 
  ExternalLink,
  ChevronRight,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Terminal,
  CheckCircle2,
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
  Star,
  Send,
  Sparkles,
  Download
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

      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'leadership', 'contact'];
      const scrollPosition = window.scrollY + 180;

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
      description: 'A full-stack web application connecting local farmers directly with urban consumers to eliminate intermediary costs. Enables real-time crop listings, transparent pricing, shopping cart functionality, and order management.',
      detailedDesc: 'Farm to Home addresses inefficiencies in agricultural distribution. Farmers list harvest yields with live stock status and direct pricing. Consumers browse fresh produce, manage shopping carts, and place direct orders. Built with REST APIs and a responsive interface designed for both mobile and desktop users.',
      technologies: ['ReactJS', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'REST API'],
      features: [
        'Direct farmer-to-consumer product listings',
        'Shopping cart & checkout workflow',
        'Role-based dashboard for sellers & buyers',
        'Real-time inventory and pricing management'
      ],
      icon: Sprout,
      badge: 'Full-Stack Web'
    },
    {
      id: 'rail-swap',
      title: 'Rail Swap',
      category: 'fullstack',
      subtitle: 'Smart Railway Seat Exchange & Coordination System',
      description: 'An interactive travel platform allowing train passengers to swap seats easily. Includes automated ticket parsing (PDF/QR), preference matching algorithms, and direct passenger communication.',
      detailedDesc: 'Rail Swap improves passenger travel comfort by creating a structured marketplace for seat exchanges. Passengers submit ticket information, indicate seat preferences (such as lower berth or bay preferences), and receive matched recommendations for exchange with fellow passengers on the same route.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'Supabase', 'Tailwind CSS'],
      features: [
        'Automated seat swap matching logic',
        'PDF & QR code ticket data parsing',
        'Direct passenger communication channel',
        'Preference filters (Berth type, Bay, Coach)'
      ],
      icon: Train,
      badge: 'Smart Systems'
    },
    {
      id: 'ai-privacy',
      title: 'AI Privacy Intelligence System',
      category: 'ai-security',
      subtitle: 'Real-Time Browser Threat Detector & Security Extension',
      description: 'A security tool and browser extension that analyzes web URLs in real time to detect malicious links and phishing threats using Machine Learning algorithms.',
      detailedDesc: 'Developed to address web security threats, this system evaluates active page URLs using machine learning classification models. It analyzes lexical properties, domain age indicators, SSL configuration signals, and heuristics to warn users prior to entering sensitive credentials.',
      technologies: ['JavaScript', 'Python', 'Machine Learning', 'WebExtension API', 'REST API', 'Scikit-Learn'],
      features: [
        'Real-time browser URL inspection',
        'Machine learning classification for phishing detection',
        'Immediate notification warnings for untrusted links',
        'Security metrics dashboard for browsing safety'
      ],
      icon: ShieldCheck,
      badge: 'AI & Web Security'
    }
  ];

  // Skills Data
  const skillCategories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Programming Languages' },
    { id: 'web', label: 'Web & API Technologies' },
    { id: 'cloud-db', label: 'Databases & Cloud' },
    { id: 'tools', label: 'Tools & Frameworks' },
    { id: 'core-cs', label: 'Core CS Concepts' }
  ];

  const skills = [
    { name: 'Java', category: 'languages', level: 'Proficient', icon: Code2, desc: 'Core Java, OOP principles, Data Structures & Algorithms' },
    { name: 'Python', category: 'languages', level: 'Proficient', icon: Terminal, desc: 'Data analysis, ML fundamentals, automation scripts' },
    { name: 'JavaScript', category: 'languages', level: 'Intermediate', icon: Code2, desc: 'Async/Await, DOM manipulation, ES6+ features' },
    { name: 'HTML5', category: 'web', level: 'Proficient', icon: Globe, desc: 'Semantic markup, accessibility, modern web standards' },
    { name: 'CSS3', category: 'web', level: 'Proficient', icon: Globe, desc: 'Flexbox, Grid, animations, responsive design' },
    { name: 'REST APIs', category: 'web', level: 'Intermediate', icon: Zap, desc: 'RESTful service design, API integration & endpoint testing' },
    { name: 'MySQL', category: 'cloud-db', level: 'Intermediate', icon: Database, desc: 'Relational schemas, SQL queries, table joins' },
    { name: 'MongoDB', category: 'cloud-db', level: 'Intermediate', icon: Database, desc: 'Document schemas, Mongoose ORM, database queries' },
    { name: 'SQL', category: 'cloud-db', level: 'Intermediate', icon: Database, desc: 'Structured query language for relational database management' },
    { name: 'Vercel', category: 'cloud-db', level: 'Intermediate', icon: Globe, desc: 'Frontend cloud deployment, CI/CD pipelines & serverless functions' },
    { name: 'Git', category: 'tools', level: 'Proficient', icon: GitBranch, desc: 'Version control, branching strategies & commit workflows' },
    { name: 'GitHub', category: 'tools', level: 'Proficient', icon: GitBranch, desc: 'Remote repositories, pull requests & code reviews' },
    { name: 'VS Code', category: 'tools', level: 'Proficient', icon: Terminal, desc: 'Primary IDE, extension configuration & debugging workflows' },
    { name: 'Data Structures & Algorithms', category: 'core-cs', level: 'Proficient', icon: Code2, desc: 'Arrays, linked lists, trees, graphs, sorting & searching algorithms' },
    { name: 'Object-Oriented Programming (OOP)', category: 'core-cs', level: 'Proficient', icon: Layers, desc: 'Encapsulation, inheritance, polymorphism & abstraction principles' },
    { name: 'DBMS', category: 'core-cs', level: 'Intermediate', icon: Database, desc: 'Database design, normalization, transactions & query optimization' },
    { name: 'Computer Networks (CN)', category: 'core-cs', level: 'Intermediate', icon: Server, desc: 'TCP/IP, OSI model, HTTP protocols & network fundamentals' }
  ];

  // Certifications Data
  const certifications = [
    {
      id: 1,
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      year: '2024',
      fileName: 'RESPONSIVE WEB DESIGN FREE CODE CAMP CERTIFICATION.pdf',
      description: 'HTML5, CSS3, Flexbox, CSS Grid, and media queries for building responsive user interfaces.'
    },
    {
      id: 2,
      title: 'Programming in Java',
      issuer: 'NPTEL (IIT)',
      year: '2024',
      fileName: 'Java certificate.pdf',
      description: 'Comprehensive study of Java object-oriented principles, multithreading, and standard libraries.'
    },
    {
      id: 3,
      title: 'Data Analytics with Python',
      issuer: 'NPTEL (IIT)',
      year: '2024',
      fileName: 'Data Analytics With Python.pdf',
      description: 'Data processing, statistical analysis, Pandas, NumPy, and data visualization in Python.'
    },
    {
      id: 4,
      title: 'The Joy of Computing using Python',
      issuer: 'NPTEL (IIT)',
      year: '2023',
      fileName: 'The Joy of Computing using Python certificate.pdf',
      description: 'Algorithmic thinking, problem-solving techniques, and computational logic with Python.'
    },
    {
      id: 5,
      title: 'AI-ML Virtual Internship',
      issuer: 'EduSkills / AICTE / Google',
      year: '2024',
      fileName: 'MANNEPALLI SAI CHARAN   LONG CERTIFICATE 851054.pdf',
      description: 'National internship supported by Google and AICTE focusing on machine learning principles and practical applications.'
    },

    {
      id: 8,
      title: 'Java Training Certification',
      issuer: 'CodeTantra',
      year: '2023',
      fileName: 'CODE TANTRA Java Certifcate.pdf',
      description: 'Practical Java coursework covering object-oriented structures and algorithmic problem solving.'
    },
    {
      id: 9,
      title: 'Java Masterclass Course',
      issuer: 'Udemy',
      year: '2023',
      fileName: 'UDEMY JAVA certificate.pdf',
      description: 'In-depth Java development training covering core language syntax, object models, and standard development tools.'
    },
    {
      id: 10,
      title: 'Quantum Fundamentals Program',
      issuer: 'APSCHE / WISER',
      year: '2024',
      fileName: 'APGOVQUANTUMCOMPUTINGCERTIFICATE.pdf',
      description: 'State government initiative introducing quantum computing principles, qubits, and quantum circuit logic.'
    }
  ];

  // Leadership & Achievements Data
  const achievements = [
    {
      role: 'Class Representative (CR)',
      organization: 'QIS College of Engineering & Technology',
      period: 'B.Tech CSE Batch',
      type: 'Leadership',
      desc: 'Elected as the official student liaison representing 60+ Computer Science students. Coordinated academic activities with faculty, facilitated peer study sessions, and organized technical events.',
      icon: GraduationCap
    },
    {
      role: 'Master Minds Prathibha Puraskaram',
      organization: 'Master Minds Educational Institution',
      period: 'Intermediate Board Exams',
      type: 'Academic Award',
      desc: 'Awarded academic honor for securing 975/1000 (97.5%) in the Intermediate Board Examinations, recognizing academic excellence and commitment.',
      icon: Award
    },
    {
      role: 'WIZ National Spell Bee — State Qualifier',
      organization: 'WIZ National Spell Bee',
      period: 'State Competition',
      type: 'State Recognition',
      desc: 'Earned Certificate of Merit for performance in linguistics and vocabulary, qualifying to represent at the State Level Competition.',
      icon: Star
    },
    {
      role: '1st Prize — Science Expo',
      organization: 'Sri Chaitanya Educational Institutions',
      period: 'Science & Technology Fair',
      type: 'Innovation Award',
      desc: 'Secured 1st place for presenting an applied science model demonstrating technology-driven problem solving.',
      icon: Sparkles
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
    <div className="min-h-screen bg-zinc-50/60 text-zinc-900 font-sans selection:bg-zinc-200 selection:text-zinc-900">
      
      {/* Navigation Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-xs py-3.5' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center text-white font-bold text-sm tracking-tight transition-transform group-hover:scale-105">
              SC
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-zinc-900 tracking-tight group-hover:text-blue-600 transition-colors">
                Sai Charan
              </span>
              <span className="text-[11px] text-zinc-500 font-medium">
                CS Engineer
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-100/90 p-1 rounded-lg border border-zinc-200/80 text-xs font-semibold text-zinc-600">
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
                className={`px-3.5 py-1.5 rounded-md transition-all duration-150 ${
                  activeSection === item.id 
                    ? 'bg-white text-zinc-900 shadow-xs font-bold' 
                    : 'hover:text-zinc-900 hover:bg-zinc-200/50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Action */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="#contact" 
              className="px-4 py-2 rounded-lg bg-zinc-900 text-white text-xs font-bold hover:bg-zinc-800 transition-colors shadow-xs active:scale-95"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-zinc-200 px-6 py-5 space-y-2 shadow-lg">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Technical Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'certifications', label: 'Certifications' },
              { id: 'leadership', label: 'Leadership & Recognition' },
              { id: 'contact', label: 'Contact' }
            ].map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-zinc-700 hover:text-zinc-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-zinc-100">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-2.5 rounded-lg bg-zinc-900 text-white font-bold text-xs"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-grid-subtle relative border-b border-zinc-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Hero Left Content */}
              <div className="lg:col-span-7 space-y-6 text-left">
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-100 border border-zinc-200 text-xs font-bold text-zinc-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>B.Tech CSE Student • Class of 2026</span>
                </div>

                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[1.12]">
                    Mannepalli Sai Charan
                  </h1>
                  <p className="text-xl sm:text-2xl font-bold text-blue-700">
                    Computer Science Engineer & Full-Stack Developer
                  </p>
                </div>

                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal max-w-2xl">
                  Computer Science Engineering student specializing in Java development, modern full-stack web applications, and practical AI/ML solutions. Dedicated to building reliable, scalable software with intuitive user experiences.
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a 
                    href="#projects" 
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-zinc-900 text-white text-xs font-bold hover:bg-zinc-800 transition-colors shadow-xs"
                  >
                    View Projects <ChevronRight size={16} />
                  </a>
                  
                  <a 
                    href="#certifications" 
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-zinc-800 text-xs font-bold border border-zinc-200 hover:bg-zinc-100 transition-colors shadow-2xs"
                  >
                    Certifications <Award size={16} className="text-zinc-600" />
                  </a>

                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-zinc-100 text-zinc-800 text-xs font-bold hover:bg-zinc-200 transition-colors"
                  >
                    Contact Me <Mail size={16} />
                  </a>

                  <a
                    href={`${import.meta.env.BASE_URL}resume.pdf`}
                    download="Mannepalli Sai Charan Resume.pdf"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors shadow-xs"
                  >
                    Download Resume <Download size={16} />
                  </a>
                </div>

                {/* Key Metrics Strip */}
                <div className="pt-8 border-t border-zinc-200/90 grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-zinc-900">97.5%</p>
                    <p className="text-xs text-zinc-500 font-medium mt-0.5">Board Exam Score (Prathibha Puraskaram)</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-zinc-900">10+</p>
                    <p className="text-xs text-zinc-500 font-medium mt-0.5">Verified Certifications</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-zinc-900">3+</p>
                    <p className="text-xs text-zinc-500 font-medium mt-0.5">Featured Engineering Projects</p>
                  </div>
                </div>

              </div>

              {/* Hero Right Column — Profile Card */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-sm">
                  
                  <div className="bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm space-y-4">
                    
                    {/* User Image Container */}
                    <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200">
                      <img 
                        src={profileImg} 
                        alt="Mannepalli Sai Charan" 
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          e.target.src = `${import.meta.env.BASE_URL}profile.jpg`;
                        }}
                      />
                      
                      {/* Sub-badge overlay */}
                      <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs p-2.5 rounded-lg border border-zinc-200 text-zinc-900 flex items-center justify-between shadow-xs">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 bg-zinc-100 text-zinc-700 rounded-md">
                            <GraduationCap size={16} />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-zinc-900">QIS College of Engg.</p>
                            <p className="text-[11px] text-zinc-500">Computer Science & Engg.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Social Action Row */}
                    <div className="flex items-center justify-between pt-1 gap-2">
                      <a 
                        href="https://github.com/mscharan6303" 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-100 text-zinc-800 hover:bg-zinc-900 hover:text-white text-xs font-bold transition-colors flex-1 justify-center"
                      >
                        <GithubIcon size={15} /> GitHub
                      </a>
                      
                      <a 
                        href="https://www.linkedin.com/in/sai-charan-mannepalli/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-700 hover:text-white text-xs font-bold transition-colors flex-1 justify-center"
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

        {/* About Me Section */}
        <section id="about" className="py-20 md:py-24 bg-white border-b border-zinc-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            <div className="mb-14 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Background & Education
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                About Me
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 items-start">
              
              {/* Detailed Biography */}
              <div className="lg:col-span-7 space-y-5 text-zinc-600 leading-relaxed text-base">
                <p>
                  I am a Computer Science and Engineering student at <strong className="text-zinc-900 font-semibold">QIS College of Engineering & Technology</strong>. Focused on software development and web architectures, I combine foundational programming principles with modern developer tooling.
                </p>
                <p>
                  Through an <strong className="text-zinc-900 font-semibold">AI-ML Virtual Internship</strong> supported by Google & AICTE, I acquired practical exposure to machine learning workflows, data preprocessing, and automated threat detection models. My project portfolio includes direct agricultural marketplaces (<strong className="text-zinc-900 font-semibold">Farm to Home</strong>), intelligent train seat exchange networks (<strong className="text-zinc-900 font-semibold">Rail Swap</strong>), and active browser privacy extensions.
                </p>
                <p>
                  Alongside academic studies, I serve as the elected <strong className="text-zinc-900 font-semibold">Class Representative (CR)</strong> for my Computer Science batch, serving as a liaison between students and department leadership, organizing student workshops, and fostering academic collaboration.
                </p>

                {/* Core Strengths Grid */}
                <div className="pt-4 grid sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                  {[
                    'Core Java & Object-Oriented Design',
                    'Full-Stack Web Development (React / Node)',
                    'AI-ML Internship (Google & AICTE)',
                    'Class Representative Leadership',
                    'Cloud Fundamentals (Azure & AWS)',
                    '97.5% Intermediate Board Excellence'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-zinc-800 font-semibold bg-zinc-50 p-2.5 rounded-lg border border-zinc-200/70">
                      <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Domains Cards */}
              <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                {[
                  {
                    title: 'Full-Stack Web Development',
                    desc: 'Building responsive React interfaces paired with Node.js/Express REST APIs and MongoDB or MySQL databases.',
                    icon: Code2
                  },
                  {
                    title: 'Software Engineering & Java',
                    desc: 'Strong grounding in object-oriented programming, data structures, algorithms, and modular design.',
                    icon: Terminal
                  },
                  {
                    title: 'AI & Data Science',
                    desc: 'Applying machine learning classifiers, feature extraction logic, and Python data analysis tools.',
                    icon: Cpu
                  },
                  {
                    title: 'Cloud & Leadership',
                    desc: 'Familiar with Azure App Services and AWS infrastructure concepts, alongside proven leadership experience as Class Representative.',
                    icon: User
                  }
                ].map((pillar, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-zinc-900 text-white">
                        <pillar.icon size={18} />
                      </div>
                      <h3 className="font-bold text-zinc-900 text-sm">{pillar.title}</h3>
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="py-20 md:py-24 bg-zinc-50/70 border-b border-zinc-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            <div className="mb-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Technical Stack
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                Skills & Technologies
              </h2>
            </div>

            {/* Filter and Search Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
                {skillCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSkillCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      skillCategory === cat.id 
                        ? 'bg-zinc-900 text-white shadow-2xs' 
                        : 'bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full sm:w-64">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search technology..."
                  value={skillSearch}
                  onChange={(e) => setSkillSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-white border border-zinc-200 text-xs font-medium text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all"
                />
              </div>

            </div>

            {/* Skills Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {filteredSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div 
                    key={index} 
                    className="p-4 rounded-xl bg-white border border-zinc-200 shadow-2xs hover:border-zinc-300 transition-all flex items-start justify-between group"
                  >
                    <div className="space-y-1 flex-1 pr-3">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-zinc-900 text-sm group-hover:text-blue-700 transition-colors">
                          {skill.name}
                        </h3>
                      </div>
                      <p className="text-xs text-zinc-500 leading-normal">{skill.desc}</p>
                    </div>

                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                      <div className="p-1.5 rounded-lg bg-zinc-100 text-zinc-700">
                        <IconComponent size={16} />
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                        skill.level === 'Proficient' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                        skill.level === 'Intermediate' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                        'bg-zinc-100 text-zinc-700 border-zinc-200'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredSkills.length === 0 && (
              <div className="text-center py-12 text-zinc-500 text-xs">
                No matching technologies found.
              </div>
            )}

          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-20 md:py-24 bg-white border-b border-zinc-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            <div className="mb-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Software Engineering
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                Featured Projects
              </h2>
            </div>

            {/* Category Filter */}
            <div className="flex mb-8">
              <div className="inline-flex items-center gap-1 p-1 bg-zinc-100 rounded-lg border border-zinc-200/80 text-xs font-bold">
                {[
                  { id: 'all', label: 'All Projects' },
                  { id: 'fullstack', label: 'Full-Stack Web' },
                  { id: 'ai-security', label: 'AI & Security' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setProjectFilter(tab.id)}
                    className={`px-4 py-1.5 rounded-md transition-all ${
                      projectFilter === tab.id 
                        ? 'bg-white text-zinc-900 shadow-2xs' 
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => {
                const ProjectIcon = project.icon;
                return (
                  <div 
                    key={project.id}
                    className="bg-white rounded-2xl border border-zinc-200 shadow-2xs hover:border-zinc-300 transition-all flex flex-col justify-between overflow-hidden group"
                  >
                    <div className="p-6 space-y-5">
                      
                      <div className="flex items-center justify-between">
                        <div className="p-2.5 rounded-xl bg-zinc-900 text-white">
                          <ProjectIcon size={20} />
                        </div>
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-700 border border-zinc-200 uppercase tracking-wider">
                          {project.badge}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-zinc-900 group-hover:text-blue-700 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs font-semibold text-blue-700 mt-0.5">{project.subtitle}</p>
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="space-y-1.5 pt-3 border-t border-zinc-100">
                        {project.features.map((feat, fidx) => (
                          <div key={fidx} className="flex items-center gap-2 text-xs text-zinc-700 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-900"></span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                    </div>

                    <div className="p-6 pt-0 space-y-4">
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-100">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="text-[11px] font-semibold text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded-md border border-zinc-200/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setSelectedProjectModal(project)}
                        className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-2xs"
                      >
                        Project Details <ChevronRight size={15} />
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Modal for Detailed Project Overview */}
        {selectedProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/50 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-7 border border-zinc-200 shadow-xl space-y-5 relative max-h-[90vh] overflow-y-auto">
              
              <button 
                onClick={() => setSelectedProjectModal(null)}
                className="absolute top-5 right-5 p-1.5 rounded-lg bg-zinc-100 text-zinc-600 hover:bg-zinc-200 transition-colors"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-zinc-900 text-white">
                  <selectedProjectModal.icon size={22} />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">{selectedProjectModal.badge}</span>
                  <h3 className="text-xl font-extrabold text-zinc-900">{selectedProjectModal.title}</h3>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Architecture Overview</h4>
                  <p className="text-zinc-600 leading-relaxed">{selectedProjectModal.detailedDesc}</p>
                </div>

                <div>
                  <h4 className="font-bold text-zinc-900 mb-2">Core Features</h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {selectedProjectModal.features.map((f, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-800 flex items-center gap-2">
                        <CheckCircle2 size={15} className="text-blue-700 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-zinc-900 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProjectModal.technologies.map(t => (
                      <span key={t} className="px-2.5 py-1 bg-zinc-100 text-zinc-800 text-xs font-bold rounded-md border border-zinc-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedProjectModal(null)}
                  className="px-4 py-2 rounded-lg bg-zinc-100 text-zinc-700 text-xs font-bold hover:bg-zinc-200 transition-colors"
                >
                  Close
                </button>
                <a
                  href="https://github.com/mscharan6303"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-zinc-900 text-white text-xs font-bold hover:bg-zinc-800 transition-colors flex items-center gap-2"
                >
                  <GithubIcon size={14} /> GitHub Repository
                </a>
              </div>

            </div>
          </div>
        )}

        {/* Certifications Section */}
        <section id="certifications" className="py-20 md:py-24 bg-zinc-50/70 border-b border-zinc-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            <div className="mb-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Credentials
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                Certifications & Courses
              </h2>
            </div>

            {/* Certifications Filter */}
            <div className="max-w-sm mb-8">
              <div className="relative">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Filter certifications (e.g. NPTEL, AWS, Java)..."
                  value={certSearch}
                  onChange={(e) => setCertSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-lg bg-white border border-zinc-200 text-xs font-medium text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all"
                />
              </div>
            </div>

            {/* Certifications Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {filteredCerts.map((cert) => {
                const pdfUrl = `${import.meta.env.BASE_URL}certificates/${encodeURIComponent(cert.fileName)}`;
                return (
                  <div 
                    key={cert.id}
                    className="p-5 rounded-xl bg-white border border-zinc-200 shadow-2xs hover:border-zinc-300 transition-all flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-bold text-zinc-900 text-sm sm:text-base leading-snug">
                            {cert.title}
                          </h3>
                          <p className="text-xs font-semibold text-blue-700 mt-0.5">{cert.issuer}</p>
                        </div>

                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-700 border border-zinc-200 flex-shrink-0">
                          {cert.year}
                        </span>
                      </div>

                      <p className="text-xs text-zinc-600 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
                      <span className="text-[11px] font-medium text-zinc-400 flex items-center gap-1">
                        <FileText size={13} /> PDF Document
                      </span>

                      <a 
                        href={pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-900 hover:text-white text-zinc-800 text-xs font-bold transition-colors"
                      >
                        View Certificate <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredCerts.length === 0 && (
              <div className="text-center py-12 text-zinc-500 text-xs">
                No certificates found for "{certSearch}".
              </div>
            )}

          </div>
        </section>

        {/* Leadership & Honors Section */}
        <section id="leadership" className="py-20 md:py-24 bg-white border-b border-zinc-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            <div className="mb-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                Responsibility & Honors
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                Leadership & Recognition
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-5 sm:p-6 rounded-xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-all space-y-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-zinc-900 text-white">
                          <ItemIcon size={20} />
                        </div>
                        <div>
                          <h3 className="font-bold text-zinc-900 text-base">{item.role}</h3>
                          <p className="text-xs font-semibold text-zinc-500 mt-0.5">{item.organization}</p>
                        </div>
                      </div>

                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-white text-zinc-700 border border-zinc-200 whitespace-nowrap">
                        {item.type}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="pt-1 flex items-center gap-2 text-xs font-medium text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                      <span>{item.period}</span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-24 bg-zinc-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              
              {/* Contact Information */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    Get In Touch
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                    Contact & Connect
                  </h2>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    I am actively seeking entry-level software engineering, full-stack development, and Java roles. Feel free to reach out directly via email or phone.
                  </p>
                </div>

                {/* Direct Contact Cards */}
                <div className="space-y-3">
                  
                  {/* Email Card with Copy Action */}
                  <div className="p-4 rounded-xl bg-zinc-800 border border-zinc-700/80 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-zinc-700 text-blue-400">
                        <Mail size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Email</p>
                        <a href="mailto:mscharan2807@gmail.com" className="text-xs sm:text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                          mscharan2807@gmail.com
                        </a>
                      </div>
                    </div>

                    <button 
                      onClick={copyEmailToClipboard}
                      className="p-2 rounded-lg bg-zinc-700 hover:bg-zinc-600 text-zinc-300 transition-colors flex items-center gap-1.5 text-xs font-bold"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      <span className="hidden sm:inline">{copiedEmail ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  {/* Location Card */}
                  <div className="p-4 rounded-xl bg-zinc-800 border border-zinc-700/80 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-zinc-700 text-emerald-400">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">Location</p>
                      <p className="text-xs sm:text-sm font-semibold text-white">Andhra Pradesh, India</p>
                    </div>
                  </div>

                </div>

                {/* Quick Social Links */}
                <div className="flex items-center gap-2 pt-1">
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=mscharan2807@gmail.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-4 py-2.5 rounded-lg bg-white text-zinc-900 font-bold text-xs hover:bg-zinc-100 transition-colors flex items-center gap-2"
                  >
                    <Mail size={14} /> Open in Gmail
                  </a>
                  
                  <a 
                    href="https://github.com/mscharan6303" 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors border border-zinc-700"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon size={16} />
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/sai-charan-mannepalli/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors border border-zinc-700"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon size={16} />
                  </a>
                </div>

              </div>

              {/* Contact Form */}
              <div className="lg:col-span-7 bg-zinc-800/80 p-6 sm:p-7 rounded-2xl border border-zinc-700">
                
                <h3 className="text-base font-bold text-white mb-4">Send Message</h3>

                {formSubmitted ? (
                  <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center space-y-1.5">
                    <CheckCircle2 size={24} className="mx-auto text-emerald-400" />
                    <p className="font-bold text-sm">Message Client Opened!</p>
                    <p className="text-xs text-emerald-200">Your default email client has been launched with your message details. I will respond to your email shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3.5">
                    <div className="grid sm:grid-cols-2 gap-3.5">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-zinc-300">Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-zinc-300">Email</label>
                        <input
                          type="email"
                          required
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-zinc-300">Subject</label>
                      <input
                        type="text"
                        placeholder="Subject / Opportunity"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-zinc-300">Message</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Your message details..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-xs text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors shadow-xs flex items-center justify-center gap-2"
                    >
                      <Send size={15} /> Send Message
                    </button>
                  </form>
                )}

              </div>

            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 py-8 text-zinc-400 text-xs border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-zinc-800 flex items-center justify-center text-white font-bold text-xs">
              SC
            </div>
            <div>
              <p className="font-bold text-zinc-200 text-xs">Mannepalli Sai Charan</p>
              <p className="text-[11px] text-zinc-500">Computer Science Engineering Portfolio</p>
            </div>
          </div>

          <p className="text-[11px] text-zinc-500">© {new Date().getFullYear()} Mannepalli Sai Charan. All rights reserved.</p>

          <a 
            href="#home" 
            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors flex items-center gap-1 text-[11px] font-semibold"
          >
            Back to top <ArrowUp size={13} />
          </a>

        </div>
      </footer>

    </div>
  );
};

export default App;
