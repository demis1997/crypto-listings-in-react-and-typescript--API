import { Container } from '@chakra-ui/react';
import * as React from 'react'
import { CryptoExchange } from './components/CryptoExchange/CryptoExchange';
import { ToggleColorMode } from './components/ToggleColorMode/ToggleColorMode';

function App() {
  return (
    <Container>
      <ToggleColorMode />
      <CryptoExchange />
    </Container>
  );
}

export default App;
