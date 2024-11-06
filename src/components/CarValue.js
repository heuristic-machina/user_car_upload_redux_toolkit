import { useSelector } from "react-redux";

function CarValue() {
    const totalCost = useSelector(({ cars: {data, searchTerm }}) => 
        data.filter((car) => 
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .reduce((acc, car) => acc + car.cost, 0)
    );

    return (
    <div className="car-value">
        <h4 className='subtitle is-4'>Total Cost: ${totalCost}</h4>
    </div>
    )
}

export default CarValue;

// let cost = 0;
// for (let car of filteredCars) {
//     cost += car.cost;
// }
// return cost;