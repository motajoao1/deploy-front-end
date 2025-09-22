// atv\name\src\Pages\Servicos\index.jsx

import './style.css'

function Servicos() {
    return (
        <section className="servicos">
            <h1>Serviços do Clube</h1>
            <p>Aqui estão os serviços oferecidos pelo Barcelona.</p>

            <div className='grid cols-3'>
                <h3>Treinamento de Futebol</h3>
                <p>Oferecemos programas de treinamento para todas as idades e níveis de habilidade, desde iniciantes até jogadores avançados.</p>    
            </div>
            <div className='card'>
                <h3>Eventos e Torneios</h3>
                <p>Organizamos eventos e torneios regulares para promover a competição saudável e o espírito esportivo entre nossos membros.</p>    
            </div>
            <div className='card'>
                <h3>Academia de Futebol</h3>
                <p>Nossa academia oferece treinamento especializado para jovens talentos, ajudando-os a desenvolver suas habilidades e alcançar seu potencial máximo.</p>
            </div>
        </section>
    )
}

export default Servicos