import { useState,useEffect} from 'react';
import './App.css';
import { Link } from 'react-router-dom';



function Firstpage() {
  const [advice, setAdvice] = useState();
  const [value,setValue]=useState("X");
  const [xstyle,xsetStyle]=useState();
  const [ostyle,osetStyle]=useState();
  const [copied,setCopied]=useState("invitehid");

  const fetchFact=()=>{
    fetch('https://api.adviceslip.com/advice').then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data.slip.advice)
      setAdvice(data.slip.advice)
    })
    .catch((err)=>{
      alert("something went wrong")
      console.log(err)
    })
  }
  setTimeout(()=>{
    fetchFact()
  },100)
  useEffect(()=>{
    fetchFact();
  },[])

  const xvalue=()=>{
    setValue("X");
    xsetStyle("xbutton")
    osetStyle("none")
  }
  const ovalue=()=>{5 
    setValue("O");
    osetStyle("xbutton")
    xsetStyle("none")
  }
  const handleinvite=()=>{
    setCopied("invite")
  }
  return (
    <>
     <div className='content'>
      <div className='box'>
        <div>
          <span className='xsub'>X</span>
          <span className='osub'>O</span>
        </div>
        <div className='option'>
          <p>PICK PLAYER</p>
          <div className='opt'>
            <button onClick={xvalue} className={xstyle}>X</button>
            <button onClick={ovalue} className={ostyle}>O</button>
          </div>
        </div>
        <div className='options'>
          <Link to="/start"   className='start'>new game(vs CPU)</Link>
          <button className='soon'>new game(vs human) coming soon</button>
          <div className='share'>
          <button onClick={handleinvite}>invite your friend</button>
          </div>
          </div>
      </div>
     </div>
     <div className='thought'>
        <p className='quotes'>Quotes #1</p>
        <p className='facts'>"{advice}"</p>
     </div>
     <div className={copied}>
        <p>Invite Link Copied</p>
     </div>
    </>
  )
}

export default Firstpage;
