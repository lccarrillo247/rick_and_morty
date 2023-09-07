import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./action-types";

export function addFav (character) {
    return {
        type: ADD_FAV,
        payload: character,
    }
};

export function removeFav (id) {
    return {
        type: REMOVE_FAV,
        payload: id,
    }
};

export function filterCards (gender) {
    return {
        type: FILTER,
        payload: gender,
    }
};

export function orderCards (orden) {
    return {
        type: ORDER,
        payload: orden,
    }
};

export function reset(){
    return {
        type: RESET,
    }
}