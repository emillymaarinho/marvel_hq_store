import styled from 'styled-components';
import { Link } from 'react-router-dom'
import home from '../../assest/home (1).png';
import buy from '../../assest/compras.png';
import logo from '../../assest/logo_.png';

const Nav = styled.nav`
    background: #fff;
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
`

const Logo = styled.img`
    width: 160px;
`

const Icon = styled.img`
    height: 30px;
    width: 30px;
    text-decoration: none;
    margin: 20px;
    cursor: pointer;  

`

const NavBar = (props) => {
    return (
        <>
            <Nav>
                <div>
                    <Link to="/products" >
                        <Logo src={logo} alt="marvel" />
                    </Link>
                </div>
                <div>
                    <Link to="/buy" >
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