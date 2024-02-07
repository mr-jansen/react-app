import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitch } from "react-icons/fa";
import {animateScroll as scroll} from 'react-scroll'
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };




  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Sobre nós</FooterLinkTitle>
              <FooterLink to="/singin">Como Funciona</FooterLink>
              <FooterLink to="/singin">Regras da Plataforma</FooterLink>
              <FooterLink to="/singin">Email</FooterLink>
              <FooterLink to="/singin">Termos de Serviço</FooterLink>
              <FooterLink to="/singin">Ajuda</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle> Sobre nós</FooterLinkTitle>
              <FooterLink to="/singin">Como Funciona</FooterLink>
              <FooterLink to="/singin">Regras da Plataforma</FooterLink>
              <FooterLink to="/singin">Email</FooterLink>
              <FooterLink to="/singin">Termos de Serviço</FooterLink>
              <FooterLink to="/singin">Ajuda</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Sobre nós</FooterLinkTitle>
              <FooterLink to="/singin">Como Funciona</FooterLink>
              <FooterLink to="/singin">Regras da Plataforma</FooterLink>
              <FooterLink to="/singin">Email</FooterLink>
              <FooterLink to="/singin">Termos de Serviço</FooterLink>
              <FooterLink to="/singin">Ajuda</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle> Social Media</FooterLinkTitle>
              <FooterLink to="/singin">Instagram</FooterLink>
              <FooterLink to="/singin">Facebook</FooterLink>
              <FooterLink to="/singin">Twitter</FooterLink>
              <FooterLink to="/singin">Twitch</FooterLink>
              <FooterLink to="/singin">Youtube</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>F1NDX</SocialLogo>
            <WebsiteRights>
              © F1NDX © 2024 - Todos os direitos reservados
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="//www.instagram.com/lucasjansenn"
                target="_blank"
                arial-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" arial-label="Twitch">
                <FaTwitch />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
