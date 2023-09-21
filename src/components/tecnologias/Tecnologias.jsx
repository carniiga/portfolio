import React from 'react'
import { TecnologiasContainer } from './tecnogoliasStyles'
import { tecnologias } from '../../data/tecnologias' 
import TecnologiasCards from "../tecnologiasCards/TecnologiasCards"


const Tecnologias = () => {
  return (
    <>
    <TecnologiasContainer>
     {tecnologias.map((tecnologia) => (
        <TecnologiasCards key={tecnologia.id} {...tecnologia}/>
     ))}
    </TecnologiasContainer>
    </>
  )
}

export default Tecnologias