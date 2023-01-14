import React from 'react';

import {observer} from "mobx-react-lite";
import {useStore} from "../../store/connect";



export const Counter = observer(() => {

    console.log('counter')
    const {counter}=useStore()
    return (
        <div style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
            {counter.total}
            <div>
                <button onClick={()=>counter.increment()}>inc</button>
                <button onClick={()=>counter.decrimente()}>dec</button>
            </div>
            <div>value {counter.count}</div>
        </div>
    );
});

