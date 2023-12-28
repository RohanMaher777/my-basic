

function greeting(time){
    return (time >= 12 ? 'Good afternoon !': 'Good morning') 
}

function getFullName (firstName, lastName){
    return (<span>{firstName} {lastName}</span>)
}

function HelloWorld() {
  let firstName = "Avi";
  let lastName = "dakshatra"
  const time = 15
  
  return <>
    <div>
      <h3> {greeting(time)} {getFullName(firstName, lastName)}</h3>
    </div>
    <div>
      <button onClick={() =>{
        firstName = "Neel"
        lastName = "lohit"
        console.log(getFullName(firstName, lastName))
      }}>Upadte Name</button>
    </div>

  </>;
}

export { HelloWorld };
