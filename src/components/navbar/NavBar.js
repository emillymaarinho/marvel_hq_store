import { Nav, Logo, Icon, Span } from './Layout.styled';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from '../../context/CartContext';
import home from '../../assets/home (1).png';
import buy from '../../assets/compras.png';
import logo from '../../assets/logo_.png';

const NavBar = () => {
    const { cart } = useContext(CartContext);

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
                        <Icon src={buy} alt="buy" />
                        <Span>{cart.length}</Span>
                    </Link>
                </div>
            </Nav>
        </>
    )
}

export default NavBar