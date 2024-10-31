import { Link } from 'react-router-dom';
import './ProjectCard.css'; // Ajout d'un fichier CSS pour les styles

export default function ProjectCard({ image, title, description, link, isExternalLink = false }) {
  return (
    <Link to={link}   
      target={isExternalLink ? "_blank" : "_self"}
      rel={isExternalLink ? "noopener noreferrer" : undefined}
    
    >
        <div className='card'>
            <img src={image} alt="" className='card-image' />
            <div className='card-content'>
                <h3 className='card-title'>{title}</h3>
                <p className='card-description'>{description}</p>
                {/* <a href="#" className='card-link'>Voir le projet</a> Lien vers le projet */}
            </div>
        </div>
    </Link>
  )
}
