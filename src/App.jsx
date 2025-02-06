import { useState } from 'react'
import './App.css'
import Navbar from './components/nav/navbar'
import Presentacion from './components/presentacion/presentacion'
import Perfil from './components/perfil/prefil'
import Trayectoria from './components/trayectoria/trayect'
import Proyectos from './components/Proyectos/proyec'
import Habilidades from './components/habilidades/habil'

function App() {

  const [leg,setLeg] = useState(false)

  const cambiarIdioma = () =>{
    setLeg(!leg)
  }

  return (
    <>
      <nav>
        <Navbar Leg={leg} />
      </nav>
      <main>
        <div className="margen">
          <div className="idioma">
            <span>ES</span>
            <label className="switch">
              <input type="checkbox" onClick={cambiarIdioma}/>
              <span className="slider round"></span>
            </label>
            <span>EN</span>
          </div>
          <Presentacion Leg={leg}/>
          <Perfil Leg= {leg} />
          <Trayectoria Leg={leg}/>
          <Proyectos Leg={leg} />
          <Habilidades Leg={leg}/>
        </div>
      </main>
      
    </>
  )
}

export default App
