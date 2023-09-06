
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
      </Routes>
    </>
  )
}

export default App
