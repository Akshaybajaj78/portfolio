import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student</h4>
                <h5>Triveni memorial sr. sec. school</h5>
              </div>
              <h3>2022-2023</h3>
            </div>
            <p>
              Successfully completed my Class 12 with a strong interest in technology, which inspired me to pursue a career in Computer Science and Cybersecurity.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Chitkara university</h4>
                <h5>Student</h5>
              </div>
              <h3>2023-2027</h3>
            </div>
            <p>
              🎓 Pursuing a Bachelor of Technology (B.Tech) in Computer Science & Engineering (Cybersecurity) at Chitkara University, building expertise in software development, cybersecurity, and AI through academic learning and hands-on projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Chitkara university</h4>
                <h5>Student</h5>
              </div>
              <h3>2026-Present</h3>
            </div>
            <p>
             Working as a Student Researcher with the Cyber Security & Research Department at Chitkara University, contributing to the development of industry-level cybersecurity projects and conducting research on emerging security technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
