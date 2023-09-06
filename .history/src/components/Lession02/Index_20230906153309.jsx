import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Service from './Service'
import Team from './Team'

export default function Index() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/about' element={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/portfolio' element={<Portfolio />}></Route>
                <Route path='/service' element={<Service />}></Route>
                <Route path='/team' element={<Team />}></Route>
            </Routes>
        </div>
    )
}
