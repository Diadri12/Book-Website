import {default as React, useState} from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';
import {SiteLogo} from '../../global';

const Header = ({header}) => {
    const [fix, setFix] = useState(false)

    function SetFixed(){
        if(window.scrollY >= 100){
            setFix(true);
        } else{
            setFix(false)
        }
    }
    window.addEventListener('scroll', SetFixed);

    return(
        <header className= {fix? "header navbar_fixed" : "header"}>
            <div className='container'>
                <div className='row'>
                    <Navbar bg='none' expand = "lg">
                        <a className='navbar-brand' href='/'>
                            <img src={SiteLogo.logo} alt={SiteLogo.alt}></img>
                        </a>
                        <Navbar.Toggle aria-controls='navbarSupportedContent'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </Navbar.Toggle>
                        <Navbar.Collapse id='navbarSupportedContent'>
                            <ul className='navbar-nav menu ms-lg-auto'>
                            {header.menu?.map((data, i) => {
                                return (
                                <li className='nav-item' key={i}>
                                        <Link
                                        activeClass="active"
                                        className="benefits nav-link"
                                        to={data.link}
                                        spy={true}
                                        isDynamic={false}
                                        hashSpy={false}
                                        spyThrottle={500}
                                        smooth={true}
                                        duration={500}offset={-60}>
                                        {data.title}</Link>
                                        </li>
                                 );
                                 })}
                            </ul>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div> 
        </header>
    )
}

export default Header;