
import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
// lession04
import Invoices from './components/Lession04/Invoices'
import Expenses from './components/Lession04/Expenses'
import CreateNewInvoices from './components/Lession04/CreateNewInvoices'
import Google from './components/Lession04/Google'
import Apple from './components/Lession04/Apple'
import InvoicesIndex from './components/Lession04/InvoicesIndex'

// lession03
import Contact from './components/Lession03/Contact'
import Index from './components/Lession03/Index'
import Dashboard from './components/Lession03/Dashboard'
import Event from './components/Lession03/Event'
import Home from './components/Lession03/Home'

// lession05
// import Spinner from './components/Lession05/Spinner'
// import ScrollToTop from "react-scroll-to-top";
// import Navbar05 from './components/Lession05/Navbar05'
// import Footer from './components/Lession05/Footer'
// import NotFound404 from './components/Lession05/NotFound404'
// import About from './components/Lession05/About'
// import Contact from './components/Lession05/Contact'
// import Home from './components/Lession05/Home'
// import Open from './components/Lession05/Open'
// import Price from './components/Lession05/Price'
// import Service from './components/Lession05/Service'
// import Team from './components/Lession05/Team'
// import Testimonial from './components/Lession05/Testimonial'
// import Contact from './components/Lession03/Contact'
// lession02
// import Navbar02 from './components/Lession02/Navbar02'
// import About from './components/Lession02/About'
// import Contact from './components/Lession02/Contact'
// import Portfolio from './components/Lession02/Portfolio'
// import Service from './components/Lession02/Service'
// import Team from './components/Lession02/Team'
// import Footer from './components/Lession02/Footer'

// lession01
// import Home from './components/Lession01/Home'
// import Contact from './components/Lession01/Contact'
// import About from './components/Lession01/About'
// import Portfolio from './components/Lession01/Portfolio'
// import Navbar from './components/Lession01/Navbar'
// import Index from './components/Lession02/Index'




function App() {
  // const styleNavLink = ({ isActive }) => ({
  //   color: isActive ? "white" : "green",
  //   backgroundColor: isActive ? "black" : "white",
  // })
  return (
    <>
      {/* Lession01 */}
      {/* <Navbar />
      <div>
        <div className="wrapper d-flex align-items-stretch"> */}
      {/* Page Content  */}
      {/* <div id="content" className="p-4 p-md-5"> */}
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                      <NavLink to={"/"} style={styleNavLink} className="nav-link">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={"/about"} style={styleNavLink} className="nav-link">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={"/portfolio"} style={styleNavLink} className="nav-link" >
                        Portfolio
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={"/contact"} style={styleNavLink} className="nav-link" >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav> */}
      {/* <Navbar />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/portfolio' element={<Portfolio />}></Route>
            </Routes>
          </div>
        </div>
      </div> */}

      {/* lession02 */}
      {/* <Navbar02 />
      <Routes>
        <Route path='/about' element={<About />}></Route >
        <Route path='/contact' element={<Contact />}></Route >
        <Route path='/portfolio' element={< Portfolio />}></Route>
        <Route path='/' element={<Service />}></Route>
        <Route path='/team' element={<Team />}></Route>
      </ Routes>
      <Footer /> */}

      {/* lession03 */}
      <Index />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/event' element={<Event />}></Route>
      </Routes>


      {/* lession04 */}
      {/* <ul style={{ display: "flex", gap: 15, justifyContent: "center" }}>
        <li style={{ listStyle: "none" }}> <NavLink to={"/expenses"}>Expenses</NavLink> </li>
        <li style={{ listStyle: "none" }}> <NavLink to={"/invoices"}>Invoices</NavLink> </li>
      </ul>

      <Routes>
        <Route path='/expenses' element={<Expenses />}></Route>
        <Route path='/invoices' element={<Invoices />}>
          <Route index element={<InvoicesIndex />}></Route>
          <Route path='new' element={<CreateNewInvoices />}></Route>
          <Route path='1' element={<Google />}></Route>
          <Route path='2' element={<Apple />}></Route>
        </Route>
      </Routes> */}

      {/* lession05 */}
      {/* <Spinner /> */}
      {/* <Navbar05 />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/open' element={<Open />}></Route>
        <Route path='/price' element={<Price />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/team' element={<Team />}></Route>
        <Route path='/testimonial' element={<Testimonial />}></Route>
        <Route path='*' element={<NotFound404 />}></Route>

      </Routes>

      <ScrollToTop smooth color="#6f00ff" />
      <Footer /> */}

    </>
  )
}

export default App
