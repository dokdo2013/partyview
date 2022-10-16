import { useState, useEffect } from 'react';
import { Box, GridItem, Button, Flex } from '@chakra-ui/react';
import './button-style.css';
import configStore from '../stores/ConfigStore';
import { Observer } from 'mobx-react';
import streamerListStore from '../stores/StreamerListStore';
import { getTwitchPlayerUrl, getTwitchChatUrl } from '../utils/getTwitchUrls';
import { reaction } from 'mobx';

export default function Content() {
  const [chatUser, setChatUser] = useState('');
  const host = window.location.hostname;

  useEffect(() => {
    const dispose = reaction(
      () => streamerListStore.list.length,
      () => {
        setChatUser(streamerListStore.list[0].broadcaster_login);
      }
    );
    return () => dispose();
  }, []);

  const renderPlayers = () => (
    <>
      {streamerListStore.list.map(streamer => {
        return (
          <GridItem key={streamer.id} w="100%" h="100%">
            <Flex style={{ height: '100%' }}>
              <iframe
                title="embed"
                id={'embed_' + streamer.id}
                src={getTwitchPlayerUrl(streamer.broadcaster_login, host)}
                className="stream"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
              <iframe
                title="chat"
                scrolling="no"
                id={'chat-' + streamer.id + '-embed'}
                src={getTwitchChatUrl(
                  streamer.broadcaster_login,
                  configStore.darkModeEnabled,
                  host
                )}
                width="340px"
                height="100%"
                allowFullScreen={true}
              />
            </Flex>
          </GridItem>
        );
      })}
    </>
  );

  const renderintegratedChatSection = () =>
    streamerListStore.list.length && configStore.displayChat && chatUser ? (
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
                  {streamer.broadcaster_login}
                </Button>
              );
            })}
          </Box>
        )}
        <iframe
          title="chat"
          scrolling="no"
          id={'chat-' + chatUser + '-embed'}
          src={getTwitchChatUrl(chatUser, configStore.darkModeEnabled, host)}
          height="100%"
          width="100%"
        />
      </Box>
    ) : (
      <></>
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
          <Observer>{renderPlayers}</Observer>
        </Box>
        <Observer>{renderintegratedChatSection}</Observer>
      </Flex>
    </Box>
  );
}
