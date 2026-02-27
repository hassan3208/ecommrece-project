import logoWhiteImage from '../assets/logo-white.png';
import mobileLogoWhiteImage from '../assets/mobile-logo-white.png';
import searchIcon from '../assets/icons/search-icon.png';
import cartIcon from '../assets/icons/cart-icon.png';
import './Header.css';
import { Link } from 'react-router-dom';



export function Header() {
    return (
        <div>
            <div className="header">
             <div className="left-section">
               <Link to="/" className="header-link">
                 <img className="logo"
                   src={logoWhiteImage} />
                 <img className="mobile-logo"
                   src={mobileLogoWhiteImage} />
               </Link>
            </div>

            <div className="middle-section">
              <input className="search-bar" type="text" placeholder="Search" />

              <button className="search-button">
                <img className="search-icon" src={searchIcon} />
              </button>
            </div>

            <div className="right-section">
              <Link to="/orders" className="orders-link header-link">
                <span className="orders-text">Orders</span>
              </Link>

              <Link to="/checkout" className="cart-link header-link">
                <img className="cart-icon" src={cartIcon} />
                <div className="cart-quantity">3</div>
                <div className="cart-text">Cart</div>
              </Link>
            </div>
           </div>
        </div>
    );
}