import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import React from 'react';
import '../style/Header.css';
export default function Header(){
    return (

        <header>
        <nav className='navbar'>
        <FontAwesomeIcon icon={faNotesMedical} className='health-icon'/>
        <p className='hospital-name'>ProHealth</p>      
        <ul className='menu-items'>
        <li><Link to="/Home" className='Link-style'>Home</Link></li>
        <li><Link to="/About" className='Link-style'>About</Link></li>
        <li><Link to="/Doctors" className='Link-style'>Find Doctors</Link></li>
        <li><Link to="/BlogPage" className='Link-style'>Blog</Link></li>
        <li><Link to="/ContactUs" className='Link-style'>Contact</Link></li>
        <div className='dropdown-styling'>
        <li>
        <div>
        <button className='page-button-styling'>Pages <FontAwesomeIcon icon={faCaretDown} /></button>
        <div className='dropdown-content'>
        <a href="#appointment">Appointment</a>
        <a href = "#department">Departments</a>
        <a href = "#department">Department Detail</a>
        <a href = "#doctor">Doctor</a>
        <a href = "#doctor">Doctor Detail</a>
        <Link to="/Gallery" className='Link-style'>Gallery</Link>
        <Link to="/Timetable" className='Link-style'>Timetable</Link>
        </div>
        </div>
        </li>
        </div>
        <FontAwesomeIcon icon={faSearch} className='search-style'/>
        <FontAwesomeIcon icon ={faBars}  className = 'search-style' />
        </ul>
        </nav>
        </header>
    );
    }
