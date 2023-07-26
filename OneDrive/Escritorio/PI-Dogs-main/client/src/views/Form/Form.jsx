import React, { useState, useEffect } from 'react';
import { postCreateDog, getTemperaments } from '../../redux/Actions';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Form/form.module.css'

const validation = (formData) => {

    let errors = {};
    
    if(!formData.name) {
        errors.name = "Debes ponerle un nombre al perro"
    }else if(!/[A-Z]+$/i.test(formData.name)){
        errors.name = "El nombre solo puede contener letras"
    }else if(parseInt(formData.name.length) > 20){
        errors.name = "El nombre debe contener menos de 20 caracteres"
    };

    if(!formData.heightMax) {
        errors.heightMax = "Necesitas especificar la altura maxima"
    }else if(parseInt(formData.heightMax) > 90) {
        errors.heightMax = "La altura debe ser menor a 90 cm"
    }else if(!/^[0-9]+$/.test(formData.heightMax)) {
        errors.heightMax = "Solo se aceptan números"
    };

    if(!formData.heightMin) {
        errors.heightMin = "Necesitas especificar la altura minima"
    }else if(parseInt(formData.heightMin) >= parseInt(formData.heightMax)) {
        errors.heightMin = "La altura minima debe ser menor a la altura maxima"
    }else if(!/^[0-9]+$/.test(formData.heightMin)) {
        errors.heightMin = "Solo se aceptan numeros"
    };

    if(!formData.weightMax) {
        errors.weightMax = "Necesitas especificar el peso maximo"
    }else if(parseInt(formData.weightMax) > 95) {
        errors.weightMax = "El peso debe ser menor a 95 kg"
    }else if(!/^[0-9]+$/.test(formData.weightMax)) {
        errors.weightMax = "Solo se aceptan numeros"
    };

    if(!formData.weightMin) {
        errors.weightMin = "Necesitas especificar el peso minimo"
    }else if(parseInt(formData.weightMin) >= parseInt(formData.weightMax)) {
        errors.weightMin = "El peso minimo debe ser menor al peso maximo"
    };

    if(!/^[0-9]+$/.test(formData.weightMax)) {
        errors.weightMax = "Solo se aceptan numeros"
    };

      return errors;
}

const Form = () => {
    const dispatch = useDispatch();
    const temperaments = useSelector(state => state.temperamentsDogs);
    const [errors, setErrors] = useState({});
    const createdDogs = useSelector(state => state.createdDogs) 
    const [formData, setFormData] = useState({
        name: '',
        heightMin: '',
        heightMax: '',
        weightMin: '',
        weightMax: '',
        lifeSpan: '',
        temperaments: [],
        created: true,
    });

    useEffect(() => {
        dispatch(getTemperaments());
    },[dispatch]);

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
        setErrors(validation({
            ...formData,
            [event.target.name]: event.target.value,
        }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postCreateDog(formData));
        console.log(formData)
        console.log(createdDogs)
        alert("El perro se creó exitosamente");
        setFormData({
            name: '',
            heightMin: '',
            heightMax: '',
            weightMin: '',
            weightMax: '',
            lifeSpan: '',
            temperaments: [],
            created: true,
        })
    };

    const handleTemperamentsChange = (event) => {
        setFormData({
            ...formData,
            temperaments: [...formData.temperaments, event.target.value]
        });

    }

    return (
    <div className={style.fondo}>
        <div className={style.container}>
             <form onSubmit={handleSubmit}>
           
                <label>Nombre: 
                    <input type="text" name='name' value={formData.name} onChange={handleInputChange}/>
                    {errors.name && <p>{errors.name}</p>}
                </label>
                <label>Altura minima: 
                    <input type="text" name='heightMin' value={formData.heightMin} onChange={handleInputChange} />
                    {errors.heightMin && <p>{errors.heightMin}</p>}
                </label>
                <label>Altura maxima: 
                    <input type="text" name='heightMax' value={formData.heightMax} onChange={handleInputChange} /> 
                    {errors.heightMax && <p>{errors.heightMax}</p>}
                </label>
                <label>Peso minimo: 
                    <input type="text"  name='weightMin' value={formData.weightMin} onChange={handleInputChange}/>
                    {errors.weightMin && <p>{errors.weightMin}</p>}
                </label>
                <label>Peso maximo: 
                    <input type="text" name='weightMax' value={formData.weightMax} onChange={handleInputChange}/>
                    {errors.weightMax && <p>{errors.weightMax}</p>}
                </label>
                <label>Años de vida: 
                    <input type="text" name='lifeSpan' value={formData.lifeSpan} onChange={handleInputChange}/>
                    {errors.lifeSpan && <p>{errors.lifeSpan}</p>}
                </label>
                <label>Temperamentos: 
                    <select name="temperaments"  value={formData.temperaments}  onChange={(e) => handleTemperamentsChange(e)}>
                        {
                            temperaments.map(temp => (
                                <option key={temp.name} value={temp.name}>{temp}</option>
                            ))
                        }
                    </select>
                    <ul>
                        <li>{formData.temperaments.map((temp) =>temp + ",")}</li>
                    </ul>
                </label>
                <button type='submit' >Crear perro</button>
               
            </form>

        </div>
    </div>
    )

}

export default Form;