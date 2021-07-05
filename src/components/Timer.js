import React, { useState, useEffect } from 'react';

// function Timer() {

//     const [seconds, setSeconds] = useState(50)

//     const startTimer = () => {
//         setInterval(setSeconds(seconds - 1), 1000)
//     }
    
//     return (
//         <div>
//             {seconds}
//             <button onClick={startTimer}>+</button>
//         </div>
//     )
// }

// export default Timer

const Timer = (props) => {
    const {initialMinute = 0,initialSeconds = 15} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div>
        { minutes === 0 && seconds === 0
            ? null
            : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
        </div>
    )
}

export default Timer;