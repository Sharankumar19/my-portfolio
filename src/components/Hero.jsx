import '../components/Hero.css'
import hero_theme from '../assets/mycartoon.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
function Hero(){
return(
    <div id='hero' className="hero">
     <img src={hero_theme} alt="image" className="hero-img"/>
     <h1> <p className='span'>I'm sharan kumar</p> front-end developer based in tamil nadu</h1>
     <p>i'm front end developer form cuddalore</p>
     <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">connect with me</AnchorLink></div>
        <a href='../src/assets/pdf/sharankumar resume.pdf' className="hero-resume" download>my resume</a>
     </div>
    </div>
)
}
export default Hero;