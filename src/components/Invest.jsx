import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import "../style.css"
import sexSound from "../audionClips/sex_sound.mp3"
import dateSound from "../audionClips/date_sound.mp3"
import phoneSound from "../audionClips/phone_sound.mp3"
import hitSound from "../audionClips/hit_sound.mp3"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPiggyBank , faCoins} from '@fortawesome/free-solid-svg-icons'

const HIT_VALUE = 1
const PHONE_VALUE = 3
const DATE_VALUE = 5
const SEX_VALUE = 10

const HIT = "HIT"
const PHONE = "PHONE"
const DATE = "DATE"
const SEX = "SEX"

export default function Invest({ soundPlay, updateMoney, money }) {
  const [move, setMove] = useState(false);
  let history = useHistory();


  function investMoney(actionName, amount) {
    updateMoney(amount)
    localStorage.setItem("money", amount)
    

    let stam = actionName === SEX ? soundPlay(sexSound) : null
    stam = actionName === DATE ? soundPlay(dateSound) : null
    stam = actionName === PHONE ? soundPlay(phoneSound) : null
    stam = actionName === HIT ? soundPlay(hitSound) : null
    

    
    let a = !move? setMove(true):setMove(false)
    setTimeout(()=>{
      setMove(false)
    },3000)

  }

  return <div className='center'>
    <h1>הכנסות</h1>
    <div className="money-container">
      <p className='money'>ערך צבור: {money}</p>
      <div className="piggy">
        <FontAwesomeIcon icon={faPiggyBank} size="lg" />

        
      </div>
    </div>
    <div className='container'>
      <div className="buttons">
        {/* <div className="coin-icon"></div> */}
        <FontAwesomeIcon className={move ? 'move coin-icon' : 'coin-icon'} icon={faCoins} size="lg" />

        <button className='invest-button action-button' onClick={() => investMoney(HIT, money + HIT_VALUE)}>התחלה</button><br />
        <button className='invest-button action-button' onClick={() => investMoney(PHONE, money + PHONE_VALUE)}>טלפון</button><br />
        <button className='invest-button action-button' onClick={() => investMoney(DATE, money + DATE_VALUE)}>דייט</button><br />
        <button className='invest-button action-button' onClick={() => investMoney(SEX, money + SEX_VALUE)}>סקס</button><br />
      </div>
    </div>

    <button onClick={e => history.push("/expense")}>הוצאות</button>

  </div>;
}
