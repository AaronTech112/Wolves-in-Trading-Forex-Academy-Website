import React from 'react'
import styled from 'styled-components'
import withReveal from 'react-reveal/withReveal'
import Fade from 'react-reveal/Fade'
export const HeaderContainer = withReveal(styled.div`
position: absolute;
    width: 100%;
    height: 50px;
    border-radius: 0px 0px 40px 40px;
background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${props => props.bg});


`, <Fade top/>)

export const HeaderWrapper = styled.div`
width: 90%;
height: 100%;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;
`
export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
`
export const Logo = styled.img`
    height: 40px;
    object-fit: contain;
`
export const Detail = styled.div`
display: flex;
gap: 5px;
align-items: center;
`
export const Span = styled.h3`
    color: black;
    font-size: 13px;
    font-family: monospace;
`
export const Text = styled.h4`
    font-family: 10px;
    font-family: cursive;
    font-weight: 700;
    color: white;
`
export const SocialIcon = styled.div`
display: flex;
gap: 1.5rem;
align-items: center;
`
export const Icon = styled.div`
    padding: 5px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  cursor: pointer;
`