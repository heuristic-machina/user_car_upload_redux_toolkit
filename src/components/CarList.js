import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList() {

    const dispatch = useDispatch();

    const {cars, name} = useSelector(({form, cars: {data, searchTerm }}) => {
        const filteredCars = data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
        cars: filteredCars,
        name: form.name
    };
    });

    const handleCarDelete = ({id}) => {
        dispatch(removeCar(id));
    };

    
    // console.log(cars);

    const renderedCars = cars.map((car) => {

        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button className="button is-danger"
                    onClick={() => handleCarDelete(car)
                    }
                >
                Delete
                </button>
            </div>
        )
    })
    
    return (
        <div>
            <h4 className='car-list subtitle is-4'>Car List
            </h4>
            {renderedCars}
            <hr />
        </div>

    )
}

export default CarList;