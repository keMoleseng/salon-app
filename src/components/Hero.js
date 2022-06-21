import "../hero.css";

export default function Hero() {
    return (
        <div className="hero--container">
            <div className="hero--image">
                <img src="/image.jpg" width="650vw" height="auto" />
                <div className="header--banner">
                    <p className="heading">BEAUTY & HAIR</p>
                    
                    <p className="banner--body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut placerat est. Mauris gravida erat massa, et feugiat augue tempor eget.</p>
                
                </div>
            </div>
            <div className="hero--description">
                <h1 className="description--heading">The Beauty Bar</h1>
                <p className="description--body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis augue nisl. Sed faucibus neque vel nibh fermentum, nec consectetur nisl blandit. </p>
            </div>
        </div>
    )
}