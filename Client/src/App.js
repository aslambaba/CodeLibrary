import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {client} from './Components/ApolloProvider';
import LibraryChelf from './Components/LibraryChelf';

function App() {
  return (
    <ApolloProvider client={client}>
      <LibraryChelf />
    </ApolloProvider>
  );
}

export default App;
