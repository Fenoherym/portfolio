import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
    const [displayText, setDisplayText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    
    const greetings = [
        "SALUT 👋 JE SUIS",
        "HELLO 👋 I AM",
        "HOLA 👋 SOY",
        "HALLO 👋 ICH BIN",
       
    ]
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            const currentGreeting = greetings[currentIndex]
            
            if (!isDeleting && displayText.length < currentGreeting.length) {
                // Effet d'écriture
                setDisplayText(currentGreeting.slice(0, displayText.length + 1))
            } else if (!isDeleting && displayText.length === currentGreeting.length) {
                // Début de la suppression après un délai
                setTimeout(() => setIsDeleting(true), 2000)
            } else if (isDeleting && displayText.length > 0) {
                // Effet de suppression
                setDisplayText(currentGreeting.slice(0, displayText.length - 1))
            } else if (isDeleting && displayText.length === 0) {
                // Passage à la phrase suivante
                setIsDeleting(false)
                setCurrentIndex((prev) => (prev + 1) % greetings.length)
            }
        }, isDeleting ? 50 : 100) // Suppression plus rapide que l'écriture

        return () => clearTimeout(timer)
    }, [displayText, currentIndex, isDeleting])

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <p className="greeting typewriter">{displayText}</p>
                <h1>Fenohery Rakotoniaina</h1>
                <p className="job-title">Développeur Laravel & Vue.js | React 👨‍💻</p>
                <p className="description">
                    Passionné par la création de solutions numériques innovantes, je suis spécialisé en développement web et mobile avec Laravel, Vue.js et React. 
                </p>
                <Link
                onClick={() => scrollToSection("contact")}  
                 className="hire-me-button">Contactez-moi !</Link>
            </div>
        </section>
    )
}
