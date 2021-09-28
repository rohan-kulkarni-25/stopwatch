import React, { useState } from "react";
import Controls from "./Controls";
import DisplayTimer from "./DisplayTimer";
import './StopWatch.css'


export default function StopWatch() {
  let [time, setTime] = useState({ m: 0, s: 0, ms: 0 });
  const [status, setstatus] = useState(0);
  return (
    <div className="section">
      <DisplayTimer time={time} status={status} />
      <Controls time={time} setTime={setTime} status={status} setstatus={setstatus}></Controls>
    </div>
  );
}
