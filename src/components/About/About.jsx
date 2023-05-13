import React from "react";
import styles from "./About.module.css"
import img from "../../img/fotocreador.jpg"
const About = ()=> {
    return (
        <div className={styles.Container}>
            <div className={styles.perfilContainer}>
                <div className={styles.fotoPerfilContainer}>
                    <img src={img} alt="Fotografia del Autor"/>
                    <span>Fernando (Chino) Adrogue</span>
                </div>
                <span>
                    <p>Estudiante del BootCamp Full Stack de Henry, actualmente cursando el M2, nació en Uruguay el 21/12/1973, llego a la argentina en el 74' y vivió en Buenos Aires hasta los 6 años, cuando su familia se mudó a un pequeño pueblito del interior.</p>
                    <p>A los 10 años tomo contacto con su primera computadora, una Ti99 con 48kB de memoria que se programaba en BASIC, ante la imposibilidad de acceder a programas enlatados se propuso la misión de programar el ordenador el mismo. Luego de un año de contratiempos y frustraciones logro desarrollar un juego de plataforma basado en sprites</p>
                </span>
            </div>
            <div className={styles.description}>Técnico Electromecanico, técnico automotriz, Docente y aficionado a la tecnologia. Con casi 50 años decide iniciar una carrera como programador profesional en Henry.<br/> Esta página, referida a la serie animada Rick & Morty, es parte de las homeworks propuestas por Henry para el cursado del M2</div>
        </div>
    )
}

export default About