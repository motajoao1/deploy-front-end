
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Servicos from './pages/Servicos'
import SobreNos from './pages/SobreNos'
import FaleComigo from './pages/FaleConosco'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <div className='app'>
        <Header />
        <main className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/servicos' element={<Servicos />} />
            <Route path='/sobre-nos' element={<SobreNos />} />
            <Route path='/falecomigo' element={<FaleComigo />} />
           
          </Routes>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App 