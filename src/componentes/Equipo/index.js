import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"

const Equipos = (props) => {

    const { colorSecundario, colorPrimario, titulo, id} = props.datos
    const { colaboradores , elimnarColaborador,actualizarColorEquipo,like} = props;

    const obj = {
        backgroundColor:hexToRgba(colorPrimario,0.6) 
    }

    const bord = {
        borderColor: colorPrimario
    }


    return <> 
        {colaboradores.length > 0 &&
            <section className="equiposSec" style={obj}>
                <input
                    className="input-color"
                    type="color"
                    value={colorPrimario}
                    onChange={ (event) => {
                        actualizarColorEquipo(event.target.value,id)
                    }}
                />
                <h3 style={bord}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => {
                            return <Colaborador 
                                datos={colaborador} 
                                key={index} 
                                colorPrimario={colorPrimario}
                                elimnarColaborador={elimnarColaborador}
                                like={like}
                            />
                        })
                    }
                </div>
            </section>
        }
    </>
}

export default Equipos;