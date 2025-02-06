import "./trayect.css"
import TrayectBox from "./traBox"


// eslint-disable-next-line react/prop-types
export default function Trayectoria({Leg}){

    return<>
        <div className="Trayect" id="Trayectoria">
            {Leg ? 
        
            <h2>My <span>work history</span></h2>

            :
        
            <h2>Mi <span>trayectoria</span></h2>
        
            }
            {Leg ? 
            
            <div className="cont">
                <TrayectBox place="EEST Nº2, San Nicolás" type="Studies" date="2018-2024"/>
                <TrayectBox place="Ternium Argentina" type="Internship" date="216hs"/>
                <TrayectBox place="UTN, San Nicolas" type="Studies" date="2025-ACT."/>
            </div>
            
            
            :
            
            <div className="cont">
                <TrayectBox place="EEST Nº2, San Nicolás" type="Estudios" date="2018-2024"/>
                <TrayectBox place="Ternium Argentina" type="Pasantía" date="216hs"/>
                <TrayectBox place="UTN, San Nicolas" type="Estudios" date="2025-ACT."/>
            </div>
            
            }
            
        </div>
    </>
}