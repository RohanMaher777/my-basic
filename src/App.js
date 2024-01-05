import React from "react";
//import { SimpleCard as Card } from "./components/Cards"; //renaming of named export component
import { SimpleCard, CardWithLink } from "./components/Cards";
// import { HelloWorld } from "./HelloWorld";
// import Cars from "./components/CarsList";
// import HelloWorldwithState from "./components/HelloWorldwithState";
// import Toggler from "./components/Toggle";
// import ChildernExample from "./components/ChildernExample";

function App() {
  return (
    <div>
        {/* <HelloWorld/> */}
      {/* <Cars/>
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
            </ChildernExample> */}
      <div>
        <h3>List of Cards</h3>
        <div className="cards-container">
          <SimpleCard title="MS.Dhoni">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, quam cumque doloremque nisi inventore odit adipisci ea
            in, similique magni et! Aut rerum ab quaerat consequatur, distinctio
            nostrum adipisci magni.
          </SimpleCard>
          <CardWithLink title="MS.Dhoni" href="https://en.wikipedia.org/wiki/MS_Dhoni" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, quam cumque doloremque nisi inventore odit adipisci ea
            in, similique magni et! Aut rerum ab quaerat consequatur, distinctio
            nostrum adipisci magni.
          </CardWithLink>
        </div>
      </div>
    </div>
  );
}

export default App;
