import React, {useState} from 'react'
import {Link} from 'gatsby'
// Reacts own icons
import {FiAlignJustify} from "react-icons/fi"
import logo from "../assets/images/logo.svg"

const Navbar = () => {
    const [show,setShow] = useState(false)

    // Css is used with the help of classnames
    return (
        <nav className='navbar'>

            <div className='nav-center' >

                <div className='nav-header' >
                    <Link to="/">
                        <img src={logo} alt="simply recipes" />
                    </Link>

                    <button className='nav-btn' onClick={ () => setShow(!show)}>
                        <FiAlignJustify />
                    </button>
                </div>
                <div className={show ? 'nav-links show-links':'nav-links'} >
                    <Link to="/" className='nav-link' activeClassName='active-link' onClick={ () => setShow(false)} >Home</Link>
                    <Link to="/about" className='nav-link' activeClassName='active-link' onClick={ () => setShow(false)} >about</Link>
                    <Link to="/tags" className='nav-link' activeClassName='active-link' onClick={ () => setShow(false)} >tags</Link>
                    <Link to="/recipes" className='nav-link' activeClassName='active-link' onClick={ () => setShow(false)} >recipes</Link>
                    <div className='nav-link contact-link'>
                        <Link to="/contact" className='btn'>contact</Link>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar