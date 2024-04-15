import { useState } from "react"




const Header = (props) =>{
  // console.log(props)
  return(
    <h1>{props.course}</h1>
  )

}
const Content =(props) =>{
  const parts = props.info
  // console.log(parts[0])
  return(
    <div>
      <Part info={parts[0]}></Part>
      <Part info={parts[1]}></Part>
      <Part info={parts[2]}></Part>
    </div>
  )
 
}
const Total = (props) =>{
  const parts = props.info
  return(
    <p>
      {parts[0].exercises+parts[1].exercises+parts[2].exercises}
    </p>
  )

}
const Part = (props)=>{
  const info = props.info
  return (
    <>
    <p>
      {info.part} 
    </p>
    <p>{info.exercises}</p>
    </>
  )
}
const Hello = (props) => {
  const bornYear=()=>{
    const yearNow = new Date().getFullYear()
    return yearNow-props.age
  }
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>
        So you were probably born in {bornYear()} 
      </p>
    </div>
  )
}
const Display= (props)=>{
  return(
    <div>
      {props.counter}
    </div>
  )

}
const Button = (props)=>{
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}



const App = () => {
  // const  [ counter,setCounter] = useState(0)
  // console.log(counter)
  // console.log(setCounter)
  // setTimeout(
  //   ()=> setCounter(counter+1),
  //   1000
  // )
  // console.log(counter)


  // ==== click ====
  const [ counter,setCounter] = useState(10)

  const increaseByOne = ()=>setCounter(counter+1)
  const decreaseBuOne = ()=>setCounter(counter-1)
  const setZero = ()=>setCounter(0)

//  ==== Handling arrays =====
  const [left,setLeft] = useState(0)
  const [right,setRight] = useState(0)
  const [allClicks,setAll] = useState([])

  const handleLeftClick = ()=>{
    setAll(allClicks.concat("L"))
    setLeft(left+1)
  }
  const handleRightClick= ()=>{
    setAll(allClicks.concat("R"))
    setRight(right+1)
  }

// ==== ====
  function foo(x, condition) {
    if (condition) {
      console.log(x);
      // const x = 2;
      console.log(x)
    }
  }
  
  foo(1, true);
  
  class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    greet() {
      console.log('hello, my name is ' + this.name)
    }
  }
  
  const adam = new Person('Adam Ondra', 29)
  adam.greet()
  
  const janja = new Person('Janja Garnbret', 23)
  janja.greet()
  const arto = {
    name: 'Arto Hellas',
    greet: function() {
      console.log('hello, my name is ' + this.name)
    },
  }
  // setTimeout(arto.greet, 5000)
  // setTimeout(arto.greet.bind(arto), 5000)
  const course = 'Half Stack application development'
  const info = [
    {part: 'Fundamentals of React',exercises:10},
    {part: 'Using props to pass data',exercises:7},
    {part: 'State of a component',exercises:14},
  ]

  return (
    <div>
      <div>
        {left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {right}
        <p>
          {allClicks.join(" ")}
        </p>
      </div>
      <div>
        <Display counter={counter}></Display>
        <Button onClick={increaseByOne} text="plus"></Button>
        <Button onClick={decreaseBuOne} text="mius"></Button>
        <Button onClick={setZero} text="Zero"></Button>
      </div>
     <Header course={course}></Header>
     <Content info={info}></Content>
     <Total info={info}></Total>
     <Hello name="MIke" age="18"></Hello>
     <Hello name="John" age="25"></Hello>
    </div>
  )
}

export default App