import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";
import {batchLoadImages, uploadPhotos, logger} from "../middleware";



const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger, batchLoadImages, uploadPhotos )
);


export default store;
