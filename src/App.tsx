import React from 'react';
import AppScreenStacks from './common/stacks/AppScreenStacks';
import {ModalProvider} from './components/Modal/useModal';

function App() {
  return (
    <ModalProvider>
      <AppScreenStacks />
    </ModalProvider>
  );
}

export default App;
