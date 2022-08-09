
//parent
import React from 'react';

//cross =  https://loading.io/icon/hevw6u
import { useState } from 'react';
import Child from './Child';
function Parent(){
    const[count,setCount]=useState(1);
    function callBack(params){
        console.log("check");
        setCount(params);
    }
    return (
        <div>
            <Child callBack={callBack}/>
            <h2>Count: {count}</h2>

        </div>
    )
}
export default Parent;