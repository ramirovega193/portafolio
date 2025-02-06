import "./pres.css"
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import yo from "./../../assets/presentacion/yo.jpg"

// eslint-disable-next-line react/prop-types
export default function Presentacion({Leg}){

    return<>
    <div className="presen">
        <div className="titles">
            <h1 id="Nombre">Ramiro <span>Vega</span></h1>
            {Leg ? <h2 id="Tecnico">IT <span>technician</span></h2> : <h2 id="Tecnico">Técnico en <span>informática</span></h2>}
            {Leg ? <h3 id="Dev">Web <span>Developer</span></h3> : <h3 id="Dev">Desarrollador <span>Web</span></h3>}
            <div className="icons">
                <a href="mailto:ramirovega226@gmail.com" target="_blank"><div className="icon" id="Mail">
                    <IoMdMail size={35}/>
                </div></a>
                <a href="https://www.linkedin.com/in/ramiro-vega-b463a6304/" target="_blank" ><div className="icon" id="Linkedin">
                    <FaLinkedin size={35}/>
                </div></a>
                <a href="https://github.com/ramirovega193" target="_blank"><div className="icon" id="Github">
                    <FaGithubSquare size={35}/>
                </div></a>
                <a href="" download="RamiroVegaCV"><div className="icon" id="CV">
                    <FaFileDownload size={35}/> {Leg ? "Download CV" : "Descargar CV"}
                </div></a>
            </div>
        </div>
        <div className="image" id="Imagen">
            <img src={yo} alt="yo" />
        </div>
    </div>
    </>
}