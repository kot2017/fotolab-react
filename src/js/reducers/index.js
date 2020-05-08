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
    GET_RESULT,
    GET_SMALL_IMAGE,
    GET_IMAGE,
    LOAD_IMAGES
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
    selimgFilm: "1.jpg",
    selimgChem: "1.jpg",
    smallImages: [],
    image: {},
    cards: [],
    card: {},


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
        //    var imgName = `${action.img}.jpg`
            console.log("film= "+ action.id + "  img= "+ action.img)
            return Object.assign({}, state, {
                selectedFilmId: action.id,
                selimgFilm: action.img
            })
        }

        case SELECT_ID_CHEMIA: {
            return Object.assign({}, state , {
                selectedChemiaId: action.id,
                selimgChem: action.img
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

        case GET_SMALL_IMAGE: {
            return Object.assign({}, state ,{
                // smallImages: action.payload,
                card:
            {
                imagFile:  action.imgFile,
                url: action.imgUrl,
                katalog: action.katalog,
                imageName: action.image

            }

            })
        }

        case GET_IMAGE: {
            return Object.assign({}, state ,{
                image:  action.payload
            })
        }

        case LOAD_IMAGES: {
            return Object.assign({}, state, {

                cards: Array.prototype.concat( action.payload)
            })
        }


        default: {
            return state;
        }


    }

}

export default rootReducer;
