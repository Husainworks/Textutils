import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark Mode has been Enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been Enabled", "success");
    }
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path='/about' element={<About mode = {mode}/>} />
          <Route exact path='/' element={<TextForm showAlert = {showAlert} heading = "Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode = {mode} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;