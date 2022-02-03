import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";


export default function Invest({ updateMoney, money }) {

  let history = useHistory();

  return <div>
    <h1>Invest</h1>
    <p>money: {money}</p>
    <button onClick={() => updateMoney(money + 5)}>start</button><br />
    <button onClick={e => history.push("/expense")}>expense</button>

  </div>;
}
