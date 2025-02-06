import "./proyec.css"
import { CiShare1 } from "react-icons/ci";

// eslint-disable-next-line react/prop-types
export function ProBox({img,title,link,description,tec}){

    return<div className="box">

        <div className="top">
            <div className="left">
                <img src={img} alt="Proyecto" />
            </div>
            <div className="center">
                <h3>{title}</h3>
            </div>
            <div className="right">
                <a href={link} target="_blank"><CiShare1 size={70}/></a>
            </div>
        </div>
        <div className="bottom">
            <div className="first">   
                {description}
            </div>
            <div className="end">
                {tec}
            </div>
        </div>


    </div>
}

// eslint-disable-next-line  react/prop-types
export function MiniBox({img, title, link, tech}){

    return<a href={link} className="miniBoxA"><div className="miniBox"> 


        <h3>{title}</h3>
        <div className="imagen">
            <img src={img} alt="Proyecto" />
        </div>
        <div className="tec">
            {tech}
        </div>
    </div></a>

}