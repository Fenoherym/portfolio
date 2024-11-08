import './Footer.css'

export default function Footer() {
  return (
    <footer>
        <p>&copy; {new Date().getFullYear()} Rakotoniaina. Tous droits réservés.</p>
        <div className="social-links">
            <a href="https://www.linkedin.com/in/fenohery-rakotoniaina-b20193334/" 
               target="_blank" 
               rel="noopener noreferrer" 
               aria-label="LinkedIn">
               <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Fenoherym" 
               target="_blank" 
               rel="noopener noreferrer" 
               aria-label="GitHub">
               <i className="fab fa-github"></i>
            </a>
            <a href="https://x.com/fenoherym10" 
               target="_blank" 
               rel="noopener noreferrer" 
               aria-label="Twitter">
               <i className="fab fa-twitter"></i>
            </a>
        </div>
    </footer>
  )
}
