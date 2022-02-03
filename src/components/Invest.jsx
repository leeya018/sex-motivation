import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

const HIT_VALUE = 1
const PHONE_VALUE = 3
const DATE_VALUE = 5
const SEX_VALUE = 10

export default function Invest({ updateMoney, money }) {

  let history = useHistory();

  return <div>
    <h1>Invest</h1>
    <p>money: {money}</p>
    <button onClick={() => updateMoney(money + HIT_VALUE)}>HIT</button><br />
    <button onClick={() => updateMoney(money + PHONE_VALUE)}>PHONE</button><br />
    <button onClick={() => updateMoney(money + DATE_VALUE)}>DATE</button><br />
    <button onClick={() => updateMoney(money + SEX_VALUE)}>SEX</button><br />

    <button onClick={e => history.push("/expense")}>expense</button>

  </div>;
}
