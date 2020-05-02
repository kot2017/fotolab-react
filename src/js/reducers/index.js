import {
    LOAD_PRODUCENT,
    SELECT_FILMOW_ID_PRODUCENT,
    SELECT_ID_PRODUCENT_CHEMII,
    LOAD_CHEMIA,
    LOAD_FILMY,
    SELECT_ID_CHEMIA,
    SELECT_ID_FILM,
    SELECT_DILUTION,
    SELECT_ASA,
    GET_RESULT
} from "../constants/action-types";


const initialState = {
    producenciFilmow: [],
    producenciChemii: [] ,
    selectedProducentFilmow: -1,
    selectedProducentChemii: -1,
    filmy: [],
    chemia: [],
    selectedFilmId: -1,
    selectedChemiaId: -1,
    selectedASA: 0,
    selectedDilution: 0,
    result: {},
    selimgFilm: -1,
    selimgChem: -1

}


function rootReducer(state = initialState, action) {

    switch (action.type) {

        case LOAD_PRODUCENT: {
            const prodFilm   = action.payload.slice(0);
            const progChem = action.payload.slice(0);
            return Object.assign({}, state,
                {
                    producenciFilmow: prodFilm,
                    producenciChemii: progChem
                });
        }


        case LOAD_FILMY: {
            return Object.assign({}, state, {
                filmy: action.payload
            })
        }

        case LOAD_CHEMIA: {
            return Object.assign({}, state, {
                chemia: action.payload
            })
        }



        case SELECT_ID_PRODUCENT_CHEMII: {
            return Object.assign({}, state, {
                selectedProducentChemii: action.payload
            })
        }


        case  SELECT_FILMOW_ID_PRODUCENT: {
            return Object.assign({}, state, {
                selectedProducentFilmow: action.payload
            });
        }



        case SELECT_ID_FILM: {

            return Object.assign({}, state, {
                selectedFilmId: action.payload,
                selimgFilm: action.payload
            })
        }

        case SELECT_ID_CHEMIA: {
            return Object.assign({}, state , {
                selectedChemiaId: action.payload
            })
        }

        case SELECT_ASA: {
            return Object.assign({}, state, {
                selectedASA: action.payload
            })
        }

        case SELECT_DILUTION: {
            return Object.assign({}, state, {
                selectedDilution: action.payload
            })
        }

        case GET_RESULT: {
            return Object.assign({}, state, {
                result: action.payload
            })
        }


        default: {
            return state;
        }


    }

}

export default rootReducer;
