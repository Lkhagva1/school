import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import {  UserStore } from './components/context/authContext';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider >  
    <UserStore >
    <App />
    </UserStore>
  </ChakraProvider>
);
