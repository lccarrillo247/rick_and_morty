import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./action-types";
import axios from "axios";

// export function addFav (character) {
//     return {
//         type: ADD_FAV,
//         payload: character,
//     }
// };

// ACTION | addFav
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: 'ADD_FAV',
             payload: data,
          });
       });
    };
 };

// export function removeFav (id) {
//     return {
//         type: REMOVE_FAV,
//         payload: id,
//     }
// };

// ACTION | removeFav
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: 'REMOVE_FAV',
             payload: data,
       });
       });
    };
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