import {
    GET_ALL_DOGS,
    GET_DOG_BY_ID,
    GET_DOG_BY_NAME,
    CREATE_DOG,
    GET_TEMPERAMENTS,
    FILTER_BY_TEMPERAMENTS,
    FILTER_CREATED_DOGS,
    ORDER_BY_NAME,
    ORDER_BY_WEIGHT
} from './Actions-Types';
import axios from 'axios';
const apiKey = process.env.API_KEY;

const endpoint = 'http://localhost:3001'

export const getAllDogs = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${endpoint}/dogs`);
        return dispatch({
            type: GET_ALL_DOGS,
            payload: response.data
        });
            
        } catch (error) {
           console.log(error.message) 
        }
    }
}

export const getDogById = (id) => {
    return async(dispatch) => {
        try {
            const response = await axios.get(`${endpoint}/dogs/${id}`);
        return dispatch({
            type: GET_DOG_BY_ID,
            payload: response.data
        });
            
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const getDogByName = (name) => {
    return async(dispatch) => {
        try {
            const response = await axios.get(`${endpoint}/dogs/?name=${name}`);
        return dispatch ({
            type: GET_DOG_BY_NAME,
            payload: response.data

        });
            
        } catch (error) {
            console.log(error);
        }
    }
}

export const postCreateDog = (payload) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${endpoint}/dogs`, payload);
            console.log(payload) 
            console.log(response.data)
        dispatch({
            Type: CREATE_DOG,
            payload: response.data
        });
            
        } catch (error) {
            console.log(error);
        }
    
    }
}

export const getTemperaments = () => {
    return async(dispatch) => {
        try {
            const response = await axios.get(`${endpoint}/temperaments`);
            return dispatch({
                type: GET_TEMPERAMENTS,
                payload: response.data
            })
            
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const filterTemperaments = (payload) => {
    return {
        type: FILTER_BY_TEMPERAMENTS,
        payload: payload
    }
 }

 export const filterCreated = (payload) => {
    return {
        type: FILTER_CREATED_DOGS,
        payload: payload
    }
 }

 export const orderByName = (payload) => {
    return {
        type: ORDER_BY_NAME,
        payload: payload
    }
 }

 export const orderByWeight = (payload) => {
    return {
        type: ORDER_BY_WEIGHT,
        payload: payload
    }
 }

 
 


