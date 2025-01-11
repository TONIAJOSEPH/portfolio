import "./Education.css";
const Education: React.FC = () => {
  return (
    <div className="eduWrapper" id="edu">
      <div className="container">
        <div className="row">
          <div className="sectionHeader">
            <h1 className="">Education</h1>
            <p className="mb-5">
              My education has been a journey of self-discovery and growth. My
              educational details are as follows.
            </p>
          </div>
          <div className="col-md-12">
            <div className="timeline">
              <div className="timelineItem">
                <div className="timelineDate">2014-2018</div>
                <div className="timelineCircle"></div>
                <div className={`timelineContent contentLeft`}>
                  <h3>AEC Aranmula</h3>
                  <h4>B-Tech CSE</h4>
                  <span className="date">2014-2018</span>
                  <p>
                    I have completed 4 year B-Tech graduation in computer
                    science from college of engineering Aranmula,Pathanamthitta.
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
export default Education;
