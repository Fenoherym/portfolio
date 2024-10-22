import logo_react from '../assets/img/react.png'
import logo_laravel from '../assets/img/laravel.png'
import logo_vue from '../assets/img/vue.png'
import logo_tailwind from '../assets/img/tailwind.png'
import logo_php from '../assets/img/php.png'
import logo_react_native from '../assets/img/react_native.png'

export default function Techno() {
    return (
        <section id="technologies" className="technologies">
            <h2>Technologies</h2>
            <div className="tech-grid">
                <div className="tech-item">
                    React
                    <img src={logo_react} alt="" />
                </div>
                <div className="tech-item">
                    Laravel
                    <img src={logo_laravel} alt="" />
                </div>
                <div className="tech-item">
                    Vue
                    <img src={logo_vue} alt="" />
                </div>                
                <div className="tech-item">
                    PHP
                    <img src={logo_php} alt="" />
                </div>                
                <div className="tech-item">
                    Tailwind
                    <img src={logo_tailwind} alt="" />
                </div>                
                <div className="tech-item">
                    React native
                    <img src={logo_react_native} alt="" />
                </div>                
            </div>
        </section>
    )
}
