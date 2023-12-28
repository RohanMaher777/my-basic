import React from "react";
// import { HelloWorld } from "./HelloWorld";
import Cars from "./components/CarsList";
import HelloWorldwithState from "./components/HelloWorldwithState";
import Toggler from "./components/Toggle";
import ChildernExample from "./components/ChildernExample";

function App(){
    return (
        <div>
            {/* <HelloWorld/> */}
            <Cars/>
            <HelloWorldwithState/>
            <Toggler/>
            <ChildernExample title="MS.Dhoni">
                One of the Greatest Captain of all time
                <h4>Achivements</h4>
                <ul>
                    <li>ODI world cup 2011</li>
                    <li>T-20 world cup 2007</li>
                    <li>World test No.1 Ranking</li>
                </ul>
            </ChildernExample>

        </div>
    )
}

export default App