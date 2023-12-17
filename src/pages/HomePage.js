import React from 'react'
import Header from '../components/Header'
import SidebarOne from '../components/SidebarOne'
import Sidebartwo from '../components/SidebarTwo'
import ChatBox from '../components/ChatBox'
import { styled } from 'styled-components'

function HomePage({auth}) {
  return (<>
            <Header />
            <BodyContainer>
              <SidebarOne />
              <Sidebartwo />
              <ChatBox auth={auth}/>
            </BodyContainer>
  </>
  )
}

export default HomePage

const BodyContainer = styled.div`
  display:flex;
  height: 100vh;
`