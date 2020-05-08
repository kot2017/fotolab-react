import {LOAD_IMAGES} from "../constants/action-types";
import {URL_IMAGE} from "../constants/rest-url";

export function logger({getState}) {
    return next => action => {
        console.log("action", action);
        const returnVal = next(action);
        console.log('LOGGER : state when action is dispatched', getState());
        return returnVal;
    }
}

export function batchLoadImages({state}) {
    return next => action => {
        console.log(" batchLoadImages  action", action);

        if (action.type = LOAD_IMAGES) {
            const images = action.payload.images;
            const katalog = action.payload.katalog;
            const cards = [];
            //=======
            if (images != null && !images.undefined && katalog != null && !katalog.undefined) {
                for (var i = 0; i < images.size; i++) {
                    console.log(" wywolanie loadDataImages dla " + images[i]);
                    return function (dispatch) {
                        const img = URL_IMAGE + katalog + "/male/&f=" + images[i];
                        return fetch(img)
                            .then(response => response.blob())
                            .then(blob => {
                                let fileUrl = (window.URL || window.webkitURL).createObjectURL(blob);
                                let card = {imgFile: fileUrl, imgUrl: img, katalog: katalog, image: images[i]};
                                cards.push(card);
                                dispatch({type: LOAD_IMAGES, cards})
                            })
                    }
                }
            }
            //=======
        }
        const returnVal = next(action);
        return returnVal;
    }
}
