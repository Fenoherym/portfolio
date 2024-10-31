import './Footer.css'

export default function Footer() {
  return (
    <footer>
        <p>&copy; {new Date().getFullYear()} Rakotoniaina. Tous droits réservés.</p>
        <div className="social-links">
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        </div>
    </footer>
  )
}
