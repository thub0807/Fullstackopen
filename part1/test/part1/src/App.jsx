// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// ===================================================

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name},you are {props.age} year old
      </p>
      <p>
        {props.names}, {props.age}
      </p>
    </div>
  )
}
const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}


const App = () => {
  const fs = ["Bob","your"]
  const friends = [
    {name: "Peter",age:40},
    {name: "Tony",age:25},
  ]
  const na = "Peter"
  const age = 25
  const now = new Date()
  const a =10
  const b = 20
  console.log(now,a+b)
  console.log("hello from component")
  return (
      <>
      <div>
        <p>
          {fs[0]}
        </p>
      </div>
      <div>
        <p>{friends[0].name} {friends[0].age}</p>
        <p>{friends[1].name} {friends[1].age}</p>
      </div>
      <Footer></Footer>
      <p>Hello world1111111 {now.toString()}</p>
      <p>
        {a} plus {b} is {a+b}
      </p>
      <Hello name="mike" age ={10+15}></Hello>
      <Hello name={na} age={age}></Hello>
      <Hello name="Daisy" age ={age}></Hello>
      <Hello names="timi" age = {10}></Hello>
      </>
  )
}

export default App