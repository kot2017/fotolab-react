import {
    LOAD_PRODUCENT,
    SELECT_FILMOW_ID_PRODUCENT,
    SELECT_ID_PRODUCENT_CHEMII,
    LOAD_CHEMIA,
    LOAD_FILMY,
    SELECT_ID_CHEMIA,
    SELECT_ID_FILM,
    SELECT_ASA,
    SELECT_DILUTION,
    GET_RESULT
} from "../constants/action-types";

import {URL_PRODUCENT, URL_FILMY, URL_CHEMIA, URL_RESULT } from "../constants/rest-url";

export function getDataProducenci() {
    return function (dispatch) {
        console.log(" wywolanie getDataProducenciFilmy");
        return fetch(URL_PRODUCENT)
            .then((response => response.json()))
            .then(json => {
                dispatch({type: LOAD_PRODUCENT, payload: json});
              //  dispatch({type: LOAD_PRODUCENT_CHEMIA, payload: json});
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
                dispatch({type: LOAD_CHEMIA, payload: json});
            });
    }
}

//asa=100&roz=20&film=4&chemia=1"
export function getDataResult(asa,roz, film, chemia) {


    return function (dispatch) {
        console.log(" wywolanie  getDataResult");
        const url = URL_RESULT+ "asa="+asa+ "&roz="+roz+"&film="+film+"&chemia="+chemia;
        return fetch(url)
            .then((response => response.json()))
            .then(json => {
                dispatch({type: GET_RESULT, payload: json});
            })
    }
}



export function selectProducentFilmowId(payload) {
    return {type: SELECT_FILMOW_ID_PRODUCENT, payload}
}

export function selectProducentChemiiId(payload) {
    return {type: SELECT_ID_PRODUCENT_CHEMII, payload}
}


export function selectFilmId(id, img) {
    return {type: SELECT_ID_FILM, id: id, img:img}
}

export function selectChemiaId(payload) {
    return {type: SELECT_ID_CHEMIA, payload}
}

export function selectASA(payload) {
    return {type: SELECT_ASA, payload}
}

export function selectDilution(payload) {
return {type:SELECT_DILUTION, payload}
}
