import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, filterTemperaments, filterCreated } from "../../redux/Actions";


const Filter = ({setCurrentPage}) => {

    const dispatch = useDispatch();
    const temperaments = useSelector(state => state.temperamentsDogs);

    useEffect(() => {
        dispatch(getTemperaments());
    },[dispatch])

    const handleTemperaments = (event) => {
        const value = event.target.value;
        dispatch(filterTemperaments(value))    
       setCurrentPage(1);
    }

    const handleCreated = (event) => {
        const value = event.target.value;
        dispatch(filterCreated(value))
        setCurrentPage(1)

    }

    return(
        <div>
            <select onChange={handleCreated}>
                <option value='All'>Todos los perros</option>
                <option value='Api'>Perros descargados</option>
                <option value='Created'>Perros creados</option>
            </select>
            <select onChange={handleTemperaments}>
                <option value="All">Seleccionar todos los temperamentos</option>
                {temperaments && temperaments.map((temperament, index) => (
                  <option value={temperament} key={index}>{temperament}</option>
                ))}
            </select>
        </div>
    )
}

export default Filter;