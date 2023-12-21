import React from "react";

function greeting(time){
    return (time >= 12 ? 'Good afternoon !': 'Good morning') 
}

function getFullName (firstName, lastName){
    return (<span>{firstName} {lastName}</span>)
}

function HelloWorld() {
  const firstName = "Avi";
  const lastName = "dakshatra"
  const time = 15
  const respose = (
    <div>
      <h3> {greeting(time)} {getFullName(firstName, lastName)}</h3>
    </div>
  );
  return respose;
}

export { HelloWorld };
