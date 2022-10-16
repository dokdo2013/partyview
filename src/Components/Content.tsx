import { useState, useEffect } from 'react';
import './button-style.css';
import configStore from '../stores/ConfigStore';
import { Observer } from 'mobx-react';
import streamerListStore from '../stores/StreamerListStore';
import { getTwitchPlayerUrl, getTwitchChatUrl } from '../utils/getTwitchUrls';
import { reaction } from 'mobx';
import classNames from 'classnames';

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
    <ul
      className={classNames(
        'flex flex-wrap overflow-hidden',
        configStore.displayChat ? 'flex-[0.8]' : 'flex-1'
      )}
    >
      {streamerListStore.list.map(streamer => {
        return (
          <li className="flex w-[50%] h-[50vh]" key={streamer.id}>
            <iframe
              title="embed"
              id={'embed_' + streamer.id}
              src={getTwitchPlayerUrl(streamer.broadcaster_login, host)}
              className={classNames(
                'h-full',
                configStore.displayEachChat ? 'w-[70%]' : 'w-full'
              )}
            />
            {configStore.displayEachChat && (
              <iframe
                title="chat"
                className="w-[30%] h-full"
                scrolling="no"
                id={'chat-' + streamer.id + '-embed'}
                src={getTwitchChatUrl(
                  streamer.broadcaster_login,
                  configStore.darkModeEnabled,
                  host
                )}
                allowFullScreen={true}
              />
            )}
          </li>
        );
      })}
    </ul>
  );

  const renderintegratedChatSection = () =>
    streamerListStore.list.length && configStore.displayChat && chatUser ? (
      <div className="flex flex-col flex-[0.2]">
        {streamerListStore.list.length > 1 && (
          <ul className="flex flex-col">
            {streamerListStore.list.map(streamer => {
              return (
                <li
                  className="p-4"
                  key={streamer.id}
                  // colorScheme={
                  //   chatUser === streamer.id
                  //     ? 'teal'
                  //     : configStore.darkModeEnabled
                  //     ? 'blackAlpha'
                  //     : 'gray'
                  // }
                  onClick={() => {
                    setChatUser(streamer.broadcaster_login);
                  }}
                >
                  {streamer.broadcaster_login}
                </li>
              );
            })}
          </ul>
        )}
        <iframe
          title="chat"
          scrolling="no"
          id={'chat-' + chatUser + '-embed'}
          src={getTwitchChatUrl(chatUser, configStore.darkModeEnabled, host)}
          height="100%"
          width="100%"
        />
      </div>
    ) : (
      <></>
    );

  return (
    <div
      className="flex w-full"
      // bg={configStore.darkModeEnabled ? 'gray.800' : 'gray.100'}
    >
      <Observer>{renderPlayers}</Observer>
      <Observer>{renderintegratedChatSection}</Observer>
    </div>
  );
}
