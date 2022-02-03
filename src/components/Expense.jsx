
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
const KNAFE_PRICE = 23
const MALABI_PRICE = 18
const KNAFE = "KNAFE"
const MALABI = "MALABI"



export default function Expense({ updateMoney, money }) {

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
    if (money > price) {
      updateMoney(money - price)
    }
  }

  return <div>
    <h1>Expense</h1>
    <p>money: {money}</p>
    <button disabled={disableKnafe} onClick={() => buy(KNAFE_PRICE)}>כנאפה</button><br />
    <button disabled={disableMalabi} onClick={() => buy(MALABI_PRICE)}>מלבי</button><br />

    <button onClick={e => history.push("/invest")}>invest</button>

  </div>;
}