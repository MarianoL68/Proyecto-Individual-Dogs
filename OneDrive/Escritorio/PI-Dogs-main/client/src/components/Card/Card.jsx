import style from './card.module.css';

const Card = ({image,name,weightMin,weightMax,temperament}) => {

    return(
        <div className={style.containerPrincipal}>
           <div className={style.containerImg}> <img className={style.img} src={image} alt={name} /> </div>
            <h1>{name}</h1>
            <span>{weightMin} - {weightMax}</span>
            <span>{temperament}</span>
        </div>
    )
}  

export default Card;