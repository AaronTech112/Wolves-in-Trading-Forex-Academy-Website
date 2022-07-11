import React from 'react'
import styled from 'styled-components'
import { Container, Course, Price } from '../file'

const MasterclassContainer = styled.div`
width: 100%;
height: 100%;
`
function Masterclass() {
  return (
    <MasterclassContainer>
      <Container />
      <Course />
      < Price />
    </MasterclassContainer>
  )
}

export default Masterclass