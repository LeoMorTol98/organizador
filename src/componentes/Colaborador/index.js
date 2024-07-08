import "./Colaborador.css"
import { IoIosCloseCircle } from "react-icons/io"
import { FaRegHeart,FaHeart } from "react-icons/fa6";

const Colaborador = (props) => {
const {nombre,puesto,foto,equipo,id,fav}=props.datos;
const {colorPrimario,elimnarColaborador,like}=props;

    return <div className="contenedor-colab">
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <IoIosCloseCircle className="eliminar" onClick={ () => elimnarColaborador(id)}/>
            <img src={foto} alt={nombre}></img>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <FaHeart color="red" onClick={() => like(id)}/> : <FaRegHeart onClick={() => like(id)}/>}
        </div>
    </div>
}

export default Colaborador