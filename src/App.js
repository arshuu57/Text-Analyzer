import React,{useState} from 'react'
import Navbar from './Components/Navabar';
import Text from './Components/Text';
import About from './Components/About';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App()
{
  const[Mode, setMode] = useState('light');
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled","success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
    }
  };
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
        msg: message,
        Type: type
    })
    setTimeout(() => {
      setAlert(null)
    },6000);
}
  return(
    <>
     <Router>
    <Navbar title="Text Recognation App" about="About us"  mode={Mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Routes>
    <Route path="/" element={<Text head = "This is the form" mode={Mode} showAlert={showAlert} />}>
            
          </Route>
    <Route path='/about' element={<About/>}>
          </Route>
              </Routes>
     </Router>
    </>

  )

}
export default App;