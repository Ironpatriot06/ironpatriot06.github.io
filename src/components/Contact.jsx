export default function Contact() {
    return (
        <><a
        href="https://drive.google.com/file/d/1aAHgwfYkGA8x0dtm5CQsIVX4tTwpcNeP/view?usp=sharing"
        download
        className="resume-button"
        target="_blank"
      >
        📄 Open Resume
      </a>
      <div style={{ textAlign: 'center', padding: '1rem', marginTop: '2rem', fontSize: '0.9rem', color: '#555' }}>&copy; {new Date().getFullYear()} Ratish Kapoor. All rights reserved.</div>
      </>
    );
  }
  