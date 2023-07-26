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

//     useEffect(()=> {
//       dispatch(getAllDogs());
     
// },[dispatch, currentPage])//Escucha los cambios en currentPage para obtener los perros actualizados cuando cambie la página

    // Obtengo los perros de la página actual.
    const currentDogs = dogs.slice(indexFirstDog, indexLastDog);
   
    const setPagination = (page) => {
      setCurrentPage(page)
     } // Actualiza la página actual al hacer clic en el paginado
  
    return (
        
             <div className={style.cardList}>
               <div className={style.order}>
              {
        currentDogs.map((dog, i) => (
        <Link className={style.link} to={`/home/${dog.id}`} key={i}  >
         <Card 
           image={dog.image} 
           name={dog.name} 
           weightMin={dog.weightMin} 
           weightMax={dog.weightMax} 
           temperament={dog.temperament} />
        </Link>    
        )
        )}
        </div>
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