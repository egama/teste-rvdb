import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { NotepadProvider } from './contexts/notepad';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <NotepadProvider>
        <Routes />
      </NotepadProvider>
    </NavigationContainer>
  );
};

export default App;