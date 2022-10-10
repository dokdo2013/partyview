import { useState } from 'react';
import { Observer } from 'mobx-react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Nav from './Components/Nav';
import Content from './Components/Content';

function App() {
  const [selectedUser, setSelectedUser] = useState([]);

  // on Fail => Sentry.captureException(e);

  return (
    <ChakraProvider theme={theme}>
      <Nav
        data={{
          selectedUser,
          setSelectedUser,
        }}
      ></Nav>
      <Content data={{ selectedUser }} />
    </ChakraProvider>
  );
}

export default App;
