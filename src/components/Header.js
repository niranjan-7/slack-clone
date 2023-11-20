import React from 'react'
import { styled } from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import ArrowBack  from '@material-ui/icons/ArrowBack'
import  ArrowForward  from '@material-ui/icons/ArrowForward'
function Header() {
  return (
    <HeaderContainer>
        <HeaderLeft>
            <HeaderLeftIconWrapper>
                <ArrowBack />
                <ArrowForward />
                <AccessTimeIcon />
            </HeaderLeftIconWrapper>
        </HeaderLeft>
        <HeaderSearch>
            <SearchIcon />
            <input placeholder='Search' />
        </HeaderSearch>
        <HeaderRight>
            <HelpOutlineIcon />
        </HeaderRight>
    </HeaderContainer>
  )
}

export default Header

const HeaderLeftIconWrapper= styled.div`
        margin-left:auto;
        margin-right:20px;

`

const HeaderRight = styled.div`
    flex:0.3;
    display:flex;
    align-items:flex-end;

    > .MuiSvgIcon-root {
        margin-left:auto;
        margin-right:20px;
    }
`

const HeaderSearch = styled.div`
    flex:0.4;
    opacity:1;
    border-radius:6px;
    test-align:center;
    display:flex;
    padding; 0 50px;
    color:gray;
    border: 1px gray solid;

    >input{
        background-color:transparent;
        border:none;
        text-align:center;
        min-width:30vw;
        outline:0;
        color:white;
    }
`

const HeaderLeft = styled.div`
    flex:0.3;
    display: flex;
    align-items: center;
    margin-left:20px;

`

const HeaderContainer = styled.div`
    display:flex;
    position:fixed;
    width:100%;
    align-items:center;
    justify-content:space-between;
    padding:10px 0;
    background-color: var(--slack-color);
    color:white;
`
