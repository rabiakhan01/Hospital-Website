import React from 'react';
import '../style/footer.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import image from '../images/logo-image-footer.png';

export default function Footer() {
    useEffect(() => {
        // Rotate the icon every 1 second
        const rotateIconInterval = setInterval(() => {
          const icon = document.querySelector('.image-icon');
          if (icon) {
            // Get the current rotation angle
            const currentRotation = parseInt(icon.style.transform.replace('rotate(', '').replace('deg)', '')) || 0;
    
            // Rotate by 45 degrees (adjust as needed)
            icon.style.transform = `translate(-50%, -50%) rotate(${currentRotation + 45}deg)`;
          }
        }, 1000);
    
        // Clean up the interval when the component is unmounted
        return () => clearInterval(rotateIconInterval);
      }, []);
  return (
    <footer className="footer">
      <div className="footer-triangle-div"></div>
      <div className='footer-circle-div'>
        <img src={image} alt="Logo" />
        <FontAwesomeIcon icon={faPlusSquare} className='image-icon'/>
        <p className="image-text">ProHealth</p>
        <div className='information'>
      <div className='div-1'>
      <h3>
      ProHealth Medical &
      Healthcare Center
      </h3>
      <ul className='info-list'>
      <li><FontAwesomeIcon icon={faLocationDot}/> 123 Anywhere At Any City 12345</li>
      <li><FontAwesomeIcon icon={faPhone}/> 123-456-7890</li>
      <li><FontAwesomeIcon icon={faEnvelope}/> hellocallcenter@gmail.com</li>
      </ul>
      </div>
      <div className='div-2'>
      <ul className='info-2-style'>
      <li><a href='#'>About Us</a></li>
      <li><a href='#'>Departments</a></li>
      <li><a href='#'>Doctors</a></li>
      <li><a href='#'>TimeTable</a></li>
      <li><a href='#'>Appointment</a></li>
      <li><a href='#'>Testimonial</a></li>
      </ul>
      </div>
      <div className='div-3'>
      <ul className='info-2-style'>
      <li><a href='#'>Blog</a></li>
      <li><a href='#'>Contact Us</a></li>
      <li><a href='#'>FAQs</a></li>
      <li><a href='#'>Privacy Policy</a></li>
      <li><a href='#'>Terms and Conditions</a></li>
      </ul>
      </div>
      <div className='div-4'>
      <h2>Be Our Subscribers</h2>
      <p>To get the latest news about health from our experts</p>
      <input type='email' placeholder='example@gmail.com' name='SubscribeEmail' className='email-field-style' />
      <button className='btn btn-primary submit-btn-style'>Submit</button>
      </div>
      </div>
      </div>
      <div className='footer-last'>
      <ul className='links-icon'>
      Follow Us
      <li><i class="fa-brands fa-facebook"></i></li>
      <li><i class="fa-brands fa-square-instagram"></i></li>
      <li><i class="fa-brands fa-twitter"></i></li>
      <li><i class="fa-brands fa-youtube"></i></li>
      <li><i class="fa-brands fa-linkedin"></i></li>
      </ul>
      <span className='rights'>All Rights Are Reserved By @ProHealth-2023</span>
      </div>
    </footer>
  );
}
