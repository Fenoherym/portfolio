import { useEffect, useState } from "react"
import ThemeToggleButton from "./partials/ThemeToggleButton";


export default function Header() {

    const [theme, setTheme] = useState('')
    const [activeMenu, setActiveMenu] = useState(false)

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            setTheme(currentTheme)
            document.body.classList.add(currentTheme);
        }

    }, [theme])

    function themeToggle() {
        if (theme === 'light-mode') {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark-mode');
            setTheme('dark-mode')
        } else {
            document.body.classList.add('light-mode');
            setTheme('')
            localStorage.setItem('theme', 'light-mode');
        }
    }

    function menuToggle() {
        setActiveMenu(!activeMenu)
    }
    
    return (
        <>
            <header>
                <nav>
                    <div className="logo">Fenohery</div>
                    <ul className={`nav-links ${activeMenu ? 'active' : ''}`}>
                        <li><a href="#home" className="active">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact Me</a></li>
                    </ul>
                    <div className="nav-buttons">
                        <ThemeToggleButton themeToggle={themeToggle} />
                    </div>
                    <div className={`menu-toggle ${activeMenu ? 'active' : ''}`} onClick={menuToggle}>
                        <i className="fa-solid fa-bars"></i>
                    </div>

                </nav>
            </header>
        </>
    )
}
