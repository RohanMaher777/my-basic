import { useState } from "react"
import Car from "./Car"


function Cars(){
    const [cars, setCars ]= useState([ 
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
     )
     
    
    return(
        <div>
            <ul>
                {cars.map(Cardetails => {
                    return <Car 
                    carName = {Cardetails.name} 
                    price = {Cardetails.price}
                    onClickDelete = {() =>{
                        console.log(`Car ${Cardetails.name} should be deleted`)
                        setCars(cars => {
                            const updatedCars = cars.filter(c => {
                                return c.name !== Cardetails.name
                            })
                            return updatedCars
                        })
                    }}
                    />

                })}
            </ul>
        </div>
        
        
    )
}

export default Cars