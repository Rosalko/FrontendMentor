import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Column from "./components/Column";
import data from "../data.json"

function App() {

  const max = data.sort((a,b) => a.amount - b.amount)[0].amount
  return (
    <div style={{display: "flex", alignItems: "end"}}>{data.map(({day, amount}, i) => <Column {...{day,amount}} height={(amount * 50)/max} isCurrent={i === 3}/>)}</div>
  )
}

export default App
