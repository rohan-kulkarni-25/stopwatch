import React, { useState } from 'react'
import './Controls.css'


export default function Controls(props) {
  const [lap, setlap] = useState([]);
  const { time, setTime, setstatus } = props
  const [intervalState, setintervalState] = useState();



  const start = () => {
    started();
    setstatus(1);
    setintervalState(setInterval(started, 10));
    document.getElementById('start').style.display = 'none';
    document.getElementById('lap').style.display = 'initial';
    document.getElementById('pause').style.display = 'initial';

  };
  const paused = () => {
    clearInterval(intervalState);
    setstatus(2);
    document.getElementById('start').style.display = 'none';
    document.getElementById('lap').style.display = 'none';
    document.getElementById('pause').style.display = 'none';
    document.getElementById('reset').style.display = 'initial';
    document.getElementById('resume').style.display = 'initial';

  };

  const resumed = () => {
    setstatus(1);
    start();
    document.getElementById('start').style.display = 'none';
    document.getElementById('lap').style.display = 'initial';
    document.getElementById('pause').style.display = 'initial';
    document.getElementById('reset').style.display = 'none';
    document.getElementById('resume').style.display = 'none';
  };

  const reset = () => {

    clearInterval(intervalState);
    setstatus(0);
    setlap([]);
    const appendTo = document.getElementById('lapy');
    appendTo.innerHTML = '';
    document.getElementById('start').style.display = 'initial';
    document.getElementById('lap').style.display = 'none';
    document.getElementById('pause').style.display = 'none';
    document.getElementById('reset').style.display = 'none';
    document.getElementById('resume').style.display = 'none';
    return setTime({ m: 0, s: 0, ms: 0 });

  };

  const laped = () => {
    let lapobj = [time.m, time.s, time.ms];
    let lapArray = lap;
    lapArray.push(lapobj);
    setlap(lapArray);
    const appendTo = document.getElementById('lapy');
    appendTo.innerHTML = '';
    lap.forEach(element => {
      const lapDiv = document.createElement('div');
      lapDiv.className = 'lapdetails';
      lapDiv.innerHTML = `<p>${(lap.indexOf(element)) + 1}</p><p>M :- ${element[0]}</p><p>S :- ${element[1]}</p><p>MS :- ${element[2]}</p>`;
      appendTo.prepend(lapDiv);
    });

  };

  let newSec = time.s;
  let newMin = time.m;
  let newMilSec = time.ms;

  const started = () => {
    if (newMilSec >= 60) {
      newMilSec = 0;
      newSec++;
    } else {
      newMilSec++;
    }
    if (newSec >= 60) {
      newSec = 0;
      newMin++;
    }
    return setTime({ ms: newMilSec, s: newSec, m: newMin });
  };

  return (
    <div className="sectionControls">
      <div className="laplog" id="lapy"></div>
      <div className="controls">
        <button onClick={start} id="start">Start</button>
        <button onClick={laped} id="lap">Lap</button>
        <button onClick={paused} id="pause">Pause</button>
        <button onClick={reset} id="reset">Reset</button>
        <button onClick={resumed} id="resume">Resume</button>
      </div>
    </div>
  )
}
