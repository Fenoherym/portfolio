import React from 'react'
import './FichePaie.css'
import paie_app from '../../assets/img/paie-app.png'
import paie_app2 from '../../assets/img/paie-app2.png'
import paie_app3  from '../../assets/img/paie-app3.png'
import logo_vue from '../../assets/img/vue.png'
import logo_laravel from '../../assets/img/laravel.png'
import logo_bootstrap from '../../assets/img/bootstrap.png'
import logo_mysql from '../../assets/img/mysql.png'
import TechItem from '../../components/TechItem/TechItem'
import ProjectCard from '../../components/partials/ProjectCard'
import boxy from './../../assets/img/boxy.png';
import stm0 from '../../assets/img/stm0.png'
import ecom from './../../assets/img/ecom1.png'

export default function FichePaie() {

  const techs = [
    {
      name: "Laravel",
      logo: logo_laravel,
      alt_img: "laravel"
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

      <h1>Gestion de paie Laravel - Vue.js</h1>
      <div className="content">
        <div className='image-container'>
          <img src={paie_app} alt="Application de fiche de paie" />
        </div>
        <a
          href="https://github.com/Fenoherym/fiche-paie-laravel-Inertia-vue-js"
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
            Il s'agit d'un projet de stage chez Open-Data Madagascar, ou j'ai contribué à la conception et réalsation d'une application web de gestion de paie
          </p>
        </div>
        <div className="features">
          <h2>Fonctionnalités</h2>
          <p>
            <span className='feature-title'>Gestion des employés: </span>
            Cette fonctionnalité permet d'ajouter, modifier et supprimer les informations des employés. Elle comprend la gestion des données personnelles, des contrats, des postes occupés et des informations bancaires. Le système permet également de suivre l'historique des modifications et de générer des rapports sur les effectifs.
          </p>
          <p>
            <span className='feature-title'>Gestion de paie: </span>
            Module central permettant de calculer et gérer les salaires des employés. Il prend en compte les heures travaillées, les primes, les indemnités, les cotisations sociales et les impôts. Le système génère automatiquement les fiches de paie et permet l'export des données pour la comptabilité.
          </p>
          <p>
            <span className='feature-title'>Gestion des absences: </span>
            Cette fonction permet de suivre et gérer les absences du personnel. Elle inclut un système de validation des demandes d'absence, le suivi des justificatifs, le calcul automatique des impacts sur la paie et la génération de statistiques d'absentéisme.
          </p>
          <p>
            <span className='feature-title'>Gestion des congés: </span>
            Système complet de gestion des congés permettant aux employés de soumettre leurs demandes en ligne. Il calcule automatiquement les soldes de congés, gère les validations hiérarchiques, et permet le planning des absences pour optimiser l'organisation du travail.
          </p>

        </div>
        <div className="capture">
          <h2>Capture d'ecrans</h2>
          <div className='image-container'>
            <img src={paie_app} alt="Application de fiche de paie" />
          </div>
          <div className='image-container'>
            <img src={paie_app2} alt="Application de fiche de paie" />
          </div>
          <div className='image-container'>
            <img src={paie_app3} alt="Application de fiche de paie" />
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
