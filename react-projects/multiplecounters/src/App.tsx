import './App.css';
import React, { useState } from 'react';

const App: React.FC = () => {
    const [counters, setCounters] = useState([{ id: 1, value: 0 }]);

    const addCounter = () => {
        setCounters([...counters, { id: counters.length + 1, value: 0 }]);
    };
    const removeCounter = () => {
        setCounters(prev => (prev.length > 1 ? prev.slice(0, -1) : prev));
    };



    const incrementCounter = (id: number) => {
        setCounters(counters.map(counter =>
            counter.id === id ? { ...counter, value: counter.value + 1 } : counter
        ));
    };

    const decrementCounter = (id: number) => {
        setCounters(counters.map(counter =>
            counter.id === id ? { ...counter, value: counter.value - 1 } : counter
        ));
    };

    return (
        <div className="app">
            <h1>Multi Counter App</h1>
            <button className="add-btn" onClick={addCounter}>+ Counter</button>
            <button className={"add-btn"} onClick={removeCounter}>- Counter</button>
            <ul className="counter-list">
                {counters.map(counter => (
                    <li key={counter.id} className="counter-card">
                        <span>Counter {counter.id}: <strong>{counter.value}</strong></span>
                        <div className="button-group">
                            <button onClick={() => incrementCounter(counter.id)}>+</button>
                            <button onClick={() => decrementCounter(counter.id)}>-</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
