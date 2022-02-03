import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import "../style.css"

const HIT_VALUE = 1
const PHONE_VALUE = 3
const DATE_VALUE = 5
const SEX_VALUE = 10

export default function Invest({ updateMoney, money }) {

  let history = useHistory();


  function investMoney(amount) {
    updateMoney(amount)
    localStorage.setItem("money",amount)
  }
  return <div className='center'>
    <h1>Invest</h1>
    <p className='money'>money: {money}</p>
    <div className='container'>
      <div className="buttons">
        <button className='invest-button action-button' onClick={() => investMoney(money + HIT_VALUE)}>HIT</button><br />
        <button className='invest-button action-button' onClick={() => investMoney(money + PHONE_VALUE)}>PHONE</button><br />
        <button className='invest-button action-button' onClick={() => investMoney(money + DATE_VALUE)}>DATE</button><br />
        <button className='invest-button action-button' onClick={() => investMoney(money + SEX_VALUE)}>SEX</button><br />
      </div>
    </div>

    <button onClick={e => history.push("/expense")}>expense</button>

  </div>;
}
