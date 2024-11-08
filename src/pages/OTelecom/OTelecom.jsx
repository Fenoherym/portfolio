import './OTelecom.css'
import stm0 from '../../assets/img/stm0.png'
import logo_laravel from '../../assets/img/laravel.png'
import logo_php from '../../assets/img/php.png'
import logo_bootstrap from '../../assets/img/bootstrap.png'
import logo_mysql from '../../assets/img/mysql.png'
import TechItem from '../../components/TechItem/TechItem'
import ecom1 from '../../assets/img/ecom1.png'
import ecom2 from '../../assets/img/ecom2.png'
import ecom3 from '../../assets/img/ecom3.png'
import ecom4 from '../../assets/img/ecom4.png'
import boxy from './../../assets/img/boxy.png';
import ecom from './../../assets/img/ecom1.png'
import ProjectCard from '../../components/partials/ProjectCard'
import paie_app from './../../assets/img/paie-app.png';


export default function OTelecom() {


    const techs = [
        {
            name: "PHP",
            logo: logo_php,
            alt_img: "php"
        },
        {
            name: "Laravel",
            logo: logo_laravel,
            alt_img: "Laravel"
        },
        {
            name: "Bootstrap",
            logo: logo_bootstrap,
            alt_img: "Bootstrap"
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
                    <img src={ecom1} alt="Site e-commerce d'outils de télécom" />
                </div>
                <a
                    href="https://github.com/Fenoherym/ecommerce"
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
                        Site e-commerce spécialisé dans la vente d'équipements et d'outils de télécommunication. Développé avec Laravel et Bootstrap, ce projet offre une interface utilisateur intuitive permettant aux clients de parcourir, rechercher et acheter facilement des produits télécoms. Le site intègre un système de paiement sécurisé via Stripe et propose une gestion complète du processus d'achat.
                    </p>
                </div>
                <div className="features">
                    <h2>Fonctionnalités</h2>
                    <p>
                        <span className='feature-title'>Boutique de produits télécoms: </span>
                        Interface de navigation ergonomique permettant aux utilisateurs de consulter les différents produits télécoms disponibles. Chaque produit dispose d'une fiche détaillée incluant des images, une description complète, les spécifications techniques et le prix. Le système inclut également une fonction de recherche avancée pour faciliter la découverte des produits.
                    </p>
                    <p>
                        <span className='feature-title'>Système de panier: </span>
                        Panier d'achat interactif permettant aux clients d'ajouter, modifier ou supprimer des produits. Le système calcule automatiquement le total des achats, les taxes applicables et les frais de livraison. Les utilisateurs peuvent sauvegarder leur panier pour un achat ultérieur et gérer facilement les quantités de produits.
                    </p>
                    <p>
                        <span className='feature-title'>Système de commentaires: </span>
                        Fonctionnalité permettant aux clients de laisser des avis et des évaluations sur les produits achetés. Les utilisateurs peuvent noter les produits, partager leur expérience et ajouter des photos. Ces commentaires aident les autres clients dans leur décision d'achat et permettent d'améliorer la qualité des produits et services.
                    </p>
                    <p>
                        <span className='feature-title'>Paiement avec Stripe: </span>
                        Intégration sécurisée de la plateforme de paiement Stripe offrant plusieurs options de paiement (carte bancaire, Apple Pay, Google Pay). Le système assure la sécurité des transactions et génère automatiquement les factures. Les clients reçoivent des confirmations de paiement par email.
                    </p>
                    <p>
                        <span className='feature-title'>Catégories de produits: </span>
                        Organisation claire des produits par catégories facilitant la navigation et la recherche. Le système permet de filtrer les produits par catégorie, prix, marque et autres caractéristiques techniques. L'administrateur peut facilement gérer et mettre à jour la structure des catégories via le back-office.
                    </p>
                </div>
                <div className="capture">
                    <h2>Capture d'ecrans</h2>
                    <div className='image-container'>
                        <img src={ecom1} alt="Application de fiche de paie" />
                    </div>
                    <div className='image-container'>
                        <img src={ecom2} alt="Application de fiche de paie" />
                    </div>
                    <div className='image-container'>
                        <img src={ecom3} alt="Application de fiche de paie" />
                    </div>
                    <div className='image-container'>
                        <img src={ecom4} alt="Application de fiche de paie" />
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
                    image={paie_app}
                    title="GESTION DE PAIE"
                    description="Application de Gestion de paie Laravel-Vue.js"
                    link="/projects/payroll-management"
                />
            </div>

        </section >
    )
}
