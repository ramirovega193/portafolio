import "./habil.css"
import {HabilBox , HabilBox2} from "./habilbox";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { GrServerCluster } from "react-icons/gr";
import { FaTools } from "react-icons/fa";


// eslint-disable-next-line react/prop-types
export default function Habilidades({Leg}){


    return<>
        
        <div className="habil" id="Habilidades">

            {Leg ? 
                <h2>My <span>skills</span></h2>

                :
    
                <h2>Mis <span>Habilidades</span></h2>
            }

            <div className="contHabilBoxes">
            <div className="habilBoxes">

                <span id="html"><HabilBox icon={<FaHtml5 size={60}/>} title="HTML"/></span>
                <span id="css"><HabilBox icon={<FaCss3Alt size={60}/>} title="CSS" /></span>
                <span id="js"><HabilBox icon={<FaJs size={60}/>} title="JavaScript" /></span>

            </div>
            <div className="habilBoxes">

                <span id="react"><HabilBox icon={<FaReact size={60}/>} title="React.js" /></span>
                <span id="git"><HabilBox icon={<FaGitAlt size={60}/>} title="Git" /></span>
                <span id="figma"><HabilBox icon={<IoLogoFigma size={60}/>} title="Figma" /></span>

            </div>
                {Leg ? 
                <div className="habilBoxes2">
                    <span id="net"><HabilBox2 icon={<GrServerCluster size={60}/>} title="Network installation" /></span>
                    <span id="mant"><HabilBox2 icon={<FaTools size={60}/>} title="Maintenance" /></span>
                </div>
                :
                <div className="habilBoxes2">
                    <span id="net"><HabilBox2 icon={<GrServerCluster size={60}/>} title="instalación de Redes" /></span>
                    <span id="mant"><HabilBox2 icon={<FaTools size={60}/>} title="Mantenimiento" /></span>
                </div>
                }
            </div>
        </div>
    </>

}