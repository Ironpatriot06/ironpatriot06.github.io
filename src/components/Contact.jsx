export default function Contact() {
    return (
        <><a
        href="/public/Ratish(Resume).pdf"
        download
        className="resume-button"
      >
        📄 Download Resume
      </a>
      <div style={{ textAlign: 'center', padding: '1rem', marginTop: '2rem', fontSize: '0.9rem', color: '#555' }}>&copy; {new Date().getFullYear()} Ratish Kapoor. All rights reserved.</div>
      </>
    );
  }
  