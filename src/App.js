import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';



import { ROUTES } from './shared/constants/routes.constants';

const App = () => {
  // return <div>I'm the App component!</div>;
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route to={ROUTES.landing} exact component={} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
