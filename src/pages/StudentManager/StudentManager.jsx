
import './StudentManager.css'
import stm0 from '../../assets/img/stm0.png'
import logo_vue from '../../assets/img/vue.png'
import logo_php from '../../assets/img/php.png'
import logo_bootstrap from '../../assets/img/bootstrap.png'
import logo_mysql from '../../assets/img/mysql.png'
import TechItem from '../../components/TechItem/TechItem'
import stm1 from '../../assets/img/stm1.png'
import stm2 from '../../assets/img/stm2.png'
import stm4 from '../../assets/img/stm4.png'
import ProjectCard from '../../components/partials/ProjectCard'
import boxy from './../../assets/img/boxy.png';
import paie_app from './../../assets/img/paie-app.png';
import ecom from './../../assets/img/ecom1.png'

export default function StudentManager() {

  const techs = [
    {
      name: "PHP",
      logo: logo_php,
      alt_img: "php"
    },
    {
      name: "Vue JS",
      logo: logo_vue,
      alt_img: "Vue JS"
    },
    {
      name: "Bootstrap 5",
      logo: logo_bootstrap,
      alt_img: "Bootstrap 5"
    },
    {
      name: "MySQL",
      logo: logo_mysql,
      alt_img: "MySQL"
    },
  ]

  return (
    <section id="projects" className='project'>
      <h1>GESTION DES ETUDIANTS AU SEIN DE LA MENCTION TELECOM IES-AV</h1>
      <div className="content">
        <div className='image-container'>
          <img src={stm0} alt="Application de fiche de paie" />
        </div>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"><i className="fa-brands fa-github"></i> Lien github du projet</a>
        <h2>Technologie utilisé</h2>
        <div className="tech-grid">
          {techs.map(({ name, logo, alt_img }, index) => (
            <TechItem key={index} name={name} logo={logo} alt_img={alt_img} />
          ))}

        </div>
        <div className="description">

          <h2>Description du projet</h2>
          <p>
            Il s'agit de mon projet de fin d'étude en vue de l'obtention du diplôme de Lincense en Télécommunincation dans la quelle j'ai opté pour la conception et la réalisation d'une application web de gestion des étudiants au sein de la mention Télécommunication.
          </p>
        </div>
        <div className="features">
          <h2>Fonctionnalités</h2>
          <p>
            <span className='feature-title'>Gestion des étudiants: </span>
            Permet à l’administrateur de consulter la liste des étudiants, d’ajouter, modifier ou supprimer un étudiant au niveau de l’application.
          </p>
          <p>
            <span className='feature-title'>Gestion des matières: </span>
            Permet à l’administrateur de consulter la liste des matières, d’ajouter, modifier ou supprimer une matière au sein de la plateforme et de gérer l’unité d‘enseignement UE.
          </p>
          <p>
            <span className='feature-title'>Gestion des notes: </span>
            Permet à l’administrateur de consulter la liste des notes, d’ajouter, modifier ou supprimer une note au niveau de l’application.
          </p>
          <p>
            <span className='feature-title'>Gestion des emplois du temps & salles: </span>
            Ce cas d’utilisation permet à l’administrateur principal d’ajouter un emploi du temps chaque semaine pour tous les niveaux, de supprimer un emploi du temps et de gérer les salles.
          </p>


        </div>
        <div className="capture">
          <h2>Capture d'ecrans</h2>
          <div className='image-container'>
            <img src={stm0} alt="Application de fiche de paie" />
          </div>
          <div className='image-container'>
            <img src={stm1} alt="Application de fiche de paie" />
          </div>
          <div className='image-container'>
            <img src={stm2} alt="Application de fiche de paie" />
          </div>
          <div className='image-container' style={{ background: "white" }}>
            <img src={stm4} alt="Application de fiche de paie" />
          </div>
        </div>

      </div>
      <div className='other'>
        <h2>Autres projets</h2>
        <ProjectCard
          image={boxy}
          title="BOXY GENERATOR"
          description="Application de génération de box shadow React"
          link="https://fenoherym.github.io/react-boxy-generator/"
          isExternalLink={true}

        />
        <ProjectCard
          image={paie_app}
          title="GESTION DE PAIE"
          description="Application de Gestion de paie Laravel-Vue.js"
          link="/projects/payroll-management"
        />
        <ProjectCard
          image={ecom}
          title="O-TELECOM SHOP"
          description="Site E-commerce de vente d'outils télécom"
          link="/projects/o-telecom"
        />
      </div>


    </section>
  )
}
