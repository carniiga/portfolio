import React from 'react'
import { ContactMeContainer, ContactMeIconsContainer, EmailContainer, EmailIcon, IconContainer, WspIcon, WspiconContainer } from './contactMeStyles'
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
const ContactMe = () => {
  return (
   <>
   <ContactMeContainer>
    <Navbar/>
    <ContactMeIconsContainer>
      
        <IconContainer>
        <a href="https://wa.me/+541144078497?text=¡Hola!. Hemos visto  tu numero en el portfolio  y me gustaria contactarte." target='_blank'>
            <WspiconContainer>
                <WspIcon/>
            </WspiconContainer>
            </a>
            <a href='mailto:fernandezagustin98@hotmail.com' target='_blank'>
        <EmailContainer>
        <EmailIcon/>
        </EmailContainer>
            </a>
            
       
        </IconContainer>
        
     
        
    </ContactMeIconsContainer>
    <Footer/>
   </ContactMeContainer>
   </>
  )
}

export default ContactMe