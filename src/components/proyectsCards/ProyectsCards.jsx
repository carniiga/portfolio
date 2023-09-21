import React from 'react'
import { ButtonLink, ProyectCardContainer, ProyectDescriptionPg, ProyectImg, ProyectStackParagraph, ProyectTitle, ProyectdateParagraph } from './proyectsCardsStyles'

const ProyectsCards = (props) => {
   const {title , description , link , date , stack} = props 
  return (
    <>
    <ProyectCardContainer>
        <ProyectImg src='/images/8715c32a3226480a53ddbbc08e7f83b8-ilustraci-n-de-cuaderno-port-til.png'>
        </ProyectImg>
    <ProyectTitle>{title}</ProyectTitle>
    <ProyectdateParagraph>{date}</ProyectdateParagraph>
    <ProyectStackParagraph>{stack}</ProyectStackParagraph>
    <ProyectDescriptionPg>{description}</ProyectDescriptionPg>
    <ButtonLink href={link} target= "_blank">Ver proyecto GitHub</ButtonLink>
    </ProyectCardContainer>
    </>
  )
}

export default ProyectsCards