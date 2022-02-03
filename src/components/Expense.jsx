
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import "../style.css"
import cash from "../audionClips/cash.mp3"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons'

const KNAFE_PRICE = 23
const MALABI_PRICE = 18
const KNAFE = "KNAFE"
const MALABI = "MALABI"


export default function Expense({ soundPlay, updateMoney, money }) {

  let history = useHistory();
  const [disableKnafe, setDisableKnafe] = useState(true);
  const [disableMalabi, setDisableMalabi] = useState(true);

  useEffect(() => {
    updateDisableForSweets(KNAFE_PRICE, setDisableKnafe)
    updateDisableForSweets(MALABI_PRICE, setDisableMalabi)

  }, [money]);

  function updateDisableForSweets(price, setDisable) {
    if (price <= money) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }

  function buy(price) {
    if (money >= price) {
      updateMoney(money - price)
      localStorage.setItem("money", money - price)

      soundPlay(cash)
    }
  }

  return <div className='center'>
    <h1>הוצאות</h1>
    <div className="money-container">
      <p className='money'>ערך צבור: {money}</p>
      <div className="piggy">
        <FontAwesomeIcon icon={faPiggyBank} size="lg" />
      </div>
    </div>
    <div className="container">
      <div className="buttons">
        <button className='expense-button action-button' disabled={disableKnafe} onClick={() => buy(KNAFE_PRICE)}>כנאפה</button><br />
        <button className='expense-button action-button' disabled={disableMalabi} onClick={() => buy(MALABI_PRICE)}>מלבי</button><br />
      </div>
    </div>

    <button onClick={e => history.push("/invest")}>הכנסות</button>

  </div>;
}