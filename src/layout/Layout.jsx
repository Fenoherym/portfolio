import { useEffect, useState } from "react"
import ThemeToggleButton from "../components/partials/ThemeToggleButton";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import ScrollTopButton from "../components/ScrollTopButton/ScrollTopButton";


export default function Layout() {

    const [theme, setTheme] = useState('')
    const [activeMenu, setActiveMenu] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            setTheme(currentTheme)
            document.body.classList.add(currentTheme);
        }

        // Intersection Observer pour détecter la section active
        const sections = document.querySelectorAll("section");
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5 // 50% de la section visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, [])

    function themeToggle() {
        if (theme === 'light-mode') {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark-mode');
            setTheme('dark-mode')
            console.log('dark')
        } else {
            document.body.classList.add('light-mode');
            setTheme('light-mode')
            localStorage.setItem('theme', 'light-mode');
            console.log('light')
        }
    }

    function menuToggle() {
        setActiveMenu(!activeMenu)
    }

    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setActiveMenu(false);
    };

    return (
        <>
            <header>
                <nav>
                    <div className="logo" dangerouslySetInnerHTML={{ __html: "&lt;Fenohery /&gt;" }}/>
                    <ul className={`nav-links ${activeMenu ? 'active' : ''}`}>
                        <li>
                            <Link 
                                onClick={() => scrollToSection('home')}
                                className={activeSection === 'home' ? 'active' : ''}>
                                    Accueil
                            </Link>
                        </li>
                        <li>
                            <Link 
                                onClick={() => scrollToSection('about')}
                                className={activeSection === 'about' ? 'active' : ''}>
                                    A-propos
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => scrollToSection('technologies')} 
                                className={activeSection === 'technologies' ? 'active' : ''}>
                                Compétences
                            </Link>
                        </li>
                        <li>
                            <Link 
                                onClick={() => scrollToSection('projects')} 
                                 className={activeSection === 'projects' || location.pathname.includes('/projects') ? 'active' : ''}>
                                Projets
                            </Link>
                        </li>
                        <li>
                            <Link 
                                onClick={() => scrollToSection('contact')} 
                                className={activeSection === 'contact' ? 'active' : ''}>
                                    Contactez Moi
                            </Link>
                        </li>
                    </ul> 
                    <div className="nav-buttons">
                        <ThemeToggleButton themeToggle={themeToggle} />
                    </div>
                    <div className={`menu-toggle ${activeMenu ? 'active' : ''}`} onClick={menuToggle}>
                        <i className="fa-solid fa-bars"></i>
                    </div>

                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
            <ScrollTopButton /> 
        </>
    )
}