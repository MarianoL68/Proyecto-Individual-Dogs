import SearchBar from './SearchBar';
import style from './navbar.module.css'
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return(
        <div className={style.navbar}>
            <NavLink to= {'/home'}>
                <span className={style.title}>Perripedia</span>
            </NavLink>
            <SearchBar/>
            <NavLink to={'/form'}>
                <button className={style.button}>Crear perro</button>
            </NavLink>
        </div>
    );
}

export default NavBar;