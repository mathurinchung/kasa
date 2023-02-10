import Logo from '../assets/svg/white_logo.svg';
import '../css/Footer.css';

function Footer() {
  return (
    <footer id="Footer">
      <div className="wrapper">
        <img src={ Logo } alt="logo" />
        <p>&copy; 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
