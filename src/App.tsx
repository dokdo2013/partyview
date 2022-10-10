import { useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Nav from './Components/Nav';
import Content from './Components/Content';

function App() {
  const [selectedUser, setSelectedUser] = useState([]);

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
