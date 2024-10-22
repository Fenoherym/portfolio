

import photo from "../assets/img/moi.png"
export default function About() {
    return (
        <section id="about" className="about">
            <h2>À propos de moi</h2>
            <div className="about-content">
                <img src={photo} alt="Fenohery Manjaka" className="about-image" />
                    <p>Je suis un passionné de design et de développement, avec une expérience dans la création d'interfaces utilisateur intuitives et esthétiques. Mon objectif est de créer des expériences utilisateur mémorables et fonctionnelles.</p>
            </div>
        </section>
    )
}
