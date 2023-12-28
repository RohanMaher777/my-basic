import {useState} from "react"

function GrandChildComponent (props){
    console.log("GrandChildComponent is rendered");
    console.log(props);
    return <>
    <div>
    Hi there - {props.firstName} {props.lastName}
    </div>
    </>

}

function ChildComponent ({...props}){
    console.log("ChildComponent is rendered");
    return <>
    <GrandChildComponent {...props}/>
    </>
}

function HelloWorldwithState(){
    const [firstName, setFirstName] =  useState("Neelkanth")
    const [lastName, setLastName] = useState("Swami")
    console.log("HelloWorldwithState component is re-rendered");

    return <>
    <div>
        <ChildComponent firstName = {firstName} lastName = {lastName} email="hello@gmail.com"/>
        <button onClick={() => {
            setFirstName("Shankar")
            setTimeout(() => {
                setLastName("SadaShiv")
            }, 1000)
            
        }}>Update Name</button>
    </div>

    </>
}

export default HelloWorldwithState