
import axios from "axios"
import { useState } from 'react'
import './App.css';

function App() {

  const [studentInfo, setStudentInfo] = useState()
  const [account, setAccounts] = useState()

  function testFetch() {



    axios.get('http://127.0.0.1:5000/api').then((res) => {
      setStudentInfo(res.data)
      console.log(res)
    })

  }


  function fetchMe() {
    axios.get('http://127.0.0.1:5000/students/justin/229').then((res) => {
      //setStudentInfo(res.data)
      console.log(res)
    })
  }

  function renderStudentInfo() {
    if (studentInfo != null) {
      return (<div className="student-container">{studentInfo.name}</div>)
    }
  }





  return (
    <div className="App">









      <div><h1>SERVER TESTING</h1><button onClick={() => {
        axios.get("http://127.0.0.1:5000/students/120").then((res) => { console.log(res) })
      }}>DATABASE</button></div>
    </div >
  );
}

export default App;
