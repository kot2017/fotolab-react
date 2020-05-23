import React, {Component} from 'react';

import kot from "../../img/kot.jpg";
import {connect} from "react-redux";
import {URL_IMAGE} from "../constants/rest-url";
import {getDataSmallImage, getDataImage} from "../actions";
import ImageCard from "./ImageCard";

const dirname = process.env.PUBLIC_URL + '/asset/images/';


const mapStateToProps = state => {
    return {
        imageNames: state.result.images,
        katalog: state.result.katalog,
        smallImages: state.smallImages,
        image: state.imgFilm

    }
}


function matDispatchToState(dispatch) {
    return {
        getSmallImages: (katalog, imageName) => dispatch(getDataSmallImage(katalog, imageName)),
        getDataImage: (katalog, imageName) => dispatch(getDataImage(katalog, imageName))
    }
}

class ConnectedResultGallery extends Component {


    render() {

        const katalog = "FUJI_F400/100ASA/TetenalUltrafin/1do20/20min";
        const imageName = "N10142_Fuji400-100ASA_Tetenal-Ultrafin-1do20-20min_FOT12.jpg";
        const img = [];

        this.props.getDataImage(katalog, imageName);

        return (
            <div>
                <div id="back-2">
                    <p>div back-2&nbsp; &nbsp;Paragraph</p>
                    <div className={"container"} id="contener2">
                        <p>container2 Paragraph</p>
                        <div className={"row"} id="row1gora-1">
                            <div className={"col-auto"} id="col2picture-1">
                                <div id="col2picturediv-1">

                                    {/*{img.map(*/}
                                    {/*      el => <img key={el} src={el} alt=""/>*/}

                                    {/*)}*/}

                                    <img src={this.props.image} alt=""/>
                                    {/*<img src={imageURL} alt=""/>*/}

                                    {/*<img src={process.env.PUBLIC_URL + '/asset/images/FOT1.jpg'}/>*/}

                                </div>
                            </div>
                            <div className={"col-auto"} id="col2picture-2">
                                <div id="col2picturediv-2">
                                    {/*<img src={kot} alt="kot"/>*/}
                                    <ImageCard/>
                                </div>
                            </div>
                            <div className={"col-auto"} id="col2picture-3">
                                <div id="col2picturediv-3"><ImageCard/></div>
                            </div>
                            <div className={"col-auto"} id="col2picture-4">
                                <div id="col2picturediv-4"><ImageCard/></div>
                            </div>
                            <div className={"col-auto"} id="col2picture-5">
                                <div id="col2picturediv-5"><ImageCard/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


const ResultGalery = connect(mapStateToProps, matDispatchToState)(ConnectedResultGallery);
export default ResultGalery;
