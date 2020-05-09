import React, {Component} from 'react';
import {getDataImage, getDataSmallImage, loadDataImages} from "../actions";
import {connect} from "react-redux";


const mapStateToProps = state => {
    return {
        imageNames: state.result.images,
        katalog: state.result.katalog,
        // smallImages: state.smallImages,
        image: state.result.selimgFilm,
        cards: state.cards

    }
}


function matDispatchToState(dispatch) {
    return {
        getSmallImages: (katalog, imageName) => dispatch(getDataSmallImage(katalog, imageName)),
        getDataImage: (katalog, imageName) => dispatch(getDataImage(katalog, imageName)),
        loadDataImages: (payload) => dispatch(loadDataImages(payload))

    }
}


class ConnectedImageGallery extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            img: props.image
        }
    }

    loadImages() {

                // const kat = this.props.katalog;
                // const img = this.props.imageNames;
                // const payload = {katalog: kat, images: img};
                //
                // this.props.loadDataImages(payload);
        console.log(" loadImage: katalog=" );
    }


    render() {


        const image = this.props.image;

        return (
            <div>
                <div>
                    <button onClick={this.loadImages}>load images</button>
                </div>
                <h1>IMAGE GALLERY</h1>



                <img src={image} alt="img do zaladowania"/>

            </div>

        );
    }


}


const ImageGallery = connect(mapStateToProps, matDispatchToState)(ConnectedImageGallery);
export default ImageGallery;

