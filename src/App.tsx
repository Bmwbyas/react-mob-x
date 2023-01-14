import React from 'react';
import './App.css';
import {Counter} from "./features/counter/Counter";
import {Todos} from "./features/todos/Todos";

function App() {
    return (
        <div>
            <Counter/>
            <Todos/>
        </div>
    );
}

export default App;
