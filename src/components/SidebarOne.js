import React from 'react'
import { styled } from 'styled-components'
import HomeIcon from '@material-ui/icons/Home'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Avatar }from '@material-ui/core';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import { useNavigate } from 'react-router-dom';


function SidebarOne() {
const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/login');
    };
  return (
        <SidebarOneContainer>
            <OrganisationLetter>
                S
            </OrganisationLetter>
            <IconWrapper>
                <HomeIcon />
                Home
            </IconWrapper>
            <IconWrapper>
                <ChatIcon />
                Chat
            </IconWrapper>
            <IconWrapper>
                <NotificationsIcon />
                Activity
            </IconWrapper>
            <IconWrapper>
                <MoreHorizIcon />
                More
            </IconWrapper>
            <EndContainer>
                <IconWrapper>
                    <AddCircleRoundedIcon />
                </IconWrapper>
                <HeaderAvatar onClick={handleLogout} />
            </EndContainer>
        </SidebarOneContainer>
  )
}

export default SidebarOne

const EndContainer = styled.div`
     margin-top: auto;
     margin-bottom:20px;
`

const HeaderAvatar = styled(Avatar)`
    cursor:pointer;

    :hover{
        opacity:0.8;
    }
`
const IconWrapper = styled.div`
    margin:10px 0;
    padding:10px 5px 10px 10px;
    display:flex;
    flex-direction:column;
    font-size:10px;
    font-weight:700;
`



const SidebarOneContainer = styled.div`
    margin-top:48px;
    background-color:var(--slack-color);
    color:#f8f8f8;
    display:flex;
    flex-direction:column;
    padding: 0 20px;
`

const OrganisationLetter = styled.div`
   border-radius:3px;
    background-color:grey;
    color: #f8f8f8;
    padding:20px;
    height:10px;
    align-items:center;
`
