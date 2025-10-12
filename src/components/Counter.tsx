// import React from 'react'
interface CounterProps {
    handleIncrease: () => void;
    handleDecrease: () => void;
    handleReset: () => void;
    count: number;
}

const Counter = ({ handleIncrease, handleDecrease, handleReset, count }: CounterProps) => {

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={handleIncrease}>increment</button>
            <button onClick={handleDecrease}>decement</button>
            <button onClick={handleReset}>reset</button>
        </div>
    )
}

export default Counter