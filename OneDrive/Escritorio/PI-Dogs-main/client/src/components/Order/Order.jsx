import { useDispatch} from "react-redux";
import { orderByName, orderByWeight } from "../../redux/Actions";
import style from '../Order/order.css'

const InOrder = () => {

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const value = event.target.value;
        if(value === "name-Asc" || value === "name-Desc"){
            dispatch(orderByName(value));
        } 
        if (value === "weight-Asc" || value === "weight-Desc"){
            dispatch(orderByWeight(value));
        }
    }

    return (
        <div className={style.container}>
            <span>Ordenar por: </span>
            <select onChange={handleChange}>
                <option value="name-Asc">Nombre (Asc)</option>
                <option value="name-Desc">Nombre (Desc)</option>
                <option value="weight-Asc">Peso (Asc)</option>
                <option value="weight-Desc">Peso (Desc)</option>
            </select>

        </div>
    )
}

export default InOrder;