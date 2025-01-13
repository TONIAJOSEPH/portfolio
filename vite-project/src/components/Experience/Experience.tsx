import "./Experience.css";
import reflectionsLogo from "../../assets/ReflectionsLogo.svg";
const Experience: React.FC = () => {
  return (
    <div className="expWrapper" id="exp">
      <div className="container">
        <div className="row">
          <div className="sectionHeader">
            <h1 className="">Experience</h1>
            <p className="">My work experience as a software engineer.</p>
          </div>
          <div className="col-md-12">
            <div className="timeline">
              <div className="timelineItem">
                <div className="timelineDate">2022-present</div>
                <div className="timelineCircle"></div>
                <div className={`timelineContent contentLeft`}>
                  <div className="expcontentHeader">
                    <div className="reflLogo">
                      <img src={reflectionsLogo} />
                    </div>
                    <div className="headerText">
                      <h5>Software Engineer</h5>
                      <h6>Reflections Info Systems</h6>
                      <h6>Jul 2022-Present</h6>
                    </div>
                  </div>
                  <p>
                    Worked on various projects in React and Angular. Applied
                    React hooks for reusable components and simplified the UI.
                    Implemented Api integrations.worked on agile environment.
                    Managed version control with Git for smooth collaboration.
                  </p>
                  <p>
                    <strong>Skills:</strong>React,Angular,MSW,API
                    integration,Html,css,Javascript
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
