import React from 'react'
import { HeroButtonsContainer, HomeContainer, HomeDescription, HomeParagraph, HomeTitle } from './homeStyles'
import Navbar from '../../components/navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
    
    <HomeContainer>
      <Navbar/>
      <HomeTitle>Gracias por tu visita</HomeTitle>
      <HomeDescription>
        <HomeParagraph>
        Si llegaste hasta aca, es por que habrás visto mi postulacion y te agradezco mucho.<br></br>
       <br></br>
        Si querés ver mis proyectos y experiencias te invito a que visites mi portfolio 👇<br></br>
      
        </HomeParagraph>
      </HomeDescription>
      <HeroButtonsContainer onClick={() => navigate("/portfolio")}>
        visitar Portfolio
      </HeroButtonsContainer>
      <Footer/>
    </HomeContainer>
    </>
  )
}

export default Home