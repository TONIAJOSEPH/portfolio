import "./About.css";
import profilephoto from "../../assets/profile.png";
const About: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    const isProduction = import.meta.env.MODE === 'production';
    const fileUrl = isProduction
      ? '/portfolio/TojinaJoseph-Resume.pdf'
      : 'Tonia_Joseph.pdf';
    link.href = fileUrl; // Path to the PDF file (e.g., public folder)
    link.download = "Resume.pdf"; // Optional: Name for the downloaded file
    link.click();
  };
  return (
    <div className="aboutWrapper" id="about">
      <div className="container">
        <div className="row aboutSection">
          <div className="col-md-6 order-2 order-md-1">
            <div className="firstSection">
              <div className="introSection">
                <h1>Hi, I am</h1>
                <h1>Tonia Joseph</h1>
                <h2>
                  I am a <span className="role">Frontend Developer</span>
                </h2>
              </div>
              <div className="aboutSummary">
                <p>
                  I'm a highly motivated and versatile individual with a strong
                  aptitude for problem-solving and a deep commitment to
                  continuous development. I enjoy tackling complex challenges,
                  analyzing data, and developing effective solutions. I'm a firm
                  believer in lifelong learning and actively pursue
                  opportunities to expand my knowledge and skillset.
                </p>
              </div>
              <div className="resume">
                <button className="resumeButton" onClick={handleDownload}>
                  <h5>Check Resume</h5>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <div className="profilePhotoSection">
              <img className="profilePhoto" src={profilephoto} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
