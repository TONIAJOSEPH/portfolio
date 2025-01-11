import "./Skills.css"
import reactIcon from "../../assets/react.svg"
import angularIcon from "../../assets/angularIcon.svg"
import nextIcon from "../../assets/nextjs.svg"
import htmlIcon from "../../assets/html.svg"
import cssIcon from "../../assets/css.svg"
import jsIcon from "../../assets/javascript.svg"
import bootstrapIcon from "../../assets/bootstrap.svg"
import nodeIcon from "../../assets/nodejs.svg"
import expressIcon from "../../assets/express.svg"
import mongodbIcon from "../../assets/mongodb.svg"
import postmanIcon from "../../assets/postman.svg"
import gitIcon from "../../assets/git.svg"
import githubIcon from "../../assets/github.svg"
import jiraIcon from "../../assets/jira.svg"
import bitbucketIcon from "../../assets/bitbucket.svg"
import gcpIcon from "../../assets/gcp.svg"
import azureIcon from "../../assets/azure.svg"
import vscodeIcon from "../../assets/vscode.svg"

const Skills: React.FC = () => {
    const frontendSkills = [{ title: "React", image: reactIcon }, { title: "AngularJs", image: angularIcon }, { title: "NextJs", image: nextIcon },
    { title: "Html", image: htmlIcon }, { title: "CSS", image: cssIcon }, { title: "Javascript", image: jsIcon }, { title: "Bootstrap", image: bootstrapIcon }
    ]
    const backendSkills = [{ title: "NodeJs", image: nodeIcon }, { title: "ExpressJs", image: expressIcon }, { title: "Mongodb", image: mongodbIcon },
    { title: "Postman", image: postmanIcon }
    ]
    const otherSkills = [{ title: "Git", image: gitIcon }, { title: "Github", image: githubIcon }, { title: "Jira", image: jiraIcon },
    { title: "Bitbucket", image: bitbucketIcon }, { title: "GCP", image: gcpIcon }, { title: "Azure", image: azureIcon }, { title: "VS code", image: vscodeIcon }
    ]
    return (
        <div className="skillsWrapper" id="skills">
            <div className="container">
                <div className="row">
                    <div className="skillsTitle">
                        <h1 className="text-center">Skills</h1>
                        <p className="mt-5">Here are some of my skills on which I have been working on for the past year.</p>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="frontendSkills">
                            <h4>Frontend</h4>
                            <div className="skills mt-3">
                                {frontendSkills.map((i) => (
                                    <div className="skillItem">
                                        <img src={i.image} />
                                        {i.title}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        <div className="frontendSkills">
                            <h4>Backend</h4>
                            <div className="skills mt-3">
                                {backendSkills.map((i) => (
                                    <div className="skillItem">
                                        <img src={i.image} />
                                        {i.title}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 mt-5 d-flex justify-content-center align-items-center">
                        <div className="otherSkills">
                            <h4>Others</h4>
                            <div className="skills mt-3">
                                {otherSkills.map((i) => (
                                    <div className="skillItem">
                                        <img src={i.image} />
                                        {i.title}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;