import React from 'react'
import { Routes  as RoutesPages , Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Portfolio from '../pages/portfolio/Portfolio'
import Proyectos from '../pages/proyectos/Proyectos'
import ContactMe from '../pages/contactMe/ContactMe'
const Routes = () => {
  return (
    <>
    <RoutesPages>
    <Route  path='/' element={<Home/>}> </Route>
    <Route  path='/portfolio' element={<Portfolio/>}></Route>
    <Route path='/proyectos' element = {<Proyectos/>}></Route>
    <Route path='/contactMe' exact element={<ContactMe/>}></Route>
    </RoutesPages>
    
  
    </>
  )
}

export default Routes