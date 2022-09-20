import React, { useState, useEffect } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Nav from './Components/Nav';
import Content from './Components/Content';
import ContentFull from './Components/ContentFull';
import axios from 'axios';
import * as Sentry from '@sentry/react';

function App() {
  const [broadcastMember, setBroadcastMember] = useState(1);
  const [broadcastMemberList, setBroadcastMemberList] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [useSubCharacter, setUseSubCharacter] = useState(false);
  const [hideChat, setHideChat] = useState(false);
  const [videoChatTogether, setVideoChatTogether] = useState(false);
  const [chatDarkMode, setChatDarkMode] = useState(false);

  useEffect(() => {
    loadApi(true);
    loadStorage();
  }, []);

  const loadStorage = () => {
    const localUseSubCharacter = localStorage.getItem(
      'setting-useSubCharacter'
    );
    if (localUseSubCharacter === 'true') {
      setUseSubCharacter(true);
    } else {
      setUseSubCharacter(false);
    }

    const localHideChat = localStorage.getItem('setting-hideChat');
    if (localHideChat === 'true') {
      setHideChat(true);
    } else {
      setHideChat(false);
    }

    const localVideoChatTogether = localStorage.getItem(
      'setting-videoChatTogether'
    );
    if (localVideoChatTogether === 'true') {
      setVideoChatTogether(true);
    } else {
      setVideoChatTogether(false);
    }

    const localChatDarkMode = localStorage.getItem('setting-chatDarkMode');
    if (localChatDarkMode === 'true') {
      setChatDarkMode(true);
    } else {
      setChatDarkMode(false);
    }
  };

  const loadApi = (isFirst = false) => {
    axios
      .get('https://api-v1.leaven.team/live')
      .then(Response => {
        console.log(Response.data);
        if (Response.data.code === 'SUCCESS') {
          setBroadcastMemberList(Response.data.data);
          isFirst && setSelectedUser(Response.data.data);
        } else if (Response.data.code === 'DATA_EMPTY') {
          console.log('data empty');
        }
      })
      .catch(e => {
        Sentry.captureException(e);
      });
  };

  return (
    <ChakraProvider theme={theme}>
      <Nav
        data={{
          selectedUser,
          setSelectedUser,
          broadcastMember,
          broadcastMemberList,
          useSubCharacter,
          setUseSubCharacter,
          hideChat,
          setHideChat,
          videoChatTogether,
          setVideoChatTogether,
          chatDarkMode,
          setChatDarkMode,
        }}
      ></Nav>
      {videoChatTogether ? (
        <ContentFull
          data={{ selectedUser, broadcastMemberList, hideChat, chatDarkMode }}
        ></ContentFull>
      ) : (
        <Content
          data={{ selectedUser, broadcastMemberList, hideChat, chatDarkMode }}
        ></Content>
      )}
    </ChakraProvider>
  );
}

export default App;
