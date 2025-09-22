// atv\name\src\components\Header\index.jsx

import { NavLink, Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/logo.png';

function Header() {
    return (
        <header className="header">
            <div className="header_wrap">
                <Link to="/" className="brand">
                    <img src={logo} alt="Logo do Barcelona" />
                    <span>Barcelona</span>
                </Link>

                <nav className="nav">
                    <NavLink to="/servicos" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                        Serviços
                    </NavLink>
                    <NavLink to="/sobre-nos" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                        Sobre Nós
                    </NavLink>
                    <NavLink to="/fale-comigo" className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                        Contato
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;