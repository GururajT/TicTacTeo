import react from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css'
import Game from './Game';
import Firstpage from './Firstpage';
function App() {
  
  return (
    <>
      <Router>
        <Routes>
        <Route exact path='/' element={<Firstpage/>}></Route>
          <Route path='/start' element={<Game/>}></Route>
        </Routes>
      </Router>
     
    </>
  )
}

export default App
