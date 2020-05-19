import {LOAD_IMAGES, LOAD_CARDS, SEND_WYW, UPLOAD_PHOTO} from "../constants/action-types";
import {URL_IMAGE} from "../constants/rest-url";
import {forEach} from "react-bootstrap/cjs/ElementChildren";

export function logger({getState}) {
    return next => action => {
        console.log("action", action);
        const returnVal = next(action);
        console.log('LOGGER : state when action is dispatched', getState());
        return returnVal;
    }
}

export function batchLoadImages({state}) {
    console.log("||||||||| batchLoadImages ");
    return next => {
        return action => {
            console.log("||||||| batchLoadImages  action", action);
            //const returnVal = next(action);
            if (action.type === LOAD_IMAGES) {
                console.log("|||| batchLoadImages LOAD_IMAGES ||||");

                //   if (action.payload != null && !action.payload.undefined && action.payload.images != null && action.payload.katalog != null) {
                console.log("|||| batchLoadImages LOAD_IMAGES |||| ========  |||||");
                const images = action.payload.images;
                const katalog = action.payload.katalog;
                const cards = [];

                console.log("|||| action.payload.images: " + action.payload.images);
                console.log("|||| action.payload.katalog: " + action.payload.katalog);

                const imagesjpg = []


                if (images != null && !images.undefined && katalog != null && !katalog.undefined) {

                    //wybierz tylko images jpg
                    images.map(el => {
                        if (el.endsWith(".jpg")) {
                            imagesjpg.push(el);
                        }
                    })

                    //


                    var fileName = [];

                    var urls = [];

                    for (var j = 0; j < imagesjpg.length; j++) {
                        var url = new URL(URL_IMAGE),
                            params = {k: katalog + '/male/', f: imagesjpg[j]}
                        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
                        urls[j] = url;
                        console.log(" ====>>>>" + j + "  url = " + url);
                    }

                    /*
                                    imagesjpg.map(el => {
                                        var url = new URL(URL_IMAGE),
                                            params = {k: katalog + '/male/', f: imagesjpg[j]}
                                        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
                                        return url

                                    }
                                    )
                    */


                    //---------------------------------
                    const fotoUrls = () => {
                        console.log("fotoUrl  START");
                        const promises = urls.map(item => {
                            console.log("item = " + item)
                            return fetch(item)
                                .then(response => {
                                    return response.blob()
                                });
                        });
                        Promise.all(promises).then(results => {
                            var fileUrl = [];
                            const fotos = results.map(result => {
                                console.log("result.size" + result.size)
                                var fileImage = (window.URL || window.webkitURL).createObjectURL(result);
                                fileUrl.push(fileImage)
                            });

                            console.log("fileUrl.length = " + fileUrl.length)

                            for (var j = 0; j < fileUrl.length; j++) {
                                cards[j] = {
                                    imgFile: fileUrl[j], // (window.URL || window.webkitURL).createObjectURL(blob),
                                    //   imgUrl: url,
                                    katalog: katalog,
                                    image: imagesjpg[j]
                                }

                            }

                            const returnValue2 = next({type: LOAD_CARDS, cards});
                            return returnValue2;

                        })
                    }
                    //-----------------------------------


                    if (imagesjpg != null && imagesjpg.length > 0) {
                        fotoUrls();
                    }
                }

            } else {
                const returnVal = next(action);
                return returnVal;
            }

        };
    }
}


export function uploadPhotos({getState}) {
    console.log("|+++++++++++++++| uploadPhotos ");
    return next => {
        return action => {
            console.log("|++++++| uploadPhotos action", action);
            //const returnVal = next(action);
            if (action.type === UPLOAD_PHOTO) {
                console.log("  action UPLOAD_PHOTO  " )

                const photos = getState().uploadPhotos
                const katalog = getState().katalog


                console.log("|||| photos: " + photos.length);
                console.log("|||| katalog: " +  katalog);

                 function send ( ) {
                     console.log("|||| send() ");
                    const formData = new FormData();

                     const foty = getState().uploadPhotos;
                     for(let i=0; i<foty.length; i++){
                         formData.append('files', foty[i]);
                     }
                    formData.append("katalog", katalog);
                    fetch('http://localhost:8082/foto/multi-upload', {
                        method: 'post',
                        body: formData
                    }).then(res => {
                        if (res.ok) {
                            console.log(res.data);
                          //  alert("File uploaded successfully.")
                        }
                    });
                }

                if(photos != null && !photos.undefined && photos.length>0 && katalog!=null && !katalog.undefined){
                    console.log("|||| będę wywołał " );
                    send();
                }


            }
            const returnVal = next(action);
            return returnVal;
        }
    }
}
