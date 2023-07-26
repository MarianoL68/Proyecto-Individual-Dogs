import { useEffect, useState } from 'react';
import CardsContainer from '../../components/Cards/Cards';
import Filter from '../../components/Filters/Filters';
import InOrder from '../../components/Order/Order';
import { useDispatch } from 'react-redux';
import { getDogById, getAllDogs } from '../../redux/Actions';
import style from './home.module.css';


const Home = () => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const dogsPerPage = 8
    const dispatch = useDispatch();
    
    const indexLastDog = currentPage * dogsPerPage;
    const indexFirstDog = indexLastDog - dogsPerPage;

    useEffect(() => {
        dispatch(getAllDogs());
      }, [dispatch, currentPage]);
   

    return (
        <div className={style.general}>
           <div>
            <InOrder/>
            <Filter setCurrentPage={setCurrentPage}/> 
            </div>
            <CardsContainer
              currentPage = {currentPage}
              setCurrentPage = {setCurrentPage}
              indexFirstDog = {indexFirstDog}
              indexLastDog = {indexLastDog}
              dogsPerPage = {dogsPerPage}

             />
        </div>

    )
}

export default Home;