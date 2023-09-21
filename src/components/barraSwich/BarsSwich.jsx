import React from 'react'
import { useSelector } from 'react-redux'
import { BarsContainer, BarsSwichContainer, CircleSwich} from './barsSwichStyles'

const BarsSwich = () => {
  const {clicked} = useSelector(state => state.toggleReducer)
  
  
  return (
  <>
  <BarsContainer>
  <BarsSwichContainer isClicked ={clicked}>
    <CircleSwich isClicked={clicked}></CircleSwich>
  </BarsSwichContainer>
  </BarsContainer>
  
  </>
  )
}

export default BarsSwich