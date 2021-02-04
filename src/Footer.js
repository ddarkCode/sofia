import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import './Footer.scss';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='footer-left'>
          <p>A NEW DESIGN SYSTEM THAT HELPS</p>
          <p>Speed up your work flow.</p>
        </div>
        <div className='footer-right'>
          <div>
            <p>Connect your design workflow with essential integrations</p>
            <button>Get Started</button>
          </div>
          <p>
            Work smarter, faster, and more in sync with a powerful design system
          </p>
          <button>
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
