import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import AboutMe from '../../components/hero/AboutMe'
import Tecnologias from '../../components/tecnologias/Tecnologias'
import { PortFolioContainer } from './portfolioStyles'
import { ButtonGlobal } from '../../styles/GlobalStyles'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

const Portfolio = () => {
  const navigate = useNavigate()
  return (
    <>
    <PortFolioContainer>
    <Navbar/>
    <AboutMe/>
    <ButtonGlobal onClick={() => navigate("/proyectos")}>Ver Proyectos</ButtonGlobal>
    <Tecnologias/>
    <Footer/>
    </PortFolioContainer>
   
    </>
  )
}

export default Portfolio;