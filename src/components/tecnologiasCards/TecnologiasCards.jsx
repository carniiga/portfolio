import React from 'react'
import { TecnologiasCardContainer, TecnologiasImg } from './tecnologiasCardsStyles';

const TecnologiasCards = ({ title , img}) => {
  return (
    <>
    <TecnologiasCardContainer>
        <TecnologiasImg  src={img} alt={title}></TecnologiasImg>
        
    </TecnologiasCardContainer>
    </>
  )
}

export default TecnologiasCards ;