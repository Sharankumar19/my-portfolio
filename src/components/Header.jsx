import '../components/Header.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
function Header(props){
    return(
        <div className='nav-container'>
            <p className="logo" href="#">{props.logo}</p>
            <ul className='nav-menu'>
                <li><AnchorLink className='anchor-link' offset={50} href='#hero'><p>Home</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p>About Me</p></AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p>Skills</p></AnchorLink></li>
                {/* <li><AnchorLink className='anchor-link' offset={50}><p>Project</p></AnchorLink></li> */}
                <li><AnchorLink className='anchor-link' offset={50} href='#contact' ><p>Contact</p></AnchorLink></li>
            </ul>
            <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect With Me</AnchorLink></div>
        </div>
    )
}
export default Header;