import React from "react";
import { useState} from "react";
import { useDispatch } from "react-redux"
import { getDogByName } from "../../redux/Actions";

const SearchBar = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('')
    
     const handleChange = (event) =>{
        event.preventDefault();
        setName(event.target.value);
     }

     const handleSearch = (event) => {
        event.preventDefault();
        dispatch(getDogByName(name));
     }

    return (
        <div>
            <input type="text"
                   value={name}
                   onChange = {(e) => handleChange(e)}
                   placeholder="Raza del Perro"/>
            <button type="submit" onClick={handleSearch}>Buscar</button>
        </div> 
    )
}

export default SearchBar;