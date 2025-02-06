import "./proyec.css"
import { ProBox , MiniBox } from "./probox"
import escuela from "../../assets/proyectos/escuela.webp"
import rpmeter from "../../assets/proyectos/rpmeter.webp"
import trello from "../../assets/proyectos/trello.webp"
import bingo from "../../assets/proyectos/bingo.webp"
import clima from "../../assets/proyectos/clima.webp"

// eslint-disable-next-line react/prop-types
export default function Proyectos({Leg}){

    return<div className="Proyec" id="Proyectos">

        {Leg ? 
        
        <h2>My <span>projects</span></h2>

        :
    
        <h2>Mis <span>proyectos</span></h2>
    
        }
        {Leg ? 
            //en
            <div className="contbox">

                <ProBox img={escuela} title="School page" link="https://www.eest2sn.edu.ar/" tec="Technologies: React, Github,Figma" description="This was a school project done in a group of 4 people. It consists of a page for the school where I studied. I did a large part of the front-end of the page. Also help with some of the design. We used React.js with Vite."/>

                <ProBox img={rpmeter} title="RPMeter" link="https://rpmapp.netlify.app/" tec="Technologies: React,Electron,Github,Arduino,Figma" description="This was an end-of-course school project done by 2 people. It consists of software for an inertial roller test bench. Basically, it calculates the power of an engine from the rotation speed of a roller. The program collects this information through an Arduino and a Hall effect sensor and performs the calculations. I did all the front-end and the application with Electron. js and programmed the Arduino. Make the design in Figma."/>

                <div className="contMiniBox">
                    <MiniBox title="Weather app" img={clima} link="https://github.com/ramirovega193/weatherapp" tech="Technologies: React Native"/>
                    <MiniBox title="Trello clone" img={trello} link="https://v-oard.netlify.app/" tech="Technologies: React"/>
                    <MiniBox title="Bingo!" img={bingo} link="https://juegos-de-azar.netlify.app/" tech="Technologies: React"/>
                </div>

            </div>

            :
            //es
            <div className="contbox">
                
                <ProBox img={escuela} title="Pagina de la escuela" link="https://www.eest2sn.edu.ar/" tec="Tecnologías: React, Github, Figma" description="Este fue un proyecto escolar hecho en grupo de 4 personas. Consta de una pagina para la escuela donde estudie. Realice gran parte del front-end de la pagina, también ayude con parte del diseño. Utilizamos React.js con Vite. Actualmente la pagina se encuentra en uso."/>

                <ProBox img={rpmeter} title="RPMeter" link="https://rpmapp.netlify.app/" tec="Tecnologías: React,Electron,Github,Arduino,Figma" description="Este fue un proyecto escolar de fin de curso hecho por 2 personas. Consta de un software para un banco de pruebas inercial de rodillo. Básicamente, calcula la potencia de un motor a partir de la velocidad de rotación de un rodillo, el programa recopila esa información mediante un Arduino y un sensor de efecto Hall y realiza los cálculos. Realice todo el front-end y la aplicación con Electron.js y programé el Arduino, también hice todo el diseño en Figma."/>

                <div className="contMiniBox">
                    <MiniBox title="App del clima" img={clima} link="https://github.com/ramirovega193/weatherapp" tech="Tecnologías: React Native"/>
                    <MiniBox title="Trello clon" img={trello} link="https://v-oard.netlify.app/" tech="Tecnologías: React"/>
                    <MiniBox title="Bingo!" img={bingo} link="https://juegos-de-azar.netlify.app/" tech="Tecnologías: React"/>
                </div>
            </div>
        }

    </div>

}