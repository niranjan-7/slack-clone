import React from 'react'
import Header from '../components/Header'
import SidebarOne from '../components/SidebarOne'
import Sidebartwo from '../components/SidebarTwo'
import { styled } from 'styled-components'

function DirectMessagePage() {
  return (
  <>
            <Header />
            <BodyContainer>
              <SidebarOne />
              <Sidebartwo />
              <DirectMessagePage />
            </BodyContainer>
  </>
  )
}

export default DirectMessagePage

const BodyContainer = styled.div`
  display:flex;
  height: 100vh;
`