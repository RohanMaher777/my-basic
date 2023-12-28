/**
 * Updating the state of component using callback
 */
import {useState} from 'react';

function Toggler (){
    const [toggle, setToggle] = useState(true)
    console.log("Toggler renderd");

    return <div>
        value :: {toggle ? "ON" : "OFF"} &nbsp;
        <button onClick={() => {
            setTimeout(()=>{
                setToggle((preValue)=>{
                    return !preValue
                }) 
            }, 1000)
            
        }}>click</button>

        
    </div>
    
}

export default Toggler