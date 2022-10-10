import { useState } from 'react';
import { Observer } from 'mobx-react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Nav from './Components/Nav';
import Content from './Components/Content';
import ContentFull from './Components/ContentFull';
import configStore from './stores/ConfigStore';

function App() {
  const [broadcastMember, setBroadcastMember] = useState(1);
  const [broadcastMemberList, setBroadcastMemberList] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);

  // on Fail => Sentry.captureException(e);

  const renderChat = () =>
    configStore.displayEachChat ? (
      <ContentFull data={{ selectedUser, broadcastMemberList }} />
    ) : (
      <Content data={{ selectedUser, broadcastMemberList }} />
    );

  return (
    <ChakraProvider theme={theme}>
      <Nav
        data={{
          selectedUser,
          setSelectedUser,
          broadcastMember,
          broadcastMemberList,
        }}
      ></Nav>
      <Observer>{renderChat}</Observer>
    </ChakraProvider>
  );
}

export default App;
