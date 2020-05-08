import React, {Component} from 'react';
import {getDataImage, getDataSmallImage} from "../actions";
import {connect} from "react-redux";


const mapStateToProps = state => {
    return {
        imageNames: state.result.images,
        katalog: state.result.katalog,
        smallImages: state.smallImages,
        image: state.imgFilm

    }
}


function matDispatchToState(dispatch){
    return {
        getSmallImages: (katalog, imageName) => dispatch(getDataSmallImage(katalog, imageName)),
        getDataImage: (katalog, imageName) => dispatch(getDataImage(katalog, imageName))
    }
}


class ConnectedImageGallery extends Component {


    changeClik(){
        const katalog =  "FUJI_F400/100ASA/TetenalUltrafin/1do20/20min";
        const imageName = "N10142_Fuji400-100ASA_Tetenal-Ultrafin-1do20-20min_FOT15.jpg";
        // const img = [];

        this.props.getDataImage(katalog, imageName);
    }


    render() {

        const image = this.props.image;

        return(
            <div>
                <h1>IMAGE GALLERY</h1>
                <div>
                    <button onClick={this.changeClik} >wybierz</button>
                </div>

                <img src={image}  alt ="img do zaladowania"/>

            </div>

        );
    }


}


const ImageGallery = connect(mapStateToProps, matDispatchToState)(ConnectedImageGallery);
export default ImageGallery;

