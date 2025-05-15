import React, { useEffect } from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
// import { initGA } from './analytics';
import ReactGA from "react-ga4";

ReactGA.initialize("G-6V93120ZYM"); // Replace with your GA4 Measurement ID
ReactGA.send("pageview");
const App = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  // useEffect(() => {
  //   initGA();
  // }, []); // Corrected syntax

  return (
    <>
      <Sidebar />
      <Main />
    </>
  );
};

export default App;

