import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDogById } from "../../redux/Actions";
import React from "react";
import DogDetail from "../../components/DogDetail/DogDetail";


const  Detail = () => {

  const dispatch = useDispatch();
  const {id} = useParams();
  const dog = useSelector(state => state.dogsId);

  useEffect(() => {
    dispatch(getDogById(id));

  },[])

    

   return(
    <div>
    <h1>Este es el detail</h1>
    <DogDetail dog={dog[0]}/>
  </div>
 )
}

 export default Detail;