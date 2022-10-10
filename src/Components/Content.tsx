import { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  GridItem,
  useColorModeValue,
  Button,
  Flex,
} from '@chakra-ui/react';
import './button-style.css';
import configStore from '../stores/ConfigStore';
import { Observer } from 'mobx-react';

export default function Content({ data }: { data: any }) {
  const [chatUser, setChatUser] = useState('');

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
      bg={configStore.darkModeEnabled ? 'gray.800' : 'gray.100'}
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <Flex>
        <Box
          style={
            configStore.displayChat
              ? {
                  width: '100vw',
                  height: 'calc(100vh - 64px)',
                }
              : {
                  width: 'calc(100vw - 310px)',
                  height: 'calc(100vh - 64px)',
                }
          }
        >
          <Grid
            templateRows={templateRows}
            templateColumns={templateColumns}
            style={{ height: '100%' }}
          >
            {data.selectedUser.map((user: string) => {
              return (
                <GridItem
                  key={user}
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
                      className="stream"
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
                      allowFullScreen={true}
                    ></iframe>
                  </Flex>
                </GridItem>
              );
            })}
          </Grid>
        </Box>

        <Observer>
          {() =>
            configStore.displayChat ? (
              <Box>
                {data.selectedUser.length > 1 && (
                  <Box style={{ height: '30px' }}>
                    {data.selectedUser.map((user: string) => {
                      return (
                        <Button
                          key={user}
                          h={30}
                          size="xs"
                          style={{ padding: '5px' }}
                          colorScheme={
                            chatUser === user
                              ? 'teal'
                              : configStore.darkModeEnabled
                              ? 'blackAlpha'
                              : 'gray'
                          }
                          onClick={() => {
                            setChatUser(user);
                          }}
                        >
                          {user}
                        </Button>
                      );
                    })}
                  </Box>
                )}
                <iframe
                  title="chat"
                  scrolling="no"
                  id={'chat-' + chatUser + '-embed'}
                  src={
                    'https://twitch.tv/embed/' +
                    chatUser +
                    (configStore.darkModeEnabled
                      ? '/chat?darkpopout&parent=localhost&parent=multi.leaven.team&parent=dev-multi.leaven.team'
                      : '/chat?parent=localhost&parent=multi.leaven.team&parent=dev-multi.leaven.team')
                  }
                  height="100%"
                  width="100%"
                ></iframe>
              </Box>
            ) : (
              <></>
            )
          }
        </Observer>
      </Flex>
    </Box>
  );
}
