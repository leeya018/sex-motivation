import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import "../style.css"
import sexSound from "../audionClips/sex_sound.mp3"
import dateSound from "../audionClips/date_sound.mp3"
import phoneSound from "../audionClips/phone_sound.mp3"
import hitSound from "../audionClips/hit_sound.mp3"



const HIT_VALUE = 1
const PHONE_VALUE = 3
const DATE_VALUE = 5
const SEX_VALUE = 10

const HIT = "HIT"
const PHONE = "PHONE"
const DATE = "DATE"
const SEX = "SEX"

export default function Invest({ soundPlay, updateMoney, money }) {

  let history = useHistory();


  function investMoney(actionName, amount) {
    updateMoney(amount)
    localStorage.setItem("money", amount)
    let stam = actionName === SEX ? soundPlay(sexSound) : null
    stam = actionName === DATE ? soundPlay(dateSound) : null
    stam = actionName === PHONE ? soundPlay(phoneSound) : null
    stam = actionName === HIT ? soundPlay(hitSound) : null



  }

  return <div className='center'>
    <h1>Invest</h1>
    <p className='money'>money: {money}</p>
    <div className='container'>
      <div className="buttons">
        <button className='invest-button action-button' onClick={() => investMoney(HIT, money + HIT_VALUE)}>HIT</button><br />
        <button className='invest-button action-button' onClick={() => investMoney(PHONE, money + PHONE_VALUE)}>PHONE</button><br />
        <button className='invest-button action-button' onClick={() => investMoney(DATE, money + DATE_VALUE)}>DATE</button><br />
        <button className='invest-button action-button' onClick={() => investMoney(SEX, money + SEX_VALUE)}>SEX</button><br />
      </div>
    </div>

    <button onClick={e => history.push("/expense")}>expense</button>

  </div>;
}
