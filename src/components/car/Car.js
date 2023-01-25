import {useEffect, useState} from "react";
import {carService} from "../../services";

const Car = ({car, setUpdateCar,setCars}) => {
    const [idCar,setCarId] = useState();

    const {id, brand, price, year} = car

    useEffect(() => {
        if (idCar) {
            async function del() {
                await carService.deleteById(idCar);
                const {data} = await carService.getAll();
                setCars(data);
            }

            del();
        }
    }, [idCar,setCars]);

    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={() => setUpdateCar(car)}>Update</button>
            <button onClick={()=>setCarId(id)}>Delete</button>
        </div>
    );
};

export {Car};