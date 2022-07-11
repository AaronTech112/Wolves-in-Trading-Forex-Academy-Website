import React from 'react'
import { HeaderContainer, HeaderWrapper, LogoContainer,Logo, Detail, SocialIcon, Icon, Span, Text} from './header.style'
import { HeaderBg, logo, facebook, inter, linked, whatsapp } from '../../file'
import {BsInstagram, BsLinkedin,BsWhatsapp, BsTelegram} from 'react-icons/bs'
function Header() {
  return (
      <HeaderContainer bg={HeaderBg}>
      <HeaderWrapper>
        <LogoContainer>
          <Logo src={logo}  alt='header-logo'/>
          <Detail>
            <Span>Call Support:</Span>
            <Text>+2349060469552</Text>
            <Span>\</Span>
            <Span>E-mail Us: </Span>
            <Text>support@habbyforex.com</Text>
          </Detail>
        </LogoContainer>
        <SocialIcon>
          <Icon><BsInstagram />  </Icon>
          <Icon><BsLinkedin />  </Icon>
          <Icon><BsTelegram />  </Icon>
                <Icon><BsWhatsapp />  </Icon>
        </SocialIcon>
         </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header