import React from 'react';
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import theme from './Theme'
import SingleCard from './SingleCard'
import MainIntegrify from './MainIntegrify'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainIntegrify></MainIntegrify>
          </Route>
          <Route path="/single/:id">
            <SingleCard ></SingleCard>
          </Route>
        </Switch>
      </BrowserRouter>


    </ThemeProvider>

  );
}
export default App;
