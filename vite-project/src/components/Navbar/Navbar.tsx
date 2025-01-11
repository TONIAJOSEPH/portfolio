import "./Navbar.css"
import JustifyIcon from "../../assets/alignJustify.svg"
import { useState } from "react"
import {Link} from "react-scroll"

const Navbar:React.FC=()=>{
  const [toggleDiv,setToggleDiv]=useState(false)
  
return (
<div className="navbarWrapper">
  <div className="container">
  <div className="row">
    <div className="navContent">
    <div className="col-md-2 col-6">
      <h6 className="profileName">TONIA JOSEPH</h6>
    </div>
    <div className="col-md-8 col-6">  
      <div className="navbarToggle" onClick={()=>setToggleDiv(!toggleDiv)}>
        <img src={JustifyIcon}/>
      </div>
      {toggleDiv && (
        <ul className="navbarItem navbarItemMobile">
          <li> <Link to="about">About</Link></li>
          <li><Link to="skills">Skills</Link></li>
          <li><Link to="exp">Experience</Link></li>
          <li><Link to="project">Projects</Link></li>
          <li><Link to="edu">Education</Link></li>
          <li><button className="navProfileButton"><a href="https://github.com/TONIAJOSEPH" target="_blank">GITHUB profile</a></button></li>
        </ul>
      )}
       <ul className="navbarItem navbarItemDesktop">
       <li> <Link to="about">About</Link></li>
          <li><Link to="skills">Skills</Link></li>
          <li><Link to="exp">Experience</Link></li>
          <li><Link to="project">Projects</Link></li>
          <li><Link to="edu">Education</Link></li>
        </ul>      
    </div>
    <div className="col-md-2">
    <button className="navProfileButton"><a href="https://github.com/TONIAJOSEPH" target="_blank">GITHUB profile</a></button>
    </div>
    </div>
  </div>  
</div>
</div>
)
}
export default Navbar;

