import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "../actions/action-types";

let initialState = {allCharacters: [], myFavorites: []};

function rootReducer (state = initialState, action) {

    let sorted;

    switch (action.type){
        case ADD_FAV:   
        return {
            ...state,
            myFavorites: [...state.myFavorites, action.payload],
            allCharacters: [...state.myFavorites, action.payload]
        };
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    character => character.id !== Number(action.payload)
                    ),
            }
            case FILTER:
                return {
                    ...state,
                    myFavorites: state.allCharacters.filter(
                        (character) => character.gender === action.payload
                    ),
                };
                case ORDER:
            
                if(action.payload === "A"){
                    sorted = state.myFavorites.sort((a,b) => (a.id > b.id ? 1 : -1))
                }

                if(action.payload === "D"){
                    sorted = state.myFavorites.sort((a,b) => (b.id > a.id ? 1 : -1))
                }

                return {
                    ...state,
                    myFavorites: [...sorted],
                }
                case RESET:
                    return {
                        ...state,
                        myFavorites: state.allCharacters,
                    }

        default:
            return state;
    }
};

export default rootReducer;