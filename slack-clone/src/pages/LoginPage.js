import React from 'react'
import slack from '../assets/Slack-logo-RGB.png'
import { styled } from 'styled-components'

function LoginPage() {
  return (
    <BodyContainer>
        <LogoWrapper>
             <img src={slack} width={"150px"} height={"40px"}  />
        </LogoWrapper>
        <>
            
        </>
    </BodyContainer>
  )
}

export default LoginPage


const BodyContainer = styled.div`
    display: flex;
  justify-content: center;
  
`

const LogoWrapper = styled.div`
    margin:20px;
`