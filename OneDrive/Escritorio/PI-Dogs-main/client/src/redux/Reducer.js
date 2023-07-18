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
} from './Actions-Types'

const initalState = {
    allDogs: [],
    dogsCopy: [],
    dogsId: {},
    dogsName: [],
    temperamentsDogs: [],
    createdDogs: [],
}

const reducer = (state = initalState, {type, payload}) => {
    switch(type){
        case GET_ALL_DOGS:
            return{
                ...state,
                allDogs: payload,
                dogsCopy: payload
            }
        case GET_DOG_BY_ID:
            return{
                ...state,
                dogsId: [...payload]
            }
        case GET_DOG_BY_NAME:
            return{
                ...state,
                allDogs: payload
            }
        case CREATE_DOG:
            return{
                ...state,
                createdDogs: state.createdDogs.unshift(payload),
               allDogs: [payload, ...state.allDogs]
            }
        case GET_TEMPERAMENTS:
            return{
                ...state,
                temperamentsDogs: payload
            }
        case FILTER_BY_TEMPERAMENTS:
            const filterDogs = state.dogsCopy;
            const filter = payload === 'All'? filterDogs : filterDogs.filter(dogs => dogs.temperament && dogs.temperament.includes(payload))
            return{
                ...state,
                allDogs: filter
            }
            case FILTER_CREATED_DOGS:
                const filterAllDogs = state.dogsCopy;
                const filterCreated = payload === 'Creados' ? filterAllDogs.filter(dog => dog.created) : filterAllDogs.filter(dog => !dog.created);
                return{
                    ...state,
                    allDogs: payload === 'All' ? filterAllDogs : filterCreated
                }
            case ORDER_BY_NAME:
                let orderByName;
                if (payload === "name-Asc"){
                    orderByName = state.allDogs.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
                }else{
                    orderByName = state.allDogs.sort((a,b) => (b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1))
                };
                return {
                    ...state,
                    allDogs: [...orderByName]
                }
            case ORDER_BY_WEIGHT:
                let orderByWeight;
                if(payload === "weight-Asc"){
                    orderByWeight = state.allDogs.sort((a,b) => (a.weightMin > b.weightMin ? 1 : -1))
                }else{
                    orderByWeight = state.allDogs.sort((a,b) => (b.weightMin > a.weightMin ? 1 : -1))
                }
                return{
                    ...state,
                    allDogs: [...orderByWeight]
                }

        default:
            return{...state}
    }

}

export default reducer;