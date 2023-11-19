import React from 'react'
import { useState } from 'react';
import { styled } from 'styled-components'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import FilterListIcon from '@material-ui/icons/FilterList';
import AddCommentIcon from '@material-ui/icons/AddComment';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AccountBox from '@material-ui/icons/AccountBox';

function Sidebartwo() {

      const [channelSearchQuery, setChannelSearchQuery] = useState('');
  const [peopleSearchQuery, setPeopleSearchQuery] = useState('');
  const [channels, setChannels] = useState(["general", "random", "channel 1", "channel 2"]);
  const [people, setPeople] = useState(["Leo Messi", "Neymar", "Virat Kohli", "Harry Kane"]);
  const [newChannel, setNewChannel] = useState('');
  const [newPerson, setNewPerson] = useState('');

  const handleAddChannel = () => {
    setChannels([...channels, newChannel]);
    setNewChannel('');
  };

  const handleAddPerson = () => {
    setPeople([...people, newPerson]);
    setNewPerson('');
  };

    const filteredPeople = people.filter(item =>
        item.toLowerCase().includes(peopleSearchQuery.toLowerCase())
    );

    const filteredChannels = channels.filter(item =>
        item.toLowerCase().includes(channelSearchQuery.toLowerCase())
    );


  return (
        <SidebartwoContainer>
            <TopSection>
                <TopLeft>
                    <h2>Organisation</h2>
                    <KeyboardArrowDownIcon />
                </TopLeft>
                <TopRight>
                    <IconWrapper>  
                        <FilterListIcon />
                    </IconWrapper>
                    <IconWrapper>
                        <AddCommentIcon/>
                    </IconWrapper>
                </TopRight>
            </TopSection>
            
            <BottomSection>
                <ChannelSection>
                    <ArrowDropDownIcon/>
                    <h3>Channels</h3>
                </ChannelSection>
                <SearchBar
                    type="text"
                    placeholder="Search channels"
                    value={channelSearchQuery}
                    onChange={(e) => setChannelSearchQuery(e.target.value)}
                />
                <>
                    {
                    filteredChannels.map((item, index) => (
                        <ChannelList key={index}># {item}</ChannelList>
                    ))
                    }

                </>
                <AddItemInput
                    placeholder="Add channel"
                    value={newChannel}
                    onChange={(e) => setNewChannel(e.target.value)}
                />
                <AddButton onClick={handleAddChannel}>Add</AddButton>
                <ChannelSection>
                    <ArrowDropDownIcon/>
                    <h3>Direct messages</h3>
                </ChannelSection>
                <SearchBar
                  type="text"
                    placeholder="Search people"
                    value={peopleSearchQuery}
                    onChange={(e) => setPeopleSearchQuery(e.target.value)}
                />
                <>
                    {
                    filteredPeople.map((item, index) => (
                        <ChannelList key={index}><AccountBox /> {item}</ChannelList>
                    ))
                    }

                </>
                <AddItemInput
                    placeholder="Add person"
                    value={newPerson}
                    onChange={(e) => setNewPerson(e.target.value)}
                    />
                <AddButton onClick={handleAddPerson}>Add</AddButton>
            </BottomSection>
        </SidebartwoContainer>
  )
}

export default Sidebartwo


const AddButton = styled.button`
  margin: 5px 0;
  padding: 5px 10px;
  background-color: #a64dff;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  :hover {
    background-color: #8720c9;
  }
`;


const AddItemInput = styled.input`
  margin: 5px 0;
  padding: 5px;
  border: none;
  border-bottom: 1px solid #fff;
  background: none;
  color: #fff;
  outline: none;
  transition: border-bottom-color 0.3s ease;

  :focus {
    border-bottom-color: #a64dff;
  }
`;

const SearchBar = styled.input`
    margin-top: 10px;
    padding: 5px;
`;
const ChannelList = styled.div`
    margin:5px 0;
    margin-left: 15px;
    display:flex;
`

const BottomSection = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:30px;
`

const ChannelSection = styled.div`
    display:flex;
`

const TopLeft = styled.div`
    flex:0.5;
    display:flex;
    margin-right:70px;
`



const TopRight = styled.div`
    margin-left:auto;
    flex:0.5;
    display:flex;
    margin-right:5px;
`

const TopSection = styled.div`
    display:flex;
`

const SidebartwoContainer = styled.div`
    margin-top:48px;
    background-color:#472C4C;
    color:grey;
    padding:15px;
    flex:display;
    flex-direction:column;
    overflow:auto;
    /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #000000 #d1d1d1;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: #d1d1d1;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #000000;
    border-radius: 5px;
    border: 2px groove #e3e3e3;
  }



`

const IconWrapper = styled.div`
    margin:5px;
    padding:5px;
`
