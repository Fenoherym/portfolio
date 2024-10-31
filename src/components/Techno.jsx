import logo_react from '../assets/img/react.png'
import logo_laravel from '../assets/img/laravel.png'
import logo_vue from '../assets/img/vue.png'
import logo_tailwind from '../assets/img/tailwind.png'
import logo_php from '../assets/img/php.png'
import logo_react_native from '../assets/img/reactnative.png'
import TechItem from './TechItem/TechItem'

export default function Techno() {

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
            name: "React",
            logo: logo_react,
            alt_img: "React"
        },
        {
            name: "PHP",
            logo: logo_php,
            alt_img: "PHP"
        },
        {
            name: "Tailwind",
            logo: logo_tailwind,
            alt_img: "Tailwind"
        },
        {
            name: "React Native",
            logo: logo_react_native,
            alt_img: "React Native"
        },
      ]

    return (
        <section id="technologies" className="technologies">
            <h2>Technologies</h2>
            <div className="tech-grid">
                {techs.map(({name, logo, alt_img}, index) => (
                    <TechItem name={name} logo={logo} alt_img={alt_img} key={index} />
                ))}               
            </div>
        </section>
    )
}
