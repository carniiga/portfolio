import React from 'react'
import { AllProyectsContainer, AllProyectsWrapper, ButtonPageContainer, ButtonPageUp , ButtonPageDown } from './allProyectsStyles'
import { proyectos } from '../../data/proyectos'
import ProyectsCards from '../proyectsCards/ProyectsCards'
import { useState } from 'react'

const AllProyects = () => {

  const [init , setInit] = useState(0)
  const [final , setFinal] = useState(3)
  const pageUp = (e) => {
    e.preventDefault()  
    setInit(init+3)
    setFinal(final+3)
  }
  const pageDown = (e) => {
    e.preventDefault()
    setInit(init-3)
    setFinal(final-3)

  }
  const proyectsChunks = proyectos.slice(init,final)
  console.log(proyectsChunks.length % 3)

  
  return (
    <>
    <AllProyectsWrapper>
    <AllProyectsContainer>
        {proyectsChunks.map((proyect) => (
            <ProyectsCards {...proyect}/>
        ))}
    </AllProyectsContainer>
    <ButtonPageContainer>
     <ButtonPageDown onClick={(e)=> pageDown(e)} hidden= {init <= 0 ? true : false}  >Anterior</ButtonPageDown>
     <ButtonPageUp onClick={(e) => pageUp(e)} hidden = { proyectsChunks.length % final !== 1 ? true : false}>Siguiente</ButtonPageUp>
    </ButtonPageContainer>
    </AllProyectsWrapper>
   
    </>
  )
}

export default AllProyects