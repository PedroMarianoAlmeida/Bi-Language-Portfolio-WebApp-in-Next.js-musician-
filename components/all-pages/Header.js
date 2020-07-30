import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

const Header = () => {
    return (
        <nav className={'navbar navbar-expand-lg fixed-top mb-4 bg-white shadow'}>
           <HeaderDesktop />
           <HeaderMobile />
        </nav>
      );
}
 
export default Header;