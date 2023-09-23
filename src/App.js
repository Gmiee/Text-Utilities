import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import EmailExtractor from "./Components/EmailExtractor";
import { useState } from "react";
import Alert from "./Components/Alert";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null)
  // const [changeMode, setchangeMode] = useState()
  

  const showAlert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  // const [textChange, settextchange] = useState('Dark Mode')

  // const toggleText = ()=>{
  //   if(textChange === 'Dark Mode'){
  //     settextchange('Light Mode')
  //   }
  //   else{
  //     settextchange('Dark Mode')
  //   }
  // }

  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled", "success")
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled", "success")
    }
  };
  return (
    <>
      <Navbar title="Text-Utilities" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
      <Alert alert={alert}/>

      <div className="container">
        {/* <Router>
          <Routes>
            <Route exact path="/EmailExtractor" element={<EmailExtractor />} />
          </Routes>
        </Router> */}
        <TextForm Heading="Enter or Paste The text below" mode={mode} showAlert={showAlert} />
        <EmailExtractor mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
