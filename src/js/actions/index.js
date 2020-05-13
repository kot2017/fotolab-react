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
    GET_RESULT,
    GET_IMAGE,
    GET_SMALL_IMAGE,
    GET_FULL_IMAGE, LOAD_IMAGES, LOAD_CARDS
} from "../constants/action-types";


import {URL_PRODUCENT, URL_FILMY, URL_CHEMIA, URL_RESULT, URL_IMAGE} from "../constants/rest-url";

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
export function getDataResult(asa, roz, film, chemia) {
    return function (dispatch) {
        console.log(" wywolanie  getDataResult");
        const url = URL_RESULT + "asa=" + asa + "&roz=" + roz + "&film=" + film + "&chemia=" + chemia;
        return fetch(url)
            .then((response => response.json()))
            .then(json => {
                dispatch({type: GET_RESULT, payload: json});
            })
    }
}


export function getDataSmallImage(katalog, image) {
    return function (dispatch) {
        console.log(" wywolanie getDataSmallImages");
        const img = URL_IMAGE + katalog + "/male/&f=" + image;
        return fetch(img)
            .then(response => response.blob())
            .then(blob => {
                let fileUrl = (window.URL || window.webkitURL).createObjectURL(blob);
                dispatch({type: GET_SMALL_IMAGE, imgFile: fileUrl, imgUrl: img, katalog: katalog, image: image})
            })
    }
}

/*
fetch(
  'https://images.unsplash.com/35/SRkdurVYQFSFkMyHVwSu_spinnenweb-9536.jpg?dpr=2&auto=compress,format&fit=crop&w=376&h=251&q=80&cs=tinysrgb&crop='
)
  .then(res => res.blob())
  .then(blob => {
    let fileUrl = (window.URL || window.webkitURL).createObjectURL(blob);

    const img = document.createElement('img');
    img.src = fileUrl;
    document.querySelector('body').appendChild(img);
  });
 */


export function getDataImage(katalog, image) {
    return function (dispatch) {
        console.log(" wywolanie getDataImage");
       // const img = URL_IMAGE + katalog + "&f=" + image;

        var url = new URL(URL_IMAGE),
            params = {k: katalog  , f: image}
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))


        return fetch(url)
            .then(response => response.blob())
            .then(blob => {
                let fileUrl = (window.URL || window.webkitURL).createObjectURL(blob);
                dispatch({type: GET_IMAGE, payload: fileUrl})
            })
    }
}


export function loadDataImages(payload) {
    console.log("loadDataImages  payload:" + payload);
    return {type: LOAD_IMAGES, payload: payload}
}

export function loadCards(payload) {
    console.log("loadCards  cards:" + payload);
    return {type: LOAD_CARDS, cards: payload}
}

//
// export function getDataFullImage(){
//     return function (dispatch){
//         console.log(" wywolanie getDataImage");
//         const   img  = URL_IMAGE+   this.katalog + "&f=" + this.image ;
//         return fetch(img)
//             .then(response => response.blob())
//             .then(blob => {
//                 let fileUrl =  (window.URL || window.webkitURL).createObjectURL(blob);
//                 dispatch({type: GET_FULL_IMAGE, payload: fileUrl })
//             })
//     }
// }

export function selectProducentFilmowId(payload) {
    return {type: SELECT_FILMOW_ID_PRODUCENT, payload}
}

export function selectProducentChemiiId(payload) {
    return {type: SELECT_ID_PRODUCENT_CHEMII, payload}
}


export function selectFilmId(id, img, name) {
    return {type: SELECT_ID_FILM, id: id, img: img, name: name}
}

export function selectChemiaId(id, img, name) {
    return {type: SELECT_ID_CHEMIA, id, img, name}
}

export function selectASA(payload) {
    return {type: SELECT_ASA, payload}
}

export function selectDilution(payload) {
    return {type: SELECT_DILUTION, payload}
}


/*
    private Date data;
    private Integer asa;
    private String rozcienczenie;
    private String czasWolania;
    private String uwagi;
    private String katalog;
    private String rezultat;
    private String numerNegatywu;
    private Integer filmId;
    private Integer chemikaliaId;
    private String filmName;
    private String chemiaName;

    private List<String> images;
 */

export function sendWywolanie(payload) {
    return function (dispatch) {
     //   var data = new FormData();
      //  data.append("json", JSON.stringify(payload));

        console.log("sendWywolanie - data = " + JSON.stringify(payload));

        fetch(URL_RESULT,
            {
                method: "POST",
               // mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'},
                body: JSON.stringify(payload),
            } )
            .then(function (res) {
                return res.statusText
            })
            .then(function (data) {
                if(data === "OK"){
                    alert("zapisano, OK");
                }else{
                    alert( data)
                }

            })
    }
}
