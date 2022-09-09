import React from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FooterContainer, IconContainer, ButtonWpp } from "./FooterElements";
import WppImage from '../../images/134937.png'

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <IconContainer>
          <a href="https://es-la.facebook.com/pages/category/Mobile-Phone-Shop/Tecnosuperco-111939800431233/">
            <MdOutlineFacebook />
            <p>TecnoSuper</p>
          </a>
        </IconContainer>
        <IconContainer>
          <a href="https://www.instagram.com/tecnosuper.co/">
            <FaInstagram />
            <p>@tecnosuper.co</p>
          </a>
        </IconContainer>
      </FooterContainer>
      <ButtonWpp>
        <a  href="https://web.whatsapp.com/send?phone=573207561345&text=Hola! Quiero información de sus productos">
          <img src={WppImage} alt="" />
        </a>
      </ButtonWpp>
    </>
  );  
};

export default Footer;
