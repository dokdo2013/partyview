import { ChakraProvider, theme } from '@chakra-ui/react';
import Nav from './Components/Nav';
import Content from './Components/Content';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <Content />
    </ChakraProvider>
  );
}

export default App;
