import { FaEnvelope, FaPhone, FaShareNodes } from 'react-icons/fa6';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='left_nav'>
        <li>
          <a href='mailto:contact@neteasy.com'>
            <FaEnvelope style={{ marginRight: '10px' }} />
            contact@neteasy.in
          </a>
        </li>
        <li>
          <a href='tel:+918743901723'>
            <FaPhone style={{ marginRight: '10px' }} />
            +91-874390-1723
          </a>
        </li>
      </ul>
      <ul className='right_nav'>
        <li>
          <a href='#'>WhatsApp</a>
        </li>
        <li>
          <a href='#'>Pay Now</a>
        </li>
        <li>
          <a href='#'>Case Studies</a>
        </li>
        <li>
          <a href='#'>Blog</a>
        </li>
        <li>
          <a href='#'>Contact Us</a>
        </li>
        <li>
          <a className='social_link' href='#'>
            <FaShareNodes style={{ marginRight: '10px' }} />
            Social
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
