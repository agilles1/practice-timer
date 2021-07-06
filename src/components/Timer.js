import React, { useState } from 'react';

export default function Timer({start, exercise}) {

    const [seconds, setSeconds] = useState(start)

    function startTimer() {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
          }, 1000);
          return () => clearInterval(interval);
    }
    
    return (
        
        <div>
            {exercise} | {seconds}
            <button onClick={startTimer}>+</button>
        </div>
    )
}