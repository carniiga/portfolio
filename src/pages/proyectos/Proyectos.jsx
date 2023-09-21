import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { ProyectosContainer } from './proyectosStyles'
import AllProyects from '../../components/proyectos/AllProyects'
import Footer from '../../components/footer/Footer'

const Proyectos = () => {
  return (
    <>
    <ProyectosContainer>
    <Navbar/>
    <AllProyects/>
    <Footer/>
    </ProyectosContainer>
    </>
  )
}

export default Proyectos