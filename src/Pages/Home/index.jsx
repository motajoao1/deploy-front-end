// atv\name\src\Pages\Home\index.jsx
import { Link } from 'react-router-dom';
import './style.css'
import logo from '../../assets/logo.png';

function Home() {
    return (
        <div className="home">
            <section className='hero'>
                <div className='hero__content'>
                  <h1>Bem-vindo ao Barcelona</h1>
                  <p>O clube de futebol mais famoso do mundo.</p>
                <div className= 'hero__cta'>
                    <Link to="/servicos" className='btn primary'>Nossos Serviços</Link>
                    <Link to="/sobre-nos" className='btn'>Sobre Nós</Link>
                </div>
            </div>
            <div className='hero__image'>
                <img src={logo}alt="Logo do Barcelona" />
            </div>
        </section>

        <section className='Features'>
            <h2>Por que escolher o Barcelona?</h2>
            <div className='grid cols-3'>
                <div className='card'>
                    <h3>História Rica</h3>
                    <p>Fundado em 1899, o Barcelona tem uma longa tradição de excelência no futebol.</p>
                </div>
                <div className='card'>
                    <h3>Estilo de Jogo</h3> 
                    <p>Conhecido por seu estilo de jogo ofensivo e atraente, o Barcelona encanta fãs em todo o mundo.</p>
                </div>

            </div>
        </section>
    </div>
    )
}
export default Home