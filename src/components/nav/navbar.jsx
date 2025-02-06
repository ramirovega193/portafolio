import "./navbar.css"
import { GiJourney } from "react-icons/gi";
import { PiProjectorScreen } from "react-icons/pi";
import { FaGear } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
export default function Navbar({Leg}){


    return<div className="nav" >
        <div className="icons-nav">
            <a href="#Trayectoria"><div className="icon-nav" id="TrayectoriaNav">
                <GiJourney size={40} />
                <span className="icon-text-nav">{Leg ? "Work History" : "Trayectoria"}</span>
            </div></a>
            <a href="#Proyectos"><div className="icon-nav" id="ProyectosNav">
                <PiProjectorScreen />
                <span className="icon-text-nav">{Leg ? "Projects" : "Proyectos"}</span>
            </div></a>
            <a href="#Habilidades"><div id="HabilidadesNav" className="icon-nav">
                <FaGear />
                <span className="icon-text-nav">{Leg ? "Technical skills" : "Habilidades"}</span>
            </div></a>
        </div>
    </div>

}