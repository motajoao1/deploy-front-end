//atv\name\src\components\Footer\index.jsx

import "./style.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer_wrap">
                <div>
                    <strong>Barcelona</strong> - CNPJ: 00.000.000/0001-00
                </div>
                <div>
                    Camp Nou Football Stadium - Av. Aristides Maillol, s/n - 08028 Barcelona, Espanha
                </div>
                <div className='copy'>
                    © {new Date().getFullYear()} Barcelona. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    )
}

export default Footer