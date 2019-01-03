import React from 'react';
import AntraxPlayer from './AntraxPlayer';
import {BrowserRouter, Route, Switch}  from 'react-router-dom'
import GlobalStyle from '../styles/GlobalStyle';

const App = () => (
  <BrowserRouter>
  <>
    <Switch>
      <Route exact path="/" component={AntraxPlayer} />
      <Route exact path="/:activeVideo" component={AntraxPlayer} />
    </Switch>
    <GlobalStyle/>
  </>  
  </BrowserRouter>
)

export default App;