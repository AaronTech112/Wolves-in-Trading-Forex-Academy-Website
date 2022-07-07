import React from 'react'
import { AppContainer, GlobleStyled } from './app.style'
import { Routes, Route } from 'react-router-dom'
import { MasterClass,MentorShip,Resource, Sessions, Signal} from './file'
function App() {
  return (
      <AppContainer>
          <GlobleStyled />
          <Routes>
              <Route path='/' element={<MasterClass /> } />
                        <Route path='/Mentorship' element={ <MentorShip />} />
                 <Route path='/Resource' element={<Resource /> } />
                 <Route path='/Sessions' element={ <Sessions />} />
                       <Route path='/Signal'  element={<Signal /> } />
          </Routes>

    </AppContainer>
  )
}

export default App