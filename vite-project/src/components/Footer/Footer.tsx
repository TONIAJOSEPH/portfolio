import { Link } from "react-scroll";
import "./Footer.css"
import linkedinIcon from "../../assets/linkedin.svg"
import gmailIcon from "../../assets/gmail.svg"
import githubIcon from "../../assets/github.svg"


const Footer: React.FC = () => {
    return (
        <div className="footerWrapper" id="footer">
            <div className="container">
                <div className="row footer">
                    <h3 className="col-md-12 mt-5">Tonia Joseph</h3>
                    <div className="col-md-12 mt-4 linkSection">
                        <ul>
                            <li><a href="https://www.linkedin.com/in/tonia-joseph-672328135/" target="_blank"><img src={linkedinIcon} /></a></li>
                            <li><a href="https://github.com/TONIAJOSEPH" target="_blank"><img src={githubIcon} /></a></li>
                            <li><a href="mailto:email@example.com"><img src={gmailIcon} /></a></li>
                        </ul>
                    </div>
                    <div className="col-md-12 navLinks">
                        <ul>
                            <li> <Link to="about">About</Link></li>
                            <li><Link to="skills">Skills</Link></li>
                            <li><Link to="exp">Experience</Link></li>
                            <li><Link to="project">Projects</Link></li>
                            <li><Link to="edu">Education</Link></li>
                            <li><Link to="contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="copyright">
                        &copy; 2025 Tonia Joseph.All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;