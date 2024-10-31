import React from 'react'
import './FichePaie.css'
import paie_app from '../../assets/img/paie-app.png'
import logo_vue from '../../assets/img/vue.png'
import logo_laravel from '../../assets/img/laravel.png'
import logo_bootstrap from '../../assets/img/bootstrap.png'
import logo_mysql from '../../assets/img/mysql.png'
import TechItem from '../../components/TechItem/TechItem'

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
        <a href="#"><i className="fa-brands fa-github"></i> Lien github du projet</a>
        <h2>Technologie utilisé</h2>
        <div className="tech-grid">
          {techs.map(({ name, logo, alt_img }, index) => (
            <TechItem key={index} name={name} logo={logo} alt_img={alt_img} />
          ))}

        </div>
        <div className="description">

          <h2>Description du projet</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem commodi quia dignissimos laudantium ab cumque, nam, tempore laborum dolore hic aliquid facere architecto optio soluta dolorum atque ipsum vel distinctio. Eius dignissimos repudiandae officiis exercitationem, natus quos totam beatae omnis.
          </p>
        </div>
        <div className="features">
          <h2>Fonctionnalités</h2>
          <p>
            <span className='feature-title'>Lorem, ipsum dolor: </span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, est odio autem iste iusto obcaecati cupiditate commodi similique doloremque, dolorem sequi! Corrupti magni rem amet corporis, inventore architecto esse dolores, nulla suscipit harum veniam, expedita explicabo quam provident veritatis repudiandae impedit dolore aliquam voluptas illum reprehenderit dolorem non deserunt. Expedita.
          </p>
          <p>
            <span className='feature-title'>Lorem, ipsum dolor: </span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, est odio autem iste iusto obcaecati cupiditate commodi similique doloremque, dolorem sequi! Corrupti magni rem amet corporis, inventore architecto esse dolores, nulla suscipit harum veniam, expedita explicabo quam provident veritatis repudiandae impedit dolore aliquam voluptas illum reprehenderit dolorem non deserunt. Expedita.
          </p>
          <p>
            <span className='feature-title'>Lorem, ipsum dolor: </span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, est odio autem iste iusto obcaecati cupiditate commodi similique doloremque, dolorem sequi! Corrupti magni rem amet corporis, inventore architecto esse dolores, nulla suscipit harum veniam, expedita explicabo quam provident veritatis repudiandae impedit dolore aliquam voluptas illum reprehenderit dolorem non deserunt. Expedita.
          </p>

        </div>
        <div className="capture">
          <h2>Capture d'ecrans</h2>
          <div className='image-container'>
            <img src={paie_app} alt="Application de fiche de paie" />
          </div>
          <div className='image-container'>
            <img src={paie_app} alt="Application de fiche de paie" />
          </div>
          <div className='image-container'>
            <img src={paie_app} alt="Application de fiche de paie" />
          </div>
          <div className='image-container'>
            <img src={paie_app} alt="Application de fiche de paie" />
          </div>
        </div>

      </div>
    </section>
  )
}
