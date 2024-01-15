function CarName(myProps){
    return <span>{myProps.Name}</span>
}

function CarPrice(myProps){
    return <span>- ${myProps.price}</span>
}

function DeleteCarButton({onClickDelete}){
    return  <button onClick={onClickDelete}>Delete</button>
}


function Car ({carName:name, price, onClickDelete}){ // by destructing we are getting data 
    return (<li>
        <CarName Name = {name}/>
        <CarPrice price = {price}/>
        &nbsp;  &nbsp;
        <DeleteCarButton onClickDelete = {onClickDelete}/>
       
    </li>)
}

export default Car