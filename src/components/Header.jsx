import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";

export default function Header({ darkMode, toggleTheme }) {
  return (
    <header
      style={{
        padding: "3rem 1rem 4rem",
        background: darkMode
          ? "linear-gradient(135deg, #1f1c2c, #928DAB)"
          : "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
        color: darkMode ? "#fff" : "#111",
        textAlign: "center",
        boxShadow: darkMode ? "0 0 10px #000" : "0 0 10px #ccc",
        position: "relative",
        transition: "all 0.3s ease-in-out",
      }}
    >
      

      <h1 style={{ fontSize: "2.8rem", marginBottom: "0.5rem", fontWeight: "800" }}>
        Ratish Kapoor
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "0.3rem", opacity: 0.85 }}>
        @ironpatriot06
      </p>
      <p style={{ fontStyle: "italic", fontSize: "1.1rem" }}>
        Web Developer | AI Enthusiast
      </p>

      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          fontSize: "1rem",
        }}
      >
        <a href="mailto:ratishkapoor5@gmail.com" style={linkStyle}>
          <FaEnvelope /> &nbsp;ratishkapoor5@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/ratishkapoor"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <FaLinkedin /> &nbsp;linkedin.com/in/ratishkapoor
        </a>
        <a
          href="https://github.com/ironpatriot06"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <FaGithub /> &nbsp;github.com/ironpatriot06
        </a>
        <span style={linkStyle}>
          <FaPhoneAlt /> &nbsp;+91 9910138806
        </span>
      </div>
    </header>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
  display: "flex",
  alignItems: "center",
  gap: "0.3rem",
};
