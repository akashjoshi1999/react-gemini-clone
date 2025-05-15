import React, { useEffect } from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import { initGA } from './analytics';

const App = () => {
  useEffect(() => {
    initGA();
  }, []); // Corrected syntax

  return (
    <>
      <Sidebar />
      <Main />
    </>
  );
};

export default App;
