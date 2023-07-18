import { useState } from 'react';
import CardsContainer from '../../components/Cards/Cards';
import Filter from '../../components/Filters/Filters';
import InOrder from '../../components/Order/Order';


const Home = () => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage] = useState(8);
    
    const indexLastDog = currentPage * dogsPerPage;
    const indexFirstDog = indexLastDog - dogsPerPage;

    return (
        <div>
           
            <h1>Este el Home</h1>
            <InOrder/>
            <Filter/> 
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