import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaSun,
  FaMoon,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";
import Ufll from "./assets/projects/ufll.jpg";
import Crop from "./assets/projects/crop.png";
import Swivel from "./assets/projects/swivel.png";
import AiNot from "./assets/projects/ainot.png";
import Heavent from "./assets/projects/heavent.png";
import Airfacts from "./assets/projects/airfacts.png";

// --- Portfolio Data ---
const portfolioData = {
  name: "Do Hyun Nam",
  profileImage: "https://i.imgur.com/d24B281.jpg", // Replace with your image URL
  roles: [
    "Software Engineer",
    "Data Engineer",
    "AI Enthusiast",
    "Pokemon Trainer",
  ],
  tagline: "I bring data to life ✨ and build cool things with code. 🚀",
  heroImages: [
    "https://images.unsplash.com/photo-1555066931-4365d1469de5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4-0-3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%33D%3D",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4-0-3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4-0-3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  about:
    "Hello! I'm a creative engineer who loves diving into data and building awesome software. Whether it's architecting a scalable data pipeline or developing a slick user interface, I'm all about tackling challenges with a blend of logic and imagination. My goal? To craft tech that's not just powerful, but also a joy to use.",
  experience: [
    {
      role: "Data & Analytics Engineering Manager",
      company: "Procter & Gamble",
      date: "2025 - Present",
      description:
        "Leading end-to-end data solutions that turn raw info into business gold. Managing a stellar portfolio of scalable data pipelines, ETL processes, and delivering insights that drive smart decisions.",
    },
    {
      role: "FP&A Analyst",
      company: "Hyundai Motor Company",
      date: "2024 - 2025",
      description:
        "Planned cost-saving strategies and optimized financial processes, contributing to a 10% reduction in MSRP for new release cars. Aligned financial strategies with regional management goals.",
    },
    {
      role: "Data & Analytics Intern",
      company: "Procter & Gamble",
      date: "2022 - 2023",
      description:
        "Used PowerBI, DAX, and Azure to create data pipelines and dashboards from multiple sources (Nielsen, internal datahub, SQL, Excel, CSV), providing key insights on sales trends and risks to brand managers.",
    },
    {
      role: "Student Ambassador",
      company: "Tecnologico de Monterrey",
      date: "2021 - 2023",
      description:
        "Optimized admissions processes and boosted student enrollment by over 20% through data analysis, student-centric initiatives, and engaging with over 200 families to foster a stronger community.",
    },
  ],
  education: [
    {
      degree: "M.S. in Computer Science and Technology",
      institution: "Tecnologico de Monterrey",
      date: "2020 - 2024",
      description:
        "Student Government Vice President, Student Society President, Academic Scholarship Award",
    },
    {
      degree: "Study Abroad Program",
      institution: "University of Toronto",
      date: "2023",
      description:
        "Courses in Deep Learning, Computer Vision and Public Healthcare",
    },
  ],
  certifications: [
    {
      name: "UFLL 2024 Global Finalist/Mexico Winner",
      issuer: "Unilever",
      date: "Issued 2024",
    },
    {
      name: "Google Project Management Certificate",
      issuer: "Google via Coursera",
      date: "Issued 2024",
    },
    { name: "PADI Open Water Diver", issuer: "PADI", date: "Issued 2019" },
  ],
  skills: [
    "Python",
    "JavaScript",
    "React",
    "Node.js",
    "SQL",
    "Azure",
    "Docker",
    "Databricks",
    "Spark",
    "PowerBI",
    "Git",
  ],
  projects: [
    {
      title: "Airfacts",
      description:
        "A simple API built with **Python FastAPI** and a **Neo4j** database that provides information on airports and airlines.",
      technologies: ["Python", "FastAPI", "Neo4j"],
      link: "https://github.com/catlikeflyer/airfacts",
      image: Airfacts,
    },
    {
      title: "Unilever Future Leader's League 2024",
      description:
        "Developed a go-to-market strategy for bringing the Lady’s Choice brand to the US market, targeting the Filipino diaspora.",
      technologies: ["Market Research", "Strategy", "Business Intelligence"],
      link: "https://careers.unilever.com/ufll",
      image: Ufll,
    },
    {
      title: "Crop Field Segmentation",
      description:
        "A research project comparing the performance of different neural network architectures for crop field segmentation using the DeepGlobe dataset.",
      image: Crop,
      technologies: ["AI Research", "Neural Networks", "Deep Learning"],
      link: "https://www.overleaf.com/read/pzvvznrjdtvf#b29e60",
    },
    {
      title: "Swivel",
      description:
        "A full-stack web application for car dealerships and customers to manage the entire vehicle purchasing and delivery process online.",
      technologies: ["Web Development", "Full-Stack"],
      link: "https://github.com/SFMB-9/TC3005B.501/tree/dev",
      image: Swivel,
    },
    {
      title: "AI Image Authenticity",
      description:
        "A research project that used a modified **ResNet18** model to detect if an image was generated by a **GAN**.",
      technologies: ["AI Research", "Deep Learning", "ResNet18", "GANs"],
      link: "https://www.overleaf.com/read/dxbqhkcjpmgz#e23727",
      image: AiNot,
    },
    {
      title: "Heaven't",
      description:
        "A hack n' slash, level-builder game developed in **Unity**, with a browser-based version and a companion website for user stats and logins.",
      technologies: ["Unity", "C#", "Game Development", "Web Development"],
      link: "https://github.com/Ace0x/Heavent",
      image: Heavent,
    },
  ],
  contact: {
    email: "dhnam0322@gmail.com",
    linkedin: "https://linkedin.com/in/dohyunnam",
    github: "https://github.com/catlikeflyer",
    youtube: "https://youtube.com/@eldollis",
  },
};

// --- Reusable Components ---

const ThemeToggle = ({ theme, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className="bg-slate-200 dark:bg-light-navy text-gray-800 dark:text-cyan rounded-full w-10 h-10 flex items-center justify-center text-xl hover:bg-cyan hover:text-navy transition-colors duration-300"
  >
    {theme === "dark" ? <FaSun /> : <FaMoon />}
  </button>
);

const ParallaxBackground = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % images.length),
      interval
    );
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="fixed inset-0 -z-10">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-navy/70 dark:bg-navy/80"></div>
    </div>
  );
};

const TypingEffect = ({
  roles,
  typingSpeed = 150,
  deletingSpeed = 100,
  pause = 2000,
}) => {
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const tick = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);
      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, roles, typingSpeed, deletingSpeed, pause]);

  return (
    <h2 className="text-3xl md:text-4xl font-bold text-slate-lightest mb-4 h-12">
      {text}
      <span className="text-cyan animate-blink">|</span>
    </h2>
  );
};

// --- Main Section Components ---

const Header = ({ theme, toggleTheme }) => (
  <header className="sticky top-0 z-50 bg-white/10 dark:bg-navy/10 backdrop-blur-lg">
    <div className="container mx-auto px-4">
      <nav className="flex justify-between items-center py-4">
        <a
          href="#home"
          className="font-mono font-bold text-xl text-gray-200 dark:text-white"
        >
          DHNAM.
        </a>
        {/* ✅ UPDATED NAVBAR LINKS */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#about"
            className="text-gray-300 dark:text-slate-light hover:text-cyan dark:hover:text-cyan transition-colors"
          >
            About
          </a>
          <a
            href="#journey"
            className="text-gray-300 dark:text-slate-light hover:text-cyan dark:hover:text-cyan transition-colors"
          >
            Journey
          </a>
          <a
            href="#projects"
            className="text-gray-300 dark:text-slate-light hover:text-cyan dark:hover:text-cyan transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-gray-300 dark:text-slate-light hover:text-cyan dark:hover:text-cyan transition-colors"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-gray-300 dark:text-slate-light hover:text-cyan dark:hover:text-cyan transition-colors"
          >
            Contact
          </a>
        </div>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </nav>
    </div>
  </header>
);

const Home = () => (
  <section id="home" className="min-h-screen flex items-center">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-lightest mb-2">
            Hi! I'm <span className="text-cyan">{portfolioData.name}</span>
          </h1>
          <TypingEffect roles={portfolioData.roles} />
          <p className="text-lg md:text-xl text-slate-light max-w-2xl mb-8">
            {portfolioData.tagline}
          </p>
          <div className="flex items-center space-x-4">
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="text-slate-light hover:text-cyan hover:scale-105 text-3xl transition-colors"
            >
              <FaEnvelope />
            </a>
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-light hover:text-cyan hover:scale-105 text-3xl transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-light hover:text-cyan hover:scale-105 text-3xl transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href={portfolioData.contact.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-light hover:text-cyan hover:scale-105 text-3xl transition-colors"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={portfolioData.profileImage}
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover ring-4 ring-offset-8 ring-cyan ring-offset-navy"
          />
        </div>
      </div>
    </div>
  </section>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-lightest mb-12 text-center">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

const About = () => (
  <Section id="about" title="About Me">
    <p className="text-center text-lg md:text-xl text-slate max-w-3xl mx-auto">
      {portfolioData.about}
    </p>
  </Section>
);

const Journey = () => {
  const [isExperienceExpanded, setExperienceExpanded] = useState(false);
  const experienceLimit = 2;
  const showExperienceButton =
    portfolioData.experience.length > experienceLimit;
  const displayedExperience = isExperienceExpanded
    ? portfolioData.experience
    : portfolioData.experience.slice(0, experienceLimit);

  return (
    <Section id="journey" title="My Journey">
      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <h3 className="text-2xl font-bold text-slate-lightest mb-8">
            💼 Experience
          </h3>
          <div className="relative pl-7">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 h-full w-0.5 bg-slate/30"></div>
            <div className="space-y-12">
              {displayedExperience.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[35px] top-1 h-4 w-4 rounded-full bg-cyan"></div>
                  <h4 className="text-xl font-semibold text-slate-lightest">
                    {item.role}
                  </h4>
                  <p className="text-cyan">
                    {item.company} / {item.date}
                  </p>
                  <p className="text-slate mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          {showExperienceButton && (
            <button
              onClick={() => setExperienceExpanded(!isExperienceExpanded)}
              className="mt-8 text-cyan border border-cyan rounded px-6 py-2 hover:bg-cyan/10 transition-colors"
            >
              {isExperienceExpanded ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold text-slate-lightest mb-8">
            🎓 Education
          </h3>
          <div className="space-y-6 mb-8">
            {portfolioData.education.map((item, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold text-slate-lightest">
                  {item.degree}
                </h4>
                <p className="text-slate-light">
                  {item.institution} / {item.date}
                </p>
                <p className="text-sm text-slate mt-1">{item.description}</p>
              </div>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-slate-lightest mb-8">
            📜 Certifications and Awards
          </h3>
          <div className="space-y-4">
            {portfolioData.certifications.map((item, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold text-slate-lightest">
                  {item.name}
                </h4>
                <p className="text-slate-light">
                  {item.issuer} / {item.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const projectsLimit = 3;
  const showButton = portfolioData.projects.length > projectsLimit;
  const displayedProjects = isExpanded
    ? portfolioData.projects
    : portfolioData.projects.slice(0, projectsLimit);

  const createMarkup = (htmlString) => {
    return {
      __html: htmlString.replace(
        /\*\*(.*?)\*\*/g,
        '<strong class="font-semibold text-cyan/90">$1</strong>'
      ),
    };
  };

  return (
    <Section id="projects" title="Things I've Built">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((project, index) => (
          <a
            href={project.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-lg shadow-lg border border-white/10 hover:-translate-y-2 hover:border-cyan hover:shadow-cyan/30 transition-all duration-300 flex flex-col p-6"
          >
            <h3 className="text-xl font-bold text-slate-lightest mb-4">
              {project.title}
            </h3>
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video object-cover rounded-md mb-4"
            />

            <p
              className="text-slate flex-grow"
              dangerouslySetInnerHTML={createMarkup(project.description)}
            ></p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-navy text-cyan text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
      {showButton && (
        <div className="text-center mt-12">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-cyan border border-cyan rounded px-8 py-3 hover:bg-cyan/10 transition-colors"
          >
            {isExpanded ? "Show Less" : "Show More Projects"}
          </button>
        </div>
      )}
    </Section>
  );
};

const Skills = () => (
  <Section id="skills" title="My Tech Toolbox">
    <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
      {portfolioData.skills.map((skill, index) => (
        <span
          key={index}
          className="bg-white/5 dark:bg-white/5 backdrop-blur-sm text-slate-light font-medium px-4 py-2 rounded-md shadow-lg border border-white/10 dark:hover:bg-cyan hover:scale-105 hover:text-navy transition-all duration-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </Section>
);

const Contact = () => (
  <Section id="contact" title="Get In Touch">
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-slate text-lg mb-8">
        I'm currently open to new opportunities and collaborations. Whether you
        have a question or just want to say hi, my inbox is always open!
      </p>
      <a
        href={`mailto:${portfolioData.contact.email}`}
        className="inline-block text-cyan border border-cyan rounded text-lg px-8 py-4 hover:bg-cyan/10 transition-colors"
      >
        Say Hello
      </a>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="py-6">
    <div className="container mx-auto px-4 text-center text-slate text-sm">
      <p>
        Designed & Built by {portfolioData.name}, {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

// --- Main App Component ---

function App() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "dark" ? "light" : "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <ParallaxBackground images={portfolioData.heroImages} />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Home />
        <div className="relative bg-white dark:bg-navy">
          <About />
          <Journey />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
