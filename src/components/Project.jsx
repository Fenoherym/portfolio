import ProjectCard from "./partials/ProjectCard";
import boxy from './../assets/img/boxy.png';
import paie_app from './../assets/img/paie-app.png';
import stm0 from './../assets/img/stm0.png'
import ecom from './../assets/img/ecom1.png'

export default function Project() {
  return (
    <section id="projects" className='projects animate-fade-in'> 
       <h2>Projets selectionnés</h2>  
       <div className="cards animate-slide-up">
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
             image={stm0}
             title="GESTION ETUDIANTS" 
             description="Application de Gestion de étudiants PHP"
             link="/projects/student-manager"
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
