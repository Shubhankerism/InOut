import React from "react";
import { Route, Switch } from "react-router-dom";

import CheckIn from "./page/CheckIn";
import CheckOut from "./page/CheckOut";
import Current from "./page/Current";
import Past from "./page/Past";

import HomePage from "./page/HomePage";


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/checkin" component={CheckIn} />
        <Route exact path="/checkout" component={CheckOut} />
        <Route exact path="/current" component={Current} />
        <Route exact path="/past" component={Past} />

        <Route
          render={function () {
            return (
              <>
                <h1 className="display-4 text-center mt-5">Oops! Looks like you've come to a wrong place.</h1>
                <h4 className="text-muted text-center">Hit HOME button to return!</h4>
              </>);
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
