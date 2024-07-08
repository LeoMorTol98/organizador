import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/index.js';
import Equipos from './componentes/Equipo/index.js';
import Footer from './componentes/Footer/index.js';

function App() {
  const [mostrarFormulario,actualizarMostar] = useState(true);
  const [colaboradores,actualizarColaboradores] = useState([
    {
      id:uuidv4(),
      nombre:"Leonardo",
      puesto:"Jefe",
      foto:"https://github.com/LeoMorTol98.png",
      equipo:"DevOps",
      fav:false
    },
    {
      id:uuidv4(),
      nombre:"Leo",
      puesto:"Jefazo",
      foto:"https://github.com/LeoMorTol98.png",
      equipo:"Front End",
      fav:false
    }
  ]);
  const [equipos,actualizarEquipos]=useState([
    {
      id:uuidv4(),
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9",
    },
    {
      id:uuidv4(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id:uuidv4(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      id:uuidv4(),
      titulo:"DevOps",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      id:uuidv4(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id:uuidv4(),
      titulo:"Movil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      id:uuidv4(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FFBA29",
      colorSecundario:"#FFEEDF"
    }
  ])


  const cambiarMostrar = () => {
    actualizarMostar(!mostrarFormulario);
  }

  const registrarColaborador= (colaborador) => {
    //Spread operator (Crear una copia y trabajar con esa copia)
    actualizarColaboradores([...colaboradores,colaborador])
  }

  const elimnarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter( (colaborador) => colaborador.id !== id )
    actualizarColaboradores(nuevosColaboradores)
  }

  const actualizarColorEquipo = (color,id) => {
    const equiposActualizados=equipos.map( (equipo) => {
      if (equipo.id === id){
        equipo.colorPrimario=color;
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos,{...nuevoEquipo, id: uuidv4() }])
  }

  const like= (id) => {
    const colaboresActualizados=colaboradores.map( (colaborador) => {
      if(colaborador.id===id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboresActualizados)
  }


  return (
    <div className="App">
      <Header/>
      { /*mostrarFormulario ?  <Formulario/> : <></>*/ }
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo)=>equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
          />
      }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {equipos.map( (equipo) => {
        return <Equipos datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )}
        elimnarColaborador={elimnarColaborador}
        actualizarColorEquipo={actualizarColorEquipo}
        like={like}
        />
      } )}

      <Footer/>

    </div>
  );
}

export default App;
