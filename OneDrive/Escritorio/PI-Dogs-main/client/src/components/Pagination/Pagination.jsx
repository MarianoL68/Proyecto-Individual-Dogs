import style from './pagination.module.css';

const Pagination = ({currentPage,setCurrentPage, dogsPerPage, totalDogs, setPagination}) => {

    //Este array va a contener el número de paginas totales para visualizar.
    const pageNumber = [];

    //calcular el número total de páginas necesarias para mostrar todos los perros
    for(let i= 1; i <= Math.ceil(totalDogs / dogsPerPage ); i++) {
        pageNumber.push(i);
    }

    return(

        <div className={style.pagination}>
            <ul>
            {
               // Mapeo el array 'pageNumber' para generar los elementos <li> con los números de página disponibles
              pageNumber && pageNumber.map((page, i) => (
                <li key={i} onClick={()=>setPagination(page)}>
                    <span>{page}</span>
                    {/* Renderiza   el número de página */}
                </li>
              ))
            }
            </ul>
        </div>
    )
}

export default Pagination;