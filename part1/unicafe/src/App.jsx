import { useState } from 'react'














const Button = (props)=>{
  
  return(

    <button onClick={props.onClick} >
      {props.text}
    </button>
  )
}

const Statistic  = (props)=>{
  return(
    <>
  <tr>
    <td>
    {props.name}
    </td>
    <td>
    {props.value}
    </td>
  </tr>
  </>
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = ()=>{
    setGood(good+1)
  }
  const addNeutral = ()=>{
    setNeutral(neutral+1)
  }
  const addBad = ()=>{
    setBad(bad+1)
  }
  const all = good +bad+ neutral

 

  if (good===0 &&neutral ===0  &&bad ===0){
    return(
      <>
      <h1>give feedback</h1>
      <Button onClick={addGood} text="good"></Button>
      <Button onClick={addNeutral} text="neutral"></Button>
      <Button onClick={addBad} text="bad"></Button>
      <h1>Statistic</h1>
      <p>
        NO Feedback given
      </p>
      </>
      )
  }
  //
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={addGood} text="good"></Button>
      <Button onClick={addNeutral} text="neutral"></Button>
      <Button onClick={addBad} text="bad"></Button>
      <h1>Statistic</h1>
      <table>
        <tbody>
      <Statistic name="good" value={good}></Statistic>
      <Statistic name="neutral" value={neutral}></Statistic>
      <Statistic name="bad" value={bad}></Statistic>
      <Statistic name="average" value={(good-bad)/all}></Statistic>
      <Statistic name="positive" value={String((good/all)*100)+ "%"}></Statistic>
      </tbody>
      </table>
    </div>
  )
}
export default App