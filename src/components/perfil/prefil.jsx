import "./perfil.css"

// eslint-disable-next-line react/prop-types
export default function Perfil({Leg}){

    return<>
    <div className="perfil">
    
        {Leg ? 
        
        <h2>My professional <span>profile</span></h2>

        :
        <h2>Mi prefil <span>profesional</span></h2>
        }
        
        <div className="box">
            {Leg ? 
            
            <p>
                I am a IT Technician, graduated from Técnica 2 de San Nicolás, Argentina, a technical high school, with outstanding grades and a self-directed learning background alongside my secondary education. 
                <br />
                <br />
                I have worked on various personal and school projects, which allowed me to gain experience in FrontEnd development and strengthen my teamwork skills. Additionally, I participated in the Gen Técnico program, completing 216 hours of professional training at Ternium (metallurgical company), where I applied my knowledge in equipment maintenance and network installation. 
                <br />
                <br />
                I am currently studying Systems Engineering at UTN Regional San Nicolás.
            </p>
            
            : 
            
            <p>
                Soy Técnico en Informática Personal y Profesional, recibido en la Técnica 2 de San Nicolás, Argentina con destacados promedios y con una formación autodidacta en paralelo a mis estudios secundarios.
                <br />
                <br />
                He trabajado en diversos proyectos personales y escolares, lo que me permitió adquirir experiencia en programación FrontEnd y fortalecer mis habilidades en trabajo en equipo. Además, participé en el programa Gen Técnico,  realizando prácticas profesionalizantes en Ternium (empresa metalúrgica) por 216 horas, donde aplique mis conocimientos en mantenimiento de equipos e instalación de redes. 
                <br />
                <br />
                Actualmente estudio Ingeniería en sistemas en la UTN Regional de San Nicolás

            </p>
            }
        </div>

    </div>
    </>
}