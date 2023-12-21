const cars = [ 'Audi', 'XUV 700', 'Fortuner']

function Cars(){
    return(
        <div>
            <ul>
                {cars.map(car => {
                    return (<li>{car}</li>)
                })}
            </ul>
        </div>
    )
}

export default Cars