import ProjectCard from './ProjectCard';

export default function Projects() {
  const projectList = [
    {
      title: "AI Travel Agent",
      tech: "LangChain, Streamlit, Gemini API, ChromaDB, Amadeus API",
      description:
        "Built an AI-powered travel assistant that generates personalized Dubai itineraries by ingesting travel blogs into a vector database (RAG). Integrated LangChain agents for flight, hotel, and itinerary recommendations with a custom Streamlit UI.",
    },
    {
      title: "Briefly – PDF Answering Chatbot",
      tech: "Langchain, Streamlit, Gemini API, MongoDB, RAG",
      description:
        "Created a chatbot that accepts PDFs, stores the data in MongoDB, and answers questions using Gemini + LangChain. It also generates summaries and supports file-based querying.",
    },
    {
      title: "E-commerce Website – Street Sneaks",
      tech: "React.js, Tailwind CSS, Backend Integration",
      description:
        "Designed and developed a responsive sneaker e-commerce website with cart functionality and backend integration. Built clean UI/UX using React and Tailwind CSS.",
        link: "https://street-sneaks.vercel.app/",
    },
    {
      title: "Advanced To-Do List",
      tech: "React.js, Redux, LocalStorage",
      description:
        "Implemented a feature-rich to-do app with drag-and-drop support, Redux-based state management, and persistent data storage.",
    },
    {
      title: "Women Safety App Designs",
      tech: "Figma",
      description:
        "Designed UI/UX wireframes and interactive prototypes for a women’s safety app. Prioritized accessibility and mobile-first layout.",
    },
    {
      title: "Frontend Mini Projects",
      tech: "HTML, CSS, JavaScript",
      description:
        "Built various frontend apps including a Calculator, Weather App, Game Hub, IP Calculator, and basic cloud UI. Focused on responsiveness and JS logic.",
    },
    {
      title: "Personal Portfolio Website",
      tech: "React, CSS",
      description:"Built a personal portfolio website using react"
    },
  ];

  return (
    <section>
      <h2>Projects</h2>
      {projectList.map((project, index) => (
        <ProjectCard
        key={index}
        title={project.title}
        tech={project.tech}
        description={project.description}
        link={project.link} // ✅ this is critical
      />
      ))}
    </section>
  );
}
