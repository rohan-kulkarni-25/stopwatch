import React from 'react'
import './DisplayTimer.css'

export default function DisplayTimer(props) {

  const { time, status } = props;

  const dot = document.getElementById('secondHand');
  if (dot !== null) {
    if (status === 0) {
      dot.style.animationName = '';
    }
    if (status === 1) {
      dot.style.animationName = 'rotate';
      dot.style.animationPlayState = 'running';
    }
    if (status === 2) {
      dot.style.animationPlayState = 'paused'
    }
  }




  return (
    <div className="timerDisplay">
      <div className="timer">
        <div id="displaytimer">
          <p id="mins">{time.m}</p>:<p id="secs">{time.s}</p>.<p id="mls">{time.ms}</p>
        </div>
        <p id="secondHand"></p>
      </div>
    </div>
  )
}
