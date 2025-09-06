import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import "./App.css";

// --- Data for the website ---
const portfolioData = {
  name: "Do Hyun Nam",
  roles: [
    "Software Engineer",
    "Data Engineer",
    "AI Enthusiast",
    "Pokemon Trainer",
  ],
  tagline: "I bring data to life ✨ and build cool things with code. 🚀",
  heroImages: [
    "https://images.unsplash.com/photo-1555066931-4365d1469de5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%33D%3D",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    {
      name: "PADI Open Water Diver",
      issuer: "PADI",
      date: "Issued 2019",
    },
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
    },
    {
      title: "Unilever Future Leader's League 2024",
      description:
        "Developed a go-to-market strategy for bringing the Lady’s Choice brand to the US market, targeting the Filipino diaspora.",
      technologies: ["Market Research", "Strategy", "Business Intelligence"],
      link: "https://careers.unilever.com/ufll",
    },
    {
      title: "Crop Field Segmentation",
      description:
        "A research project comparing the performance of different neural network architectures for crop field segmentation using the DeepGlobe dataset.",
      technologies: ["AI Research", "Neural Networks", "Deep Learning"],
      link: "https://www.overleaf.com/read/pzvvznrjdtvf#b29e60",
    },
    {
      title: "Swivel",
      description:
        "A full-stack web application for car dealerships and customers to manage the entire vehicle purchasing and delivery process online.",
      technologies: ["Web Development", "Full-Stack"],
      link: "https://github.com/SFMB-9/TC3005B.501/tree/dev",
    },
    {
      title: "AI Image Authenticity",
      description:
        "A research project that used a modified **ResNet18** model to detect if an image was generated by a **GAN**.",
      technologies: ["AI Research", "Deep Learning", "ResNet18", "GANs"],
      link: "https://www.overleaf.com/read/dxbqhkcjpmgz#e23727",
    },
    {
      title: "Heaven't",
      description:
        "A hack n' slash, level-builder game developed in **Unity**, with a browser-based version and a companion website for user stats and logins.",
      technologies: ["Unity", "C#", "Game Development", "Web Development"],
      link: "https://github.com/Ace0x/Heavent",
    },
    {
      title: "DiaCoMoc",
      description:
        "A **Python Streamlit** application that diagnoses potential Covid-19 cases based on common symptoms and monitors patient health conditions.",
      technologies: ["Python", "Streamlit", "Data Analysis"],
      link: "https://github.com/catlikeflyer/Covid19Diagnoser",
    },
  ],
  contact: {
    email: "dhnam0322@gmail.com",
    linkedin: "https://linkedin.com/in/dohyunnam",
    github: "https://github.com/catlikeflyer",
  },
};

// --- React Components ---

const ThemeToggle = ({ theme, toggleTheme }) => (
  <button className="theme-toggle" onClick={toggleTheme}>
    {" "}
    {theme === "dark" ? <FaSun /> : <FaMoon />}{" "}
  </button>
);
const Header = ({ theme, toggleTheme }) => (
  <header className="header">
    {" "}
    <nav className="nav">
      {" "}
      <a href="#home" className="nav-logo">
        {portfolioData.name}
      </a>{" "}
      <div className="nav-links">
        {" "}
        <a href="#about">About</a> <a href="#projects">Projects</a>{" "}
        <a href="#journey">Journey</a> <a href="#skills">Skills</a>{" "}
        <a href="#contact">Contact</a>{" "}
      </div>{" "}
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />{" "}
    </nav>{" "}
  </header>
);
const HeroImageCarousel = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % images.length),
      interval
    );
    return () => clearInterval(timer);
  }, [images.length, interval]);
  if (!images || images.length === 0) return null;
  return (
    <div className="hero-image-carousel">
      {" "}
      <img
        src={images[currentIndex]}
        alt="Background"
        className="carousel-image"
      />{" "}
      <div className="overlay"></div>{" "}
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
  const [delta, setDelta] = useState(typingSpeed);
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text, delta]);
  const tick = () => {
    const i = loopNum % roles.length;
    const fullText = roles[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(pause);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(typingSpeed);
    } else if (isDeleting) {
      setDelta(deletingSpeed);
    }
  };
  return (
    <h2 className="typing-effect">
      {text}
      <span className="cursor">|</span>
    </h2>
  );
};
const Home = () => (
  <section id="home" className="home-section">
    {" "}
    <div className="home-content">
      {" "}
      <h1>{portfolioData.name}</h1> <TypingEffect roles={portfolioData.roles} />{" "}
      <p className="tagline">{portfolioData.tagline}</p>{" "}
    </div>{" "}
  </section>
);
const About = () => (
  <section id="about">
    {" "}
    <h3 className="section-title">A Bit About Me 👋</h3>{" "}
    <p>{portfolioData.about}</p>{" "}
  </section>
);

const Journey = () => {
  // ✅ State for expanding the experience section
  const [isExperienceExpanded, setExperienceExpanded] = useState(false);
  const experienceLimit = 2;
  const showExperienceButton =
    portfolioData.experience.length > experienceLimit;
  const displayedExperience = isExperienceExpanded
    ? portfolioData.experience
    : portfolioData.experience.slice(0, experienceLimit);

  return (
    <section id="journey">
      <h3 className="section-title">My Journey So Far 🗺️</h3>
      <div className="journey-container">
        <div className="journey-column">
          <h4>💼 Experience</h4>
          {displayedExperience.map((item, index) => (
            <div key={index} className="journey-item">
              <h5>
                {item.role} @ {item.company}
              </h5>
              <span>{item.date}</span>
              <p>{item.description}</p>
            </div>
          ))}
          {showExperienceButton && (
            <button
              className="show-more-button"
              onClick={() => setExperienceExpanded(!isExperienceExpanded)}
            >
              {isExperienceExpanded ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
        <div className="journey-column">
          <h4>🎓 Education</h4>
          {portfolioData.education.map((item, index) => (
            <div key={index} className="journey-item">
              <h5>{item.degree}</h5>
              <span>
                {item.institution} / {item.date}
              </span>
              <p>{item.description}</p>
            </div>
          ))}
          <h4 className="journey-subheader">📜 Certifications and Awards</h4>
          {portfolioData.certifications.map((item, index) => (
            <div key={index} className="journey-item">
              <h5>{item.name}</h5>
              <span>
                {item.issuer} / {item.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => (
  <section id="skills">
    {" "}
    <h3 className="section-title">My Tech Toolbox 🛠️</h3>{" "}
    <div className="skills-container">
      {" "}
      {portfolioData.skills.map((skill, index) => (
        <span key={index} className="skill-tag">
          {skill}
        </span>
      ))}{" "}
    </div>{" "}
  </section>
);

const Projects = () => {
  // ✅ State for expanding the projects section
  const [isExpanded, setIsExpanded] = useState(false);
  const projectsLimit = 3;
  const showButton = portfolioData.projects.length > projectsLimit;
  const displayedProjects = isExpanded
    ? portfolioData.projects
    : portfolioData.projects.slice(0, projectsLimit);

  return (
    <section id="projects">
      <h3 className="section-title">Things I've Built 💡</h3>
      <div className="projects-container">
        {displayedProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Check it out!
            </a>
          </div>
        ))}
      </div>
      {showButton && (
        <button
          className="show-more-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
    </section>
  );
};

const Contact = () => (
  <section id="contact">
    {" "}
    <h3 className="section-title">Let's Connect! 📬</h3>{" "}
    <p>Have a cool idea or just want to say hi? My inbox is always open.</p>{" "}
    <div className="contact-links">
      {" "}
      <a
        href={`mailto:${portfolioData.contact.email}`}
        className="contact-button"
      >
        <FaEnvelope /> Email Me
      </a>{" "}
      <a
        href={portfolioData.contact.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-button"
      >
        <FaLinkedin /> LinkedIn
      </a>{" "}
      <a
        href={portfolioData.contact.github}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-button"
      >
        <FaGithub /> GitHub
      </a>{" "}
    </div>{" "}
  </section>
);
const Footer = () => (
  <footer className="footer">
    {" "}
    <p>
      Designed & Built by {portfolioData.name}, {new Date().getFullYear()}
    </p>{" "}
  </footer>
);

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(theme);
  }, [theme]);
  return (
    <div className="App">
      {" "}
      <Header theme={theme} toggleTheme={toggleTheme} />{" "}
      <HeroImageCarousel images={portfolioData.heroImages} />{" "}
      <main className="main-content">
        {" "}
        <Home /> <About /> <Projects /> <Journey /> <Skills /> <Contact />{" "}
      </main>{" "}
      <Footer />{" "}
    </div>
  );
}

export default App;
