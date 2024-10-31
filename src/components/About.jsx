import photo from "../assets/img/moi.png"
export default function About() {
    return (
        <section id="about" className="about">
            <h2>À propos de moi</h2>
            <div className="about-content">
                <img src={photo} alt="Fenohery Manjaka" className="about-image" />
                    <p>
                        Développeur web et mobile passionné, je me spécialise dans les technologies Laravel, Vue.js et React. Avec une approche axée sur l'innovation et l'efficacité, je m'efforce de transformer des idées complexes en solutions numériques simples et performantes. Mon objectif est de créer des expériences utilisateur exceptionnelles qui répondent aux besoins spécifiques de chaque projet. En dehors du code, je suis toujours à la recherche de nouvelles technologies et tendances pour rester à la pointe du développement.
                    </p>
            </div>
        </section>
    )
}
