import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo/Campo.js"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario=(props)=>{
    const [nombre,actualizarNombre] = useState("");
    const [puesto,actualizarPuesto] = useState("");
    const [foto,actualizarFoto] = useState("");
    const [equipo,actualizarEquipo] = useState("");

    const [titulo,actualizarTitulo] = useState("");
    const [color,actualizarColor]=useState("");

    const { crearEquipo }=props;

    const ManejarEnvio = (event) => {
        event.preventDefault();
        let datosAEnviar={
            nombre,
            puesto,
            foto,
            equipo
        }
        props.registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (event) => {
        event.preventDefault();
        crearEquipo({titulo,colorPrimario:color})
    }

    return <section className="formulario">
        <form onSubmit={ManejarEnvio}>
            <h2>Rellena el formulario para crear un colaborador</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresa nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresa puesto" 
                required 
                valor={puesto} 
                actualizarValor={actualizarPuesto}
            />
            <Campo 
                titulo="Foto"   
                placeholder="Ingresa enlace de Foto" 
                valor={foto} 
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton texto="Crear"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear un Equipo</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresar Titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresa el color en hexadecimal" 
                required 
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton texto="Registar Equipo"/>
        </form>
    </section>
}

export default Formulario