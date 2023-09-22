import React from "react";
import {
  AboutDescParagraph,
  AboutDescParagraphContainer,
  AboutMeContainer,
  AboutMeDescTitle,
  AboutMeDesctTitleContainer,
  AboutMeImg,
  AboutMePhContainer,
  AboutMeTitle,
  ParagraphColor,
} from "./aboutMeStyles";


const AboutMe = () => {
  return (
    <>
      <AboutMeContainer>
        <AboutMeTitle>Agustin Fernandez</AboutMeTitle>
        <AboutMeImg src="images/aboutme.jpeg"></AboutMeImg>
        <AboutMePhContainer>
          <AboutMeDesctTitleContainer>
            <AboutMeDescTitle>
              ¡Hola! gracias por tu visita , te cuento un poquito sobre mi.
            </AboutMeDescTitle>
          </AboutMeDesctTitleContainer>
          <AboutDescParagraphContainer>
            <AboutDescParagraph> Tengo 25 años
            Me considero muy sociable , como tambien me gusta disfrutar de estar solo.
            Trabajo en una tienda online  que creamos con mi papa.Me encargo de la parte de atencion al cliente y gestion de ventas, preparacion y empaquetado de productos y llevarlo al transporte.
            Me encanta jugar a los juegos y al futbol. 
            Estudie licenciatura en sistemas en la universidad de general sarmiento, 1 año Pero me di cuenta que no me gustaba lo que estaba estudiando.
            Cuando conoci lo que era desarrollador web me parecio muy divertido y me adentre a este mundo, Desde que empecé nunca baje los brazos hasta que terminé 😊
            Soy programador web full-stack. Me gradué en <ParagraphColor>Nucba</ParagraphColor>, Actualmente estoy en busqueda de mi primer empleo IT.No tengo experiencia laboral PERO SI EXPERIENCIA. <br></br>
            Si queres ver mis proyectos personales,Hace click al boton de abajo!
            </AboutDescParagraph>
          </AboutDescParagraphContainer>
         
        </AboutMePhContainer>
      </AboutMeContainer>
    </>
  );
};

export default AboutMe;
