import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./style.css"
import Invest from "./components/Invest";
import Expense from "./components/Expense";

function App() {
  const [money, setMoney] = useState(0);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/invest" />
        </Route>

        <Route path="/invest"  >
          <Invest updateMoney={setMoney} money={money} />
        </Route>

        <Route path="/expense" >
          <Expense updateMoney={setMoney} money={money} />
        </Route>

      </Switch>
    </Router>
  )

}


export default App;

