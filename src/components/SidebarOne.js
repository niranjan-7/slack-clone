import React from 'react'
import { styled } from 'styled-components'
import HomeIcon from '@mui/icons-material/Home'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


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

const HeaderAvatar = styled(AccountCircleIcon)`
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
