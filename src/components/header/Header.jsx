import './header.css';
import CTA from './CTA';
import MySelf from '../../assets/images/rexhino.png';
// import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
  <header id="header" className='mt-5'>
  <div className="container header__container">
    <div className="header__left">
      <h1>Rexhino Thartori</h1>
      <h4 className="text-light">Front-End Developer & Web Designer</h4>

      <div className="me">
        <img src={MySelf} alt="me" />
      </div>

      <CTA />
    </div>

    <div className="header__right" />
    </div>
</header>

  )
}

export default Header;
