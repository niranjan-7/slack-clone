import React from 'react'
import Header from '../components/Header'
import SidebarOne from '../components/SidebarOne'
import Sidebartwo from '../components/SidebarTwo'
import ChatBox from '../components/ChatBox'
import { styled } from 'styled-components'

function NotificationsPage() {
  return (<>
            <Header />
            <BodyContainer>
              <SidebarOne />
              <Sidebartwo />
              
            </BodyContainer>
  </>
  )
}

export default NotificationsPage


const BodyContainer = styled.div`
  display:flex;
  height: 100vh;
`

