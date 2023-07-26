import style from './dogDetail.module.css';

const DogDetail = ({dog}) => {
    return (
        <div className ={style.container}>
        <div className={style.dogDetail}>
            <img src={dog?.image} alt="dog" />
            <h2>{dog?.name}</h2>
            <span>Altura: {dog?.heightMin} - {dog?.heightMax}</span>
            <span>Peso: {dog?.weightMin} - {dog?.weightMax} </span>
            <span>Temperamentos: {dog?.temperament} </span>
            <span>Años de vida: {dog?.lifeSpan} </span>
        </div>
        </div>
    )
}

export default DogDetail;