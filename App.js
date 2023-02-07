import React from "react";
import { ServerReceive } from "./utils/ServerReceive.js";
import { ServerSend } from "./utils/ServerSend.js";
import { Route, BrowserRouter, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ServerReceive />
        </Route>
        <Route exact path="/send">
          <ServerSend />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
