export default function TechItem({name, logo, alt_img}) {
    return (
        <div className="tech-item">
            {name}
            <img src={logo} alt={alt_img} />
        </div>
    )
}
