// ========================
//  💖  2025‑07‑01 Refactored Projects Section
//    • Increased width of the projects section for more space.
//    • Styled each project as a distinct card with a default shadow.
//    • Enhanced the hover effect to make the card "pop" more prominently.
//    • Corrected minor font weight and icon issues.
// ---------------------------------------------------------------

import Image from "next/image";
import CustomCursor from '../components/CustomCursor';
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ChevronDoubleDownIcon,
  EnvelopeIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  ChartBarIcon,
  CpuChipIcon,
  ScaleIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, OrbitControls } from '@react-three/drei';

import { Poppins } from 'next/font/google';
const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'], // regular, medium, semibold, bold, extrabold
  subsets: ['latin'],
  display: 'swap', // Ensures text is visible while the font loads
});

// FIX: Integrated the 3D shape component
function RotatingShape() {
  const meshRef = useRef();
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });
  return (
    <Icosahedron ref={meshRef} args={[2, 0]}>
      <meshStandardMaterial color="#FDA4BA" roughness={0.5} />
    </Icosahedron>
  );
}

export default function Home() {
  const [visibleProjects, setVisibleProjects] = useState(4); // only 4 visible projects
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
    AOS.init({ duration: 700, once: true });
  }, []);

  /* ────────── Experience Data ────────── */
  const experiences = [
    {
      date: "Jun 2025 – Present",
      role: "Data Science Product Analyst",
      org: "Handshakes",
      bullets: [
        "Collaborating with product and engineering teams to scope data-driven feature improvements for Handshakes' app.",
        "Designing and monitoring product analytics dashboards to evaluate feature adoption and performance using SQL and Python.",
      ],
    },
    {
      date: "Jun 2025 – Present",
      role: "Brand Ambassador",
      org: "Adobe",
      bullets: [
        "Promoting Adobe Express through student workshops, social campaigns, and peer-to-peer engagement at UCLA.",
      ],
    },
    {
      date: "Jan 2025 – Jun 2025",
      role: "Data Scientist",
      org: "Reinforced Ventures",
      bullets: [
  "Defined metrics of founder success using lab pedigree, patent count, and startup outcomes across robotics and biotech domains.",
  "Built predictive models to identify high-potential founders based on historical data from portfolio companies.",
      ],
    },
    {
      date: "Mar 2025 – Jun 2025",
      role: "Research Assistant",
      org: "UCLA Health",
      bullets: [
          "Built a statistically sound sampling framework to estimate CO₂ emissions, enabling accurate life-cycle analysis of 25K+ medical products.",
      ],
    },
    {
      date: "Oct 2024 – Mar 2025",
      role: "Business Analyst",
      org: "Unishack",
      bullets: [
        "Conducted SEO audits and competitor analysis on sites like Zillow and Apartments.com to identify high-impact student housing keywords.",
        "Developed user segmentation and UX improvement recommendations based on student feedback and web traffic data.",
      ],
    },
    {
      date: "Jun 2024 – Aug 2024",
      role: "Data Engineer",
      org: "CAAS",
      bullets: [
        "Built and maintained ETL pipelines in Azure Synapse Analytics to process 10GB of aviation data daily across 20+ tables.",
        "Automated data cleaning and integration scripts in Python and Excel VBA to streamline manual workflows and reduce errors.",
      ],
    },
  ];

  /* ────────── Projects Data (Updated Structure) ────────── */
  const projects = [
    {
      title: "Amazon Operational Strategy",
      description: "Transformed unstructured employee feedback into actionable retention strategies by developing data-driven cohort profiles and operational recommendations.",
      primaryTag: "Coming soon",
      // timeline: "2025",
      tags: ["Python Scraping", "Sentiment Analysis", "Operational Strategy", "User Research"],
      imageUrl: "/logos/amazon photo.png",
      // link: "NEED ADD LINK",
    },
    {
      title: "DataFest Hackathon (🏅 Winner)",
      description: "Developed data-driven insights by identifying growth drivers and forecasting high-potential regions across tech, finance, and legal sectors. Delivered recommendations to guide client leasing decisions.",
      primaryTag: "Real Estate",
      tags: ["Data Visualization", "Python", "Data Cleaning", "EDA"],
      imageUrl: "/logos/datafest.png",
      link: "/datafest-hackathon",
    },
    {
      title: "K-drama Analytics & Recommendation System",
      description: "Analyzed viewership trends, genre popularity, and audience demographics of Korean dramas to identify key features driving drama success. Built a recommender system to match users with personalized K-drama suggestions.",
      primaryTag: "Entertainment",
      tags: ["Machine Learning", "TF-IDF", "Feature Engineering", "Data Visualization"],
      imageUrl: "/logos/kdrama.png",
      link: "https://ucladatares.medium.com/facts-behind-fantasy-dissecting-the-captivating-world-of-korean-dramas-8f4ed7605a08",
    },
    {
      title: "Who Can Replace Busquets? Tactical + Statistical Deep Dive",
      description: "Used player performance metrics and clustering techniques to identify modern midfielders who mirror Sergio Busquets’ unique playing style. Combined data-driven analysis with tactical context to evaluate potential successors.",
      primaryTag: "Sports Analytics",
      tags: ["Cosine Similarity", "PCA", "Metrics"],
      imageUrl: "/logos/football.png",
      link: "https://www.bruinsportsanalytics.com/post/sergio-busquets-heir",
    },
    {
      title: "How Music Shapes Young Minds",
      description: "Investigated how passive listening to different music genes affect short-term memory in elementary school children. The study offers data-backed, low-cost recommendations for integrating music into early education as a cognitive support tool",
      primaryTag: "Experimental Design", 
      tags: ["ANOVA", "R programming", "Randomized Block Design"],
      imageUrl: "/logos/music pic.png",
      link: "/How Music Shapes Young Minds.pdf"
    }
  ];

  /* ────────── Skills Data ────────── */
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "R", "SQL", "C++", "HTML", "CSS"],
      icon: <CodeBracketIcon className="w-8 h-8 text-gray-400" />,
    },
    {
      category: "Data Visualization",
      skills: ["Tableau", "PowerBI", "Matplotlib", "Seaborn", "ggplot2", "plotly"],
      icon: <ChartBarIcon className="w-8 h-8 text-gray-400" />,
    },
    {
      category: "Data Analysis & ML",
      skills: [
        "pandas", "numpy", "sciki-learn", "pytorch", "tensor flow", "keras", "Google Analytics"
      ],
      icon: <CpuChipIcon className="w-8 h-8 text-gray-400" />,
    },
    
    {
      category: "Statistics",
      skills: ["Hypothesis Testing", "A/B testing", "Bayesian Inference", "Experimental Design"],
      icon: <ScaleIcon className="w-8 h-8 text-gray-400" />,
    },
    {
      category: "Product",
      skills: [
        "User Research",
        "A/B Testing",
        "Agile Methodology",
        "Market Research",
        "Metrics & KPI Tracking",
      ],
      icon: <RocketLaunchIcon className="w-8 h-8 text-gray-400" />,
    },
    {
      category: "Tools",
      skills: ["Git", "Figma", "AWS", "Jira"],
      icon: <WrenchScrewdriverIcon className="w-8 h-8 text-gray-400" />,
    },
  ];

  return (
    <main className={`${poppins.className} min-h-screen w-full font-sans text-gray-900`}>
      <CustomCursor />
      {/* ================= Nav Bar ================= */}
      <nav className="sticky top-0 z-50 w-full bg-[#FDEFF5]/90 backdrop-blur shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <h1 className="text-lg md:text-xl font-semibold tracking-wide">Hannie&nbsp;X.</h1>

          <ul className="hidden md:flex space-x-8 text-sm md:text-base font-normal text-gray-600">
            {[
              { id: "about", label: "About" },
              { id: "experience", label: "Experiences" },
              { id: "projects", label: "Projects" },
              { id: "skills", label: "Skills" },
            ].map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:text-pink-400 transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/playground" className="flex items-center gap-1 hover:text-pink-400 transition-colors">
                Playground
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </Link>
            </li>
          </ul>

          <a
            href="https://www.linkedin.com/in/hannie-xie/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gray-800 px-4 py-1 text-sm md:text-base font-medium hover:bg-gray-800 hover:text-white transition-colors"
          >
            Connect
          </a>
        </div>
      </nav>

      {/* ================= Hero ================= */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center text-center min-h-screen overflow-hidden isolate bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100 animate-gradient-x"
      >
        {/* Stardust layer */}
        <div className="pointer-events-none overflow-hidden absolute inset-0 -z-10">
          {Array.from({ length: 100 }).map((_, i) => (
            <span
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-white opacity-70 animate-star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          ))}
        </div>

        {/* Profile photo */}
        <div
          className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl"
          data-aos="zoom-in"
        >
          <Image src="/profile.jpg" alt="Hannie" fill style={{ objectFit: "cover" }} />
        </div>

        {/* Cannon‑pulse name */}
        <h1 className="mt-8 text-4xl md:text-6xl font-semibold animate-cannon" data-aos="fade-up">
          Hannie Xie
        </h1>
        <p
  className="mt-4 text-lg md:text-2xl text-gray-700 max-w-5xl"
  data-aos="fade-up"
  data-aos-delay="150"
>
  <span style={{ textShadow: '0 0 6px rgba(255, 255, 0, 0.7)' }} className="opacity-100"> ✨</span>

  <span className="font-extrabold opacity-70 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
    transforming
  </span>

  <span style={{ textShadow: '0 0 6px rgba(255, 255, 0, 0.7)' }} className="opacity-100"> ✨</span>

  <span className="font-medium opacity-70">
    {' '}data into insights • {' '}
  </span>

  <span style={{ textShadow: '0 0 6px rgba(255, 255, 0, 0.7)' }} className="opacity-100"> ✨</span>

  <span className="font-extrabold opacity-70 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
    building
  </span>

  <span style={{ textShadow: '0 0 6px rgba(255, 255, 0, 0.7)' }} className="opacity-100"> ✨</span>
  
  <span className="font-medium opacity-70">
    {' '}products that matter
  </span>
</p>

        {/* Social icons */}
        <div className="mt-6 flex space-x-6 text-gray-600" data-aos="fade-up" data-aos-delay="250">
          <a
            href="https://www.linkedin.com/in/hannie-xie/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a
            href="https://github.com/yuhanniebin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.373.5 0 5.872 0 12.5c0 5.295 3.438 9.787 8.205 11.387.6.111.793-.261.793-.58 0-.287-.01-1.04-.015-2.043-3.338.725-4.042-1.607-4.042-1.607-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.932 0-1.31.468-2.382 1.235-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.01-.322 3.3 1.23a11.495 11.495 0 0 1 3-.404c1.02.004 2.048.138 3 .404 2.29-1.553 3.297-1.23 3.297-1.23.654 1.652.242 2.873.118 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.804 5.625-5.475 5.922.43.37.815 1.096.815 2.21 0 1.596-.015 2.884-.015 3.276 0 .321.192.697.8.579C20.565 22.284 24 17.793 24 12.5 24 5.872 18.627.5 12 .5z" />
            </svg>
          </a>
          <a href="mailto:yuhannie@g.ucla.edu" className="hover:text-pink-500 transition-colors">
            <EnvelopeIcon className="w-7 h-7" />
          </a>
        </div>

        <a href="#about" aria-label="Scroll to About" className="mt-20 text-gray-700 hover:text-pink-500">
          <ChevronDoubleDownIcon className="w-8 h-8 animate-bounce" />
        </a>
      </section>

      {/* ================= About ================= */}
      <section
        id="about"
        className="bg-gradient-to-b from-slate-50 via-white to-pink-50 py-24"
      >
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-4 text-center md:text-left">
          <div
            className="relative w-85 h-100 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 ring-1 ring-gray-200"
            data-aos="zoom-in"
          >
            <Image src="/about_photo.jpg" alt="Hannie at work" width={256} height={320} className="object-cover w-full h-full" />
          </div>

          <div className="w-full md:max-w-4xl" data-aos="fade-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-pink-300">
              <span className="animate-typewriter">Hey there! I am Hannie!</span>
            </h2>
            <p className="text-lg leading-relaxed mt-6 text-gray-700">
    📚 Stats & Data Science major | Data Science Engineering minor @ UCLA
  </p>
  
  <p className="text-lg leading-relaxed mt-6 text-gray-700">
    💡 I&apos;m passionate about the intersection of <strong>data</strong> and <strong>product</strong> - where raw numbers transform into real insights, 
    and these insights drive meaningful change. I love being part of the full journey: from making sense of messy data to 
    uncovering patterns through analysis or machine learning, and using all that to shape smarter, more user-friendly products.
    </p>
    <p className="text-lg leading-relaxed mt-4 text-gray-700">
    There’s something incredibly rewarding about knowing the work you do can help make someone’s experience <i>smoother, faster,</i> or just <i>better.</i>
  </p>

  <p className="text-lg leading-relaxed mt-6 text-gray-700">
    💖 Things I love: pink 🎀, boba 🧋, dancing💃🏻, watching movies and tv shows 🎬
  </p>

  <p className="text-lg leading-relaxed mt-6 text-gray-700">
    📍 Welcome to my little corner of the internet! Please feel free to reach out and happy exploring!
  </p>
</div>
        </div>
      </section>

      {/* ================= Experience (NEW ROBUST LAYOUT) ================= */}
<section
  id="experience"
  className="bg-gradient-to-b from-pink-50 via-white to-rose-50 py-32"
>
  <div className="relative max-w-5xl mx-auto px-4">
    <h2
      className="text-center text-4xl font-semibold mb-20 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
      data-aos="fade-up"
    >
      Experience
    </h2>

    <div className="flex flex-col">
      {experiences.map((exp, idx) => (
        <div
          key={idx}
          className="grid grid-cols-1 md:grid-cols-[1fr_auto_2fr] md:gap-x-8 pb-12"
          data-aos="fade-up"
          data-aos-delay={idx * 100}
        >
          {/* --- Left Column (Details) --- */}
          <div className="md:text-right">
            <p className="text-gray-500 text-sm mb-1">{exp.date}</p>
            <p className="text-lg font-semibold leading-tight text-gray-800">{exp.org}</p>
            <h3 className="text-lg italic text-gray-600">{exp.role}</h3>
            
          </div>

          {/* --- Center Column (Timeline Gutter with Dot and Line) --- */}
          <div className="hidden md:flex flex-col items-center">
            <div className="w-4 h-4 bg-pink-300 rounded-full border-4 border-white shadow-lg flex-shrink-0"></div>
            <div className="w-px h-full bg-gray-300 mt-2"></div>
          </div>

          {/* --- Right Column (Bullets) --- */}
          <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4 md:mt-0">
            {exp.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ================= Projects (NEW LAYOUT) ================= */}
<section
  id="projects"
  className="bg-gradient-to-b from-rose-50 via-pink-50 to-slate-50 py-32"
>
  <div className="relative max-w-7xl mx-auto px-4">
    <h2
      className="text-center text-4xl font-semibold mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
      data-aos="fade-up"
    >
      Featured Projects
    </h2>

    <div className="flex flex-col gap-16">
      {projects.slice(0, visibleProjects).map((project, idx) => {
        const cardClasses = "block p-8 rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:bg-white/20 hover:backdrop-blur-sm hover:shadow-2xl hover:-translate-y-2";
        
        const cardContent = (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-sm font-semibold text-gray-700 bg-gray-200 px-3 py-1 rounded-full">
                  {project.primaryTag}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-x-3 gap-y-2 mt-2">
                {project.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="text-sm text-gray-500 font-medium">
                    {tag}{tagIdx < project.tags.length - 1 ? ' •' : ''}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image
                src={project.imageUrl}
                alt={`Screenshot of ${project.title}`}
                layout="fill"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/1600x900/fdeff5/374151?text=Project+Image'; }}
              />
            </div>
          </div>
        );

        const linkProps = {
          className: `${cardClasses} cursor-pointer`,
          "data-aos": "fade-up",
          "data-aos-delay": idx * 150,
        };

        if (project.title !== "DataFest Hackathon (🏅 Winner)") {
          linkProps.target = "_blank";
          linkProps.rel = "noopener noreferrer";
        }

        return project.link ? (
          <Link href={project.link} passHref legacyBehavior key={idx}>
            <a {...linkProps}>
              {cardContent}
            </a>
          </Link>
        ) : (
          <div
            key={idx}
            className={cardClasses}
            data-aos="fade-up"
            data-aos-delay={idx * 150}
          >
            {cardContent}
          </div>
        );
      })} {/* <--- THIS IS THE MISSING CLOSING BRACE AND PARENTHESIS */}
    </div>

    <div className="mt-16 text-center">
      {visibleProjects < projects.length && (
        <button
          onClick={() => setVisibleProjects(projects.length)}
          className="inline-flex items-center gap-2 text-black px-8 py-3 rounded-lg font-semibold border border-black bg-transparent transition-all duration-300 transform hover:scale-105 hover:text-white"
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FDA4BA'; e.currentTarget.style.borderColor = 'transparent'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'black'; }}
        >
          View More
        </button>
      )}
    </div>
  </div>
</section>

      {/* ================= Skills, Playground & Connect ================= */}
      {/* FIX: Merged Skills and Playground sections */}
      <section
        id="skills"
         className="bg-gradient-to-b from-slate-50 via-pink-50 to-rose-200 py-32"
      >
        <div className="relative max-w-6xl mx-auto px-4">
          <h2
            className="text-center text-4xl font-semibold mb-16 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-500 ring-1 ring-gray-200 hover:ring-gray-200 transform hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4 flex-shrink-0">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{category.category}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="bg-pink-50 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium text-center hover:bg-pink-100 transition-colors cursor-default border border-pink-100"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* FIX: Integrated 3D Canvas directly into the skills section */}
          <div className="mt-1 text-center" data-aos="fade-up">
              <div className="h-96 w-full max-w-2xl mx-auto">
                  <Canvas>
                    <ambientLight intensity={0.8} />
                    <directionalLight position={[10, 10, 5]} intensity={1.5} />
                    <directionalLight position={[-10, -10, -5]} intensity={0.7} />
                    <RotatingShape />
                    <OrbitControls enableZoom={false} enablePan={false} />
                  </Canvas>
              </div>
              
              <div className="mt-1">
                <p className="text-xl text-gray-700 mb-6">
                  Curious to see more of my work?
                </p>
                <Link href="/playground" passHref legacyBehavior>
                  <a
  className="inline-flex items-center gap-2 text-black px-8 py-3 rounded-full font-semibold border border-black bg-transparent transition-all duration-300 transform hover:scale-105 hover:text-white"
  style={{
    transition: 'all 0.3s ease',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = '#FDA4BA';
    e.currentTarget.style.borderColor = 'transparent';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.borderColor = 'black';
  }}
>
                    Explore my Playground
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                  </a>
                </Link>
              </div>
          </div>

          {/* Connect section */}
          <div className="mt-10 border-t border-gray-300 pt-16 text-center" data-aos="fade-up">
            
            {/* 1. Decorative "Get in touch" heading */}
            <h2 className="text-4xl md:text-5xl font-medium text-gray-700 flex items-center justify-center gap-x-4">
              <span className="text-3xl" role="img" aria-label="sparkle">✨</span>
              Get in touch
              <span className="text-3xl" role="img" aria-label="sparkle">✨</span>
            </h2>

            {/* 2. Consolidated paragraph with an inline, hoverable email link */}
            <p className="mt-6 text-lg text-gray-700 max-w-xl mx-auto">
              I am currently looking for Summer 2026 internships! Feel free to contact me at{" "}
              <a
                href="mailto:yuhan.xie04@gmail.com"
                className="text-pink-400 font-medium hover:underline"
              >
                yuhan.xie04@gmail.com
              </a>
            </p>

            {/* 3. LinkedIn and Mail icon links */}
            <div className="mt-8 flex items-center justify-center gap-x-6">
                {/* Email Icon Link */}
                <a
                    href="mailto:yuhan.xie04@gmail.com"
                    aria-label="Email Hannie"
                    title="Email Hannie"
                    className="text-gray-500 hover:text-pink-400 transition-colors duration-300"
                >
                    <EnvelopeIcon className="w-8 h-8"/>
                </a>

                {/* LinkedIn Icon Link */}
                <a
                    href="https://www.linkedin.com/in/hannie-xie/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Hannie's LinkedIn Profile"
                    title="LinkedIn Profile"
                    className="text-gray-500 hover:text-pink-400 transition-colors duration-300"
                >
                    {/* LinkedIn SVG Icon */}
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                </a>
            </div>

          </div>
        </div>
      </section>

      {/* ========= Global keyframes ========= */}
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 10s ease-in-out infinite alternate;
        }

        @keyframes cannon {
          0%   { transform: scale(0.7); opacity: 0; }
          30%  { transform: scale(1.2); opacity: 1; }
          50%  { transform: scale(0.9); }
          65%  { transform: scale(1.1); }
          80%  { transform: scale(0.98); }
          100% { transform: scale(1); }
        }
        .animate-cannon { animation: cannon 1.5s ease-in-out both; }

        @keyframes star {
          0%   { transform: translateY(0) scale(1);   opacity: 1; }
          100% { transform: translateY(-100vh) scale(0.4); opacity: 0; }
        }
        .animate-star { animation: star 8s linear infinite; }

        @keyframes typing {
          from { width: 0; }
          to { width: 19ch; }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #f9a8d4; } /* pink-300 */
        }

        .animate-typewriter {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: .15em solid #f472b6;
          animation:
            typing 2.5s steps(24, end) forwards,
            blink-caret .75s step-end infinite;
          animation-play-state: paused;
        }
        [data-aos="fade-left"].aos-animate .animate-typewriter {
            animation-play-state: running;
        }
      `}</style>
    </main>
  );
}
