
import React from 'react';
import './HeaderA.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <Fade>
                            <img src="/src/images/A3.PNg" alt="" />
                        </Fade>
                    </div>
                    <div className='col-12'>
                        <nav className="navbar">
                            <div className="navbar-logo">
                                <Link to="/">Home</Link>
                            </div>
                            <ul className="navbar-links">
                                <li><Link to="/entrar">Entrar</Link></li>
                                <li><Link to="/cadastro">Cadastrar</Link></li>
                                <li><Link to="/procurar">Procurar</Link></li>
                                <li><a href="#sobre">Sobre</a></li>
                                <li><a href="#contato">Contato</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
