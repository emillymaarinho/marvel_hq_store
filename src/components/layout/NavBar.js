import { Nav, Logo, Icon } from './Layout.styled';
import { Link } from 'react-router-dom';
import home from '../../assets/home (1).png';
import buy from '../../assets/compras.png';
import logo from '../../assets/logo_.png';

const NavBar = () => {
    return (
        <>
            <Nav>
                <div>
                    <Link to="/" >
                        <Logo src={logo} alt="marvel" />
                    </Link>
                </div>
                <div>
                    <Link to="/" >
                        <Icon src={home} alt="home" />
                    </Link>
                    <Link to="/buy">
                        <Icon src={buy} alt="buy" /></Link>
                </div>
            </Nav>
        </>
    )
}

export default NavBar