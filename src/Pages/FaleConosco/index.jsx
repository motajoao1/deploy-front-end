// atv\name\src\Pages\FaleConosco\index.jsx

import './style.css'

function FaleConosco() {
    function handleSubmit(event) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso!');
    }
    return (
        <section className="fale-conosco">
            <h1>Fale Conosco</h1>
            <p>Tire suas dúvidas aqui.</p>

            <form className='form' onSubmit={handleSubmit}>
                <div className='grid cols-3'>
                    <label className= 'Field'>
                        <span>Nome:</span>
                        <input type="text" placeholder='Seu nome' required />
                    </label>
                    <label className= 'Field'>
                        <span>Email:</span>
                        <input type="email" placeholder='barcaum@bar.com' required />
                    </label>
                    <label className= 'Field'>
                        <span>Telefone:</span>
                        <input type="tel" placeholder='+34 93 496 36 00' required />
                    </label>
                </div>

                <label className= 'Field'>
                    <span>Mensagem:</span>
                    <textarea placeholder='Escreva sua mensagem aqui...' required></textarea>
                </label>
                <button className='btn primary' type='submit'>Enviar</button>
            </form>
        </section>
    )
}   

export default FaleConosco

