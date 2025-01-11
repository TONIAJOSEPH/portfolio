import "./Project.css"
const Project: React.FC = () => {
    const projectsWorked = [{ title: "Real Estate Portal", description: "Worked on devoloping Real estate portal for a US client.developed reusable components using React Ts,created fully functional pages with API integration and mock service worker for creating mock datas.", keySkills: ["ReactTs", "msw", "sass", "Rest Api"] },
    { title: "Banking Domain", description: "Worked on creating user interface for a US client, using NextJs.supported bug fixing,worked on content migration using contentful cms.", keySkills: ["NextJs", "contentful", "unit test", "Jest", "RTL"] },
    { title: "Resource Management", description: "Worked on implementing a new module to an existing project using AngularJs.closely worked with backend developers for API integration.", keySkills: ["AngularJs", "Rest Api"] },


    ]
    return (
        <div className="projectWrapper" id="project">
            <div className="container">
                <div className="row">
                    <h1 className="text-center">Projects</h1>
                    <p className="text-center mt-4 subTitle">I have worked on a wide range of projects. Adding here some of my good projects.</p>
                    {projectsWorked.map((i) => (
                        <div className="col-md-4 mt-5">
                            <div className="project">
                                <div className="imageSection">
                                </div>
                                <div className="projectDetails">
                                    <>
                                        <div className="skillsSection mt-4">
                                            <div className="skills">
                                                {i.keySkills.map((i) => (
                                                    <div className="projectSkills">{i}</div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="detailedSection mt-3">
                                            <h4>{i.title}</h4>
                                            <div className="details mt-4">
                                                {i.description}
                                            </div>
                                        </div></>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Project;