import {
    LOAD_PRODUCENT,
    SELECT_PRODUCENT,
    SELECT_ID_PRODUCENT_FILMOW,
    SELECT_ID_PRODUCENT_CHEMII,
    LOAD_CHEMIA,
    LOAD_FILMY
} from "../constants/action-types";

import {URL_PRODUCENT, URL_FILMY, URL_CHEMIA } from "../constants/rest-url";

export function getDataProducenci() {
    return function (dispatch) {
        console.log(" wywolanie getDataProducenci");
        return fetch(URL_PRODUCENT)
            .then((response => response.json()))
            .then(json => {
                dispatch({type: LOAD_PRODUCENT, payload: json});
            });
    }
}

export function getDataFilmy(id) {
    return function (dispatch) {
        console.log(" wywolanie getDataFilmy");
        return fetch(URL_FILMY + id)
            .then((response => response.json()))
            .then(json => {
                dispatch({type: LOAD_FILMY, payload: json});
            });
    }
}


export function getDataChemia(id) {
    return function (dispatch) {
        console.log(" wywolanie getDataChemia");
        return fetch(URL_CHEMIA + id)
            .then((response => response.json()))
            .then(json => {
                dispatch({type: LOAD_CHEMIA , payload: json});
            });
    }
}


export function selectProducent(payload) {
    return {type: SELECT_PRODUCENT, payload}
}


export function selectProducentFilmowId(payload) {
    return {type: SELECT_ID_PRODUCENT_FILMOW, payload}
}

export function selectProducentChemiiId(payload){
    return { type: SELECT_ID_PRODUCENT_CHEMII, payload }
}



