import React from 'react';
import counter from "../../store/counter";
import {observer} from "mobx-react-lite";


export const Counter = observer(() => {
    return (
        <div style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
            <div>
                <button onClick={()=>counter.increment()}>inc</button>
                <button onClick={()=>counter.decrimente()}>dec</button>
            </div>
            <div>value {counter.count}</div>
        </div>
    );
});

