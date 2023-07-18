import {Link} from 'react-router-dom';
import style from './card.module.css';

const Card = ({image,name,weightMin,weightMax,temperaments}) => {

    return(
        <div className={style.containerPrincipal}>
            <img src={image} alt={name} />
            <span>{name} </span>
            <span>{weightMin} - {weightMax}</span>
            <p>{temperaments}</p>
        </div>
    )
}  

export default Card;