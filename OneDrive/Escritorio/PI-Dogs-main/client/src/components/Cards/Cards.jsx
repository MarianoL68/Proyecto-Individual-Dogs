import style from './cards.module.css'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllDogs } from "../../redux/Actions";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Pagination from '../Pagination/Pagination';



const CardsContainer = ({currentPage, setCurrentPage, indexLastDog, indexFirstDog, dogsPerPage}) => {

    const dispatch = useDispatch();
    const dogs = useSelector(state => state.allDogs);

    useEffect(()=> {
      dispatch(getAllDogs());
     
},[dispatch])

    const currentDogs = dogs.slice(indexFirstDog, indexLastDog);
   
    const setPagination = (page) => {
      setCurrentPage(page)
     }
  
    return (
        
             <div className={style.cardList}>{
        currentDogs.map((dog, i) => (
        <Link className={style.CardsContainer} to={`/home/${dog.id}`} key={i}  >
         <Card 
           image={dog.image} 
           name={dog.name} 
           weightMin={dog.weightMin} 
           weightMax={dog.weightMax} 
           temperaments={dog.temperaments} />
        </Link>    
        )
        )}
        <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        dogsPerPage={dogsPerPage}
        totalDogs={dogs.length}
        setPagination={setPagination}
        />
        </div>
    )
}

export default CardsContainer;