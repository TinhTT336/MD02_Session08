
import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      {/* <Sidebar /> */}
      <div>
        <div className="wrapper d-flex align-items-stretch">
          {/* <nav id="sidebar">
            <div className="p-4 pt-5">
              <NavLink to={"/"}
                className="img logo rounded-circle mb-5"
                style={{ backgroundImage: "url(images/logo.jpg)" }}
              />
              <ul className="list-unstyled components mb-5">
                <li className="active">
                  <NavLink to={"/"} className="dropdown-toggle">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/portfolio"} >Portfolio</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"} >Contact</NavLink>
                </li>
              </ul>
            </div>
          </nav> */}
          {/* Navbar  */}
          <div id="content" className="p-4 p-md-5">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <button type="button" id="sidebarCollapse" className="btn btn-primary">
                  <i className="fa fa-bars" />
                  <span className="sr-only">Toggle Menu</span>
                </button>
                <button
                  className="btn btn-dark d-inline-block d-lg-none ml-auto"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="fa fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item active">
                      <NavLink to={"/"} className="nav-link">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={"/about"} className="nav-link">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={"/portfolio"} className="nav-link" >
                        Portfolio
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={"/contact"} className="nav-link" >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/portfolio' element={<Portfolio />}></Route>
            </Routes>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
