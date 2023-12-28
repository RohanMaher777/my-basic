import Car from "./Car"
const cars = [ 
   {
    name : "Audi",
    price : 50000
   },
   {
    name : "Hyundai",
    price : 70000
   },
   {
    name : "Harle-devidtion",
    price : 10000
   },
   {
    name : "BMW",
    price : 90000
   }
   
]

function Cars(){
    
    return(
        <div>
            <ul>
                {cars.map(Cardetails => {
                    return <Car carName = {Cardetails.name} price = {Cardetails.price}/>
                })}
            </ul>
        </div>
        
        
    )
}

export default Cars