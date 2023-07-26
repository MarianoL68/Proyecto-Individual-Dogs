import SearchBar from './SearchBar';
import style from './navbar.module.css'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllDogs } from '../../redux/Actions';


const NavBar = () => {

    const dispatch = useDispatch();

    const handleHome = () => {
        dispatch(getAllDogs())
    } 
    return(
        <div className={style.navbar}>
            <NavLink to= {'/home'}>
                <span onClick={handleHome} className={style.title}>Perripedia</span>
            </NavLink>
            <SearchBar/>
            <NavLink to={'/form'}>
                <button className={style.button}>Crear perro</button>
            </NavLink>
        </div>
    );
}

export default NavBar;