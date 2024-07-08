import "./MiOrg.css"

const MiOrg = (props) => {

    return <section className="orgsection">
        <h3 className="title">Mi Organización</h3>
        <img onClick={props.cambiarMostrar} src="/img/add.png" alt="add"/>
    </section>
}

export default MiOrg;