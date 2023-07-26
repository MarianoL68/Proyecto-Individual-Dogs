import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDogById } from "../../redux/Actions";
import React from "react";
import DogDetail from "../../components/DogDetail/DogDetail";
import style from './detail.module.css'


const  Detail = () => {

  const dispatch = useDispatch();
  const {id} = useParams();
  const dog = useSelector(state => state.dogsId);


  useEffect(() => {
    dispatch(getDogById(id));// Se envía una acción para obtener los detalles del perro con el ID actual
    return () => { //se ejecuta cuando el componente se desmonta 
      dispatch(getDogById(null))// Se envía una acción para limpiar el estado de los detalles del perro
    }
  },[dispatch, id])  


   return(
    <div className={style.fondo}>
    <DogDetail dog={dog[0]}/>
  </div>
 )
}

 export default Detail;