import style from './pagination.module.css';

const Pagination = ({currentPage,setCurrentPage, dogsPerPage, totalDogs, setPagination} ) => {

    const pageNumber = [];
    
    for(let i= 1; i <= Math.ceil(totalDogs / dogsPerPage ); i++) {
        pageNumber.push(i);
    }

    return(

        <div className={style.pagination}>
            <ul>
            <button>Prev</button>
            {
              pageNumber && pageNumber.map((page, i) => (
                <li key={i} onClick={()=>setPagination(page)}>
                    <span>{page}</span>
                </li>
              ))
            }
            <button>Next</button>
            </ul>
        </div>
    )
}

export default Pagination;