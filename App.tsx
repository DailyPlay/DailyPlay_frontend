/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import './global.css';

import RootNavigation from 'navigation';

import {theme} from 'styles/color';
import {ThemeProvider} from 'styled-components';

function App(): React.JSX.Element {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {throwOnError: true, retry: 2},
      mutations: {throwOnError: true, retry: 2},
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RootNavigation />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
