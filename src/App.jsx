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
import { Howl, Howler } from 'howler';

function App() {
  const [money, setMoney] = useState(0);

  useEffect(() => {
    let storedMoney = parseInt(localStorage.getItem("money"))
    if (storedMoney) {
      setMoney(storedMoney)
    } else {
      localStorage.setItem("money", money)
    }

  }, []);

  function soundPlay(src) {
    const sound = new Howl({
      src
    })
     sound.play()
  }


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/invest" />
        </Route>

        <Route path="/invest"  >
          <Invest soundPlay={soundPlay} updateMoney={setMoney} money={money} />
        </Route>

        <Route path="/expense" >
          <Expense soundPlay={soundPlay} updateMoney={setMoney} money={money} />
        </Route>

      </Switch>
    </Router>
  )

}


export default App;

