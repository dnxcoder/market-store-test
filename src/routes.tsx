import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

  import { Home } from './pages/Home';
  import { Cart } from './pages/Cart';


  export default function Routes(){



    return(

        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </Router>
    )
  }