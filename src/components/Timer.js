// import React, { useRef, useEffect, useState } from "react";

// export default function Timer({start, exercise}) {

//     const [seconds, setSeconds] = useState(start)
//     const [stop, setStop] = useState(true)

//     let intervalRef = useRef();

//     const decreaseSeconds = () => setSeconds((prevSeconds) => prevSeconds - 1);

//     useEffect(() => {
//             setStop(true);
//             return () => clearInterval(intervalRef.current);
//           }, []);

//     const startTimer = () => {
//             let interval = setInterval(() => {
//                 if (seconds > 0) {
//                     setSeconds((prevSeconds) => prevSeconds - 1);
//                 }
//             }, 1000)
//               return () => clearInterval(interval);
//         }  

//     return (
//         <div>
//             {exercise} | {seconds}
//             <button onClick={startTimer}>+</button>
//         </div>
//     )
// }

import React, { useRef, useEffect, useState } from "react";

export default function Timer() {
  const [num, setNum] = useState(5);
  const [pause, setPause] = useState(true);
  
  let intervalRef = useRef();
  
  const decreaseNum = () => setNum((prev) => prev - 1);

  useEffect(() => {
    setPause(true);
    // intervalRef.current = setInterval(decreaseNum, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);
  
  const handleClick = () => {
    if (!pause) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(decreaseNum, 1000);
    }
    setPause((prev) => !prev);
  };
  
  return (
    <div>
      <div>{num}</div>
      <button onClick={handleClick}>{pause ? "Run" : "Pause"}</button>
    </div>
  );
}