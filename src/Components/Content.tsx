import { useState, useEffect } from 'react';
import { Box, Grid, GridItem, Button, Flex } from '@chakra-ui/react';
import './button-style.css';
import configStore from '../stores/ConfigStore';
import { Observer } from 'mobx-react';
import streamerListStore from '../stores/StreamerListStore';

export default function Content() {
  const [chatUser, setChatUser] = useState('');

  useEffect(() => {
    if (streamerListStore.list.length > 0) {
      setChatUser(streamerListStore.list[0].broadcaster_login);
    }
  }, [streamerListStore.list]);

  let templateRows = '';
  let templateColumns = '';
  let lastOne = 1;
  if (streamerListStore.list.length === 1) {
    templateRows = 'repeat(1, 1fr)';
    templateColumns = 'repeat(1, 1fr)';
  } else if (streamerListStore.list.length === 2) {
    templateRows = 'repeat(2, 1fr)';
    templateColumns = 'repeat(1, 1fr)';
  } else if (streamerListStore.list.length === 3) {
    templateRows = 'repeat(2, 1fr)';
    templateColumns = 'repeat(2, 1fr)';
    lastOne = 2;
  } else if (streamerListStore.list.length === 4) {
    templateRows = 'repeat(2, 1fr)';
    templateColumns = 'repeat(2, 1fr)';
  } else if (streamerListStore.list.length === 5) {
    templateRows = 'repeat(2, 1fr)';
    templateColumns = 'repeat(3, 1fr)';
    lastOne = 2;
  } else if (streamerListStore.list.length === 6) {
    templateRows = 'repeat(2, 1fr)';
    templateColumns = 'repeat(3, 1fr)';
  } else if (streamerListStore.list.length === 7) {
    templateRows = 'repeat(2, 1fr)';
    templateColumns = 'repeat(4, 1fr)';
    lastOne = 2;
  } else if (streamerListStore.list.length === 8) {
    templateRows = 'repeat(2, 1fr)';
    templateColumns = 'repeat(4, 1fr)';
  } else if (streamerListStore.list.length === 9) {
    templateRows = 'repeat(3, 1fr)';
    templateColumns = 'repeat(3, 1fr)';
  } else if (streamerListStore.list.length === 10) {
    templateRows = 'repeat(3, 1fr)';
    templateColumns = 'repeat(4, 1fr)';
    lastOne = 2;
  } else if (streamerListStore.list.length === 11) {
    templateRows = 'repeat(3, 1fr)';
    templateColumns = 'repeat(4, 1fr)';
    lastOne = 2;
  } else if (streamerListStore.list.length === 12) {
    templateRows = 'repeat(3, 1fr)';
    templateColumns = 'repeat(4, 1fr)';
  }
  let currCnt = 0;

  const renderBody = () => (
    <>
      {streamerListStore.list.map(streamer => {
        return (
          <GridItem
            key={streamer.id}
            w="100%"
            h="100%"
            colSpan={
              streamerListStore.list.length === ++currCnt ||
              (streamerListStore.list.length === 10 && currCnt >= 9)
                ? lastOne
                : 1
            }
          >
            <Flex style={{ height: '100%' }}>
              <iframe
                title="embed"
                id={'embed_' + streamer.id}
                src={
                  'https://player.twitch.tv/?muted=true&channel=' +
                  streamer.broadcaster_login +
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
                id={'chat-' + streamer.id + '-embed'}
                src={
                  'https://twitch.tv/embed/' +
                  streamer.broadcaster_login +
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
    </>
  );

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
            <Observer>{renderBody}</Observer>
          </Grid>
        </Box>

        <Observer>
          {() =>
            streamerListStore.list.length && configStore.displayChat ? (
              <Box>
                {streamerListStore.list.length > 1 && (
                  <Box style={{ height: '30px' }}>
                    {streamerListStore.list.map(streamer => {
                      return (
                        <Button
                          key={streamer.id}
                          h={30}
                          size="xs"
                          style={{ padding: '5px' }}
                          colorScheme={
                            chatUser === streamer.id
                              ? 'teal'
                              : configStore.darkModeEnabled
                              ? 'blackAlpha'
                              : 'gray'
                          }
                          onClick={() => {
                            setChatUser(streamer.broadcaster_login);
                          }}
                        >
                          {streamer.id}
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
