import React from 'react'
import styled from 'styled-components'
import { Header, Main, Nav, Course, Price } from '../file'

const MasterclassContainer = styled.div`
width: 100%;
height: 100%;
`
const MasterclassWrapper = styled.div`
width: 100%;
height: 100vh;
  position: relative;
`
function Masterclass() {
  return (
    <MasterclassContainer>
      <MasterclassWrapper>
        <Header />
        <Main />
        <Nav />
      </MasterclassWrapper>
      <Course />
      < Price />
    </MasterclassContainer>
  )
}

export default Masterclass