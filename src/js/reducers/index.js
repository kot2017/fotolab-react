import {
    LOAD_PRODUCENT,
    SELECT_PRODUCENT,
    SELECT_ID_PRODUCENT_FILMOW,
    SELECT_ID_PRODUCENT_CHEMII,
    LOAD_CHEMIA,
    LOAD_FILMY
} from "../constants/action-types";


const initialState = {
    producenci: [{id: -1, nazwa: "", opis: "", link: ""}],
    selectedProducent: {
        id: -1,
        nazwa: "",
        opis: "",
        link: ""
    },
    selectedProducentFilmow: -1,
    selectedProducentChemii: -1,
    filmy: [],
    chemia: []

}


function rootReducer(state = initialState, action) {

    switch (action.type) {

        case LOAD_PRODUCENT: {
            return Object.assign({}, state,
                {
                    producenci: action.payload
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


        case SELECT_PRODUCENT: {
            return Object.assign({}, state, {
                    selectedProducent: action.payload
                }
            );
        }

        case  SELECT_ID_PRODUCENT_FILMOW: {
            return Object.assign({}, state, {
                selectedProducentFilmow: action.payload
            });
        }

        case SELECT_ID_PRODUCENT_CHEMII: {
            return Object.assign({}, state, {
                selectedProducentChemii: action.payload
            })
        }

        default: {
            return state;
        }


    }

}

export default rootReducer;
