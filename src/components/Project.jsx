import ProjectCard from "./partials/ProjectCard";
import boxy from './../assets/img/boxy.png';
import paie_app from './../assets/img/paie-app.png';
import stm0 from './../assets/img/stm0.png'

export default function Project() {
  return (
    <section id="projects" className='projects'> 
       <h2>Selected projects</h2>  
       <div className="cards">
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
             title="Gestion des étudiants" 
             description="Application de Gestion de étudiants PHP"
             link="/projects/student-manager"
          />
          
        </div>     
    </section>
  )
}
