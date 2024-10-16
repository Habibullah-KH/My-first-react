import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // roadmap data array

const roadmap = ["HTML", "CSS", "JAVASCRIPT", "REACT", "node"];

console.log(roadmap);

  return (
    <>
      <div>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

      </div>
      <h1>My first React</h1>

<Developer></Developer>
{
  roadmap.map(data => <MernRoadmap data={data}></MernRoadmap>)
}


      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>

    </>
  )
}

// title button
function Developer(){
  return (
  <div className='dev'>

    <h3> MERN stack developer </h3>
  </div>

  )

}

// roadmap list
function MernRoadmap({data}){
  console.log(data);
  return(
<ol>
  <li>{data}</li>
</ol>
  )
}
export default App
