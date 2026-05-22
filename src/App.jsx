import React, { useState, useEffect } from 'react';
import { 
  GitBranch, 
  UserPlus, 
  Mail, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${isScrolled ? 'bg-white/95 backdrop-blur-sm border-slate-200 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-xl font-extrabold tracking-tighter text-slate-900">
            MSC.
          </a>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#skills" className="hover:text-slate-900 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
            <a href="#certifications" className="hover:text-slate-900 transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        {/* 1. Home Section */}
        <section id="home" className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col justify-center min-h-screen">
          <div className="max-w-5xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            
            <div className="flex-1 md:pr-8">
              <p className="text-slate-500 font-semibold tracking-widest uppercase text-sm mb-6">Portfolio</p>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                Mannepalli<br />Sai Charan.
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-xl font-light leading-relaxed">
                Computer Science Engineering student specializing in <span className="font-semibold text-slate-800">web development</span> and <span className="font-semibold text-slate-800">software engineering</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#projects" className="btn-primary">
                  View My Work
                </a>
                <a href="#contact" className="btn-outline">
                  Get In Touch
                </a>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-slate-100 shadow-lg bg-slate-100">
                <img 
                  src="/profile.jpg" 
                  alt="Mannepalli Sai Charan" 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Sai+Charan&background=f1f5f9&color=0f172a&size=512' }}
                />
              </div>
            </div>

          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-slate-400 hover:text-slate-900 transition-colors">
              <ChevronDown size={24} />
            </a>
          </div>
        </section>

        {/* 2. About Me */}
        <section id="about" className="section-container border-t border-slate-100">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="heading-primary">About Me.</h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                I am a passionate software developer constantly seeking to improve my technical skills through self-learning and hands-on projects. I enjoy diving deep into web technologies and practical problem-solving.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                My approach focuses on building clean, efficient, and user-centric applications. Whether exploring AI-assisted development tools or writing core backend logic, I aim to create software that is genuinely useful and intuitively simple.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Skills Section */}
        <section id="skills" className="bg-slate-50 border-y border-slate-100">
          <div className="section-container">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="heading-primary">Skills.</h2>
              </div>
              <div className="md:col-span-8">
                
                <div className="mb-10">
                  <h3 className="text-lg font-bold text-slate-800 mb-4 uppercase tracking-wide text-sm">Development & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {['HTML', 'CSS', 'JavaScript', 'Java', 'Node.js', 'MongoDB', 'SQL', 'React', 'Tailwind CSS'].map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-4 uppercase tracking-wide text-sm">Tools & Workflows</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'GitHub', 'VS Code', 'Postman'].map((tool) => (
                      <span key={tool} className="chip">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 4. Projects Section */}
        <section id="projects" className="section-container">
          <div className="mb-16">
            <h2 className="heading-primary">Selected Projects.</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group border border-slate-200 p-8 rounded-xl hover:shadow-lg transition-all duration-300 bg-white">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Farm to Home</h3>
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">
                An online platform designed to bridge the gap between farmers and consumers, allowing for direct delivery of organic products without middlemen.
              </p>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'Node.js'].map(tech => (
                  <span key={tech} className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 2 */}
            <div className="group border border-slate-200 p-8 rounded-xl hover:shadow-lg transition-all duration-300 bg-white">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Finance Tracker</h3>
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">
                A comprehensive application for tracking daily expenses, setting savings goals, and managing personal budgets to maintain financial health.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Tailwind', 'MongoDB'].map(tech => (
                  <span key={tech} className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 3 */}
            <div className="group border border-slate-200 p-8 rounded-xl hover:shadow-lg transition-all duration-300 bg-white md:col-span-2">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">AI-Based Privacy Intelligence</h3>
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed max-w-3xl">
                An academic research project focused on privacy awareness and monitoring. Implemented AI-based conceptual models to detect potential digital security risks and enhance data protection for end users.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Machine Learning', 'Data Analysis'].map(tech => (
                  <span key={tech} className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Certifications Section */}
        <section id="certifications" className="bg-slate-50 border-y border-slate-100">
          <div className="section-container">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="heading-primary mb-2">Certifications.</h2>
                <p className="text-slate-500 text-sm">Validated skills & achievements</p>
              </div>
              <div className="md:col-span-8">
                <div className="flex flex-col gap-4">
                  {[
                    { name: 'Responsive Web Design', issuer: 'freeCodeCamp', link: '/certificates/RESPONSIVE WEB DESIGN FREE CODE CAMP CERTIFICATION.pdf' },
                    { name: 'Programming in Java', issuer: 'NPTEL', link: '/certificates/Java certificate.pdf' },
                    { name: 'Data Analytics with Python', issuer: 'NPTEL', link: '/certificates/Data Analytics With Python.pdf' },
                    { name: 'The Joy of Computing Using Python', issuer: 'NPTEL', link: '/certificates/The Joy of Computing using Python certificate.pdf' },
                    { name: 'AI-ML Virtual Internship', issuer: 'EduSkills', link: '/certificates/MANNEPALLI SAI CHARAN   LONG CERTIFICATE 851054.pdf' },
                    { name: 'Java Course', issuer: 'Udemy', link: '/certificates/UDEMY JAVA certificate.pdf' },
                    { name: 'Java Training', issuer: 'CodeTantra', link: '/certificates/CODE TANTRA Java Certifcate.pdf' },
                    { name: 'Deloitte Technology Job Simulation', issuer: 'Forage', link: '/certificates/Deloitte Technology Job Simulation Certificate.pdf' },
                    { name: 'AWS Solutions Architecture Job Simulation', issuer: 'Forage', link: '/certificates/AWS  Solutions Architecture Job Simulation certificate.pdf' },
                    { name: 'Quantum Fundamentals Program', issuer: 'APSCHE/WISER', link: '/certificates/APGOVQUANTUMCOMPUTINGCERTIFICATE.pdf' }
                  ].map((cert, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                      <div>
                        <h4 className="font-semibold text-slate-800">{cert.name}</h4>
                        <p className="text-sm text-slate-500 mt-1">{cert.issuer}</p>
                      </div>
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="mt-3 sm:mt-0 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        View Credential <ExternalLink size={14} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Activities & Leadership */}
        <section id="activities" className="section-container">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="heading-primary">Leadership.</h2>
            </div>
            <div className="md:col-span-8">
              <div className="space-y-8">
                {[
                  { title: 'Class Representative', desc: 'Acted as a liaison between students and faculty, organizing class activities, disseminating information, and managing core communications.' },
                  { title: 'Project Group Leader', desc: 'Led diverse teams in various academic projects, effectively coordinating tasks, managing timelines, and ensuring the successful delivery of objectives.' },
                  { title: 'NSS Participation', desc: 'Actively participated in National Service Scheme community service and social awareness campaigns to contribute to society.' },
                  { title: 'Technical Workshops & Guest Lectures', desc: 'Regularly attended various technical seminars and workshops to continuously stay updated with evolving industry trends.' }
                ].map((activity, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-slate-200">
                    <div className="absolute w-3 h-3 bg-slate-400 rounded-full -left-[7px] top-1.5 border-2 border-white"></div>
                    <h4 className="font-bold text-slate-900 text-lg">{activity.title}</h4>
                    <p className="text-slate-600 mt-2 leading-relaxed">{activity.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. Contact Section */}
        <section id="contact" className="bg-slate-900 text-white">
          <div className="section-container text-center py-32">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's work together.</h2>
            <p className="text-slate-400 mb-12 max-w-xl mx-auto text-lg">
              I am currently looking for new opportunities. My inbox is always open whether you have a question or just want to say hi!
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mscharan2807@gmail.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-md transition-colors font-semibold">
                <Mail size={20} /> Say Hello
              </a>
              <a href="https://github.com/mscharan6303" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 bg-slate-800 text-white hover:bg-slate-700 rounded-md transition-colors font-semibold">
                <GitBranch size={20} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/sai-charan-mannepalli/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 bg-slate-800 text-white hover:bg-slate-700 rounded-md transition-colors font-semibold">
                <UserPlus size={20} /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 text-center text-sm font-medium text-slate-500">
        <p>© {new Date().getFullYear()} Mannepalli Sai Charan.</p>
      </footer>
    </div>
  );
};

export default App;
