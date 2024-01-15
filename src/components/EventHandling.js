import {useState} from 'react';

function ClickMe(){
    const [firstName, setFirstName] = useState('Rudra') 
    return <>
    <div>
        Hello {firstName}
       
    </div>
    <div>
            <button onClick={(event) =>{
                setFirstName("Shiva")                
            }}>ClickMe</button>
        </div>
    </>
}

export {
    ClickMe
}