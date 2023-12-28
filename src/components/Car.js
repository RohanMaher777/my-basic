function CarName(myProps){
    return <span>{myProps.Name}</span>
}

function CarPrice(myProps){
    return <span>- ${myProps.price}</span>
}


function Car ({carName:name, price}){ // by destructing we are getting data 
    return (<li>
        <CarName Name = {name}/>
        <CarPrice price = {price}/>
    </li>)
}

export default Car