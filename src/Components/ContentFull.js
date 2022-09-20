import React, { useState, useEffect } from 'react';
import { Box, Grid, GridItem, useColorModeValue, Flex } from '@chakra-ui/react';
import './button-style.css';

export default function ContentFull({ data }) {
  const [chatUser, setChatUser] = useState('');

  const changeNameToKor = name => {
    switch (name) {
      case 'gamjagabee':
        return '가비';
      case 'gunaguna00':
        return '구나';
      case 'beadyo97':
        return '슬요';
      case 'vnek1234':
        return '도란';
      case 'kiwi4381':
        return '키위';
      case 'kbs9981':
        return '병살';
      case 'adricham':
        return '리챔';
      case 'yudarlinn':
        return '달린';
      case 'gofl2237':
        return '해리';
      case 'jeeya0402':
        return '지야';
      case 'kimc6h12o6':
        return '도당';
      case 'nyangoooong':
        return '권냥';
      default:
        return '';
    }
  };

  useEffect(() => {
    if (data.selectedUser.length > 0) {
      setChatUser(data.selectedUser[0]);
    }
  }, [data.selectedUser]);

  let templateRows = '';
  let templateColumns = '';
  let lastOne = 1;
  if (data.selectedUser.length === 1) {
    templateRows = 'repeat(1, 1fr)';
    templateColumns = 'repeat(1, 1fr)';
  } else if (data.selectedUser.length === 2) {
    templateRows = 'repeat(2, 1fr)';
    templateColumns = 'repeat(1, 1fr)';
  } else if (data.selectedUser.length === 3) {
    templateRows = 'repeat(2, 1fr)';
    templateColumns = 'repeat(2, 1fr)';
    lastOne = 2;
  } else if (data.selectedUser.length === 4) {
    templateRows = 'repeat(2, 1fr)';
    templateColumns = 'repeat(2, 1fr)';
  } else if (data.selectedUser.length === 5) {
    templateRows = 'repeat(2, 1fr)';
    templateColumns = 'repeat(3, 1fr)';
    lastOne = 2;
  } else if (data.selectedUser.length === 6) {
    templateRows = 'repeat(2, 1fr)';
    templateColumns = 'repeat(3, 1fr)';
  } else if (data.selectedUser.length === 7) {
    templateRows = 'repeat(2, 1fr)';
    templateColumns = 'repeat(4, 1fr)';
    lastOne = 2;
  } else if (data.selectedUser.length === 8) {
    templateRows = 'repeat(2, 1fr)';
    templateColumns = 'repeat(4, 1fr)';
  } else if (data.selectedUser.length === 9) {
    templateRows = 'repeat(3, 1fr)';
    templateColumns = 'repeat(3, 1fr)';
  } else if (data.selectedUser.length === 10) {
    templateRows = 'repeat(3, 1fr)';
    templateColumns = 'repeat(4, 1fr)';
    lastOne = 2;
  } else if (data.selectedUser.length === 11) {
    templateRows = 'repeat(3, 1fr)';
    templateColumns = 'repeat(4, 1fr)';
    lastOne = 2;
  } else if (data.selectedUser.length === 12) {
    templateRows = 'repeat(3, 1fr)';
    templateColumns = 'repeat(4, 1fr)';
  }
  let currCnt = 0;

  return (
    <Box
      minH="calc(100vh - 64px)"
      bg={useColorModeValue('gray.100', 'gray.900')}
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      {data.selectedUser.length ? (
        <>
          <Box
            style={{
              width: '100vw',
              height: 'calc(100vh - 64px)',
            }}
          >
            <Grid
              templateRows={templateRows}
              templateColumns={templateColumns}
              style={{ height: '100%' }}
            >
              {data.selectedUser.map(user => {
                return (
                  <GridItem
                    w="100%"
                    h="100%"
                    colSpan={
                      data.selectedUser.length === ++currCnt ||
                      (data.selectedUser.length === 10 && currCnt >= 9)
                        ? lastOne
                        : 1
                    }
                  >
                    <Flex style={{ height: '100%' }}>
                      <iframe
                        title="embed"
                        id={'embed_' + user}
                        src={
                          'https://player.twitch.tv/?muted=true&channel=' +
                          user +
                          '&parent=localhost&parent=multi.leaven.team&parent=dev-multi.leaven.team'
                        }
                        class="stream"
                        allowFullScreen="true"
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                      ></iframe>
                      <iframe
                        title="chat"
                        scrolling="no"
                        id={'chat-' + user + '-embed'}
                        src={
                          'https://twitch.tv/embed/' +
                          user +
                          '/chat?parent=localhost&parent=multi.leaven.team&parent=dev-multi.leaven.team'
                        }
                        width="340px"
                        height="100%"
                      ></iframe>
                    </Flex>
                  </GridItem>
                );
              })}
            </Grid>
          </Box>
        </>
      ) : (
        <Box
          style={{
            width: 'calc(100vw - 310px)',
            height: 'calc(100vh - 64px)',
          }}
        ></Box>
      )}
    </Box>
  );
}
