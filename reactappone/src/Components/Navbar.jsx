import React,{useState} from 'react'
import logo from "../images/logo.png"
import {Link} from 'react-scroll'
const Navbar = () => {

    const [nav,setNav] = useState(false)
  
    const changeBackground=()=>{
        if(window.screenY >=50){
            setNav(true)
        }
        else{
            setNav(false)
        }
    }

    window.addEventListener('scroll',changeBackground)
    return (
    <nav className={nav ? "nav active" : "nav"}>
        <Link to= "main" className='logo'smooth={true} duration={1000}>
            <img src={logo} alt=""/>
        </Link>
        <input type="checkbox" className="menu-btn" id='menu-btn' />
        <label for="menu-btn" className='menu-icon'>
            <sapn className="nav-icon"></sapn>
        </label>
        <ul className='menu'>
            <li><Link to="main" smooth={true} duration={1000}>Header</Link></li>
            <li><Link to="features" smooth={true} duration={1000}>Feature</Link></li>
            <li><Link to="presentaion" smooth={true} duration={1000}>Offer</Link></li>
            <li><Link to="about" smooth={true} duration={1000}>About</Link></li>
            <li><Link to="contact" smooth={true} duration={1000}>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
