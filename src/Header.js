import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

const Header = () => {
  return (
    <div className='nav-container'>
      <nav>
        <span>Sofia</span>

        <ul className='left'>
          <li>
            <a href='/products'>Products</a>
          </li>
          <li>
            <a href='/downloads'>Download</a>
          </li>
          <li>
            <a href='/enterprise'>Enterprise</a>
          </li>
          <li>
            <a href='/resources'>
              Resources
              <FontAwesomeIcon icon={faAngleDown} className='icon' />
            </a>
          </li>
        </ul>
        <ul className='right'>
          <li>
            <a href='/login'>Login</a>
          </li>
          <li>
            <a className='sign-up' href='/signup'>
              Sign up
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
