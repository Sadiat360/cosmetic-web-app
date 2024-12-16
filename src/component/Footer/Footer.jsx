import './Footer.scss';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";


function Footer(){

    return(
        <footer className='footer'>

            <div className='footer-container'>

               <ul className='footer-list'>
                   <li className='footer-list__item'><FaPhone /></li>
                   <p className='footer-list__text'>+4479992972282</p>
               </ul>
   
               <ul className='footer-list'>
                   <li className='footer-list__item'><MdEmail /></li>
                   <p className='footer-list__text'>himelissa@gmail.com</p>
               </ul>
   
               <ul className='footer-list'>
                   <li className='footer-list__item'><IoLocationSharp /></li>
                   <p className='footer-list__text'>38a Lucas way,England</p>
               </ul>

            </div>

            <article className='footer__about-box'>

                  <ul className='footer__about'>
                      <li className='footer__about-item'><strong>ABOUT</strong></li>
                      <li className='footer-list__text'>Awards</li>
                      <li className='footer-list__text'>Our Team</li>
                      <li className='footer-list__text'>Products</li>
                  </ul>
                  <ul className='footer__about'>
                      <li className='footer__about-item'><strong>COMPANY</strong></li>
                      <li className='footer-list__text'>Our Services</li>
                      <li className='footer-list__text'>Contact</li>
                      <li className='footer-list__text'>Terms of use</li>
                  </ul>
                  <ul className='footer__about'>
                      <li className='footer__about-item'><strong>RESOURCES</strong></li>
                      <li className='footer-list__text'>Blog</li>
                      <li className='footer-list__text'>Newsletter</li>
                      <li className='footer-list__text'>Privacy Policy</li>
                  </ul>
                
            </article>

            <div className='footer__box'>
                <strong>SUBSCRIBE</strong>

                <input type="text" />
            </div>
            
           

        </footer>
    )
}

export default Footer;