import React, {Component} from 'react';
import {connect} from "react-redux";
import {getDataProducenci, getDataResult, getDataImage, getDataSmallImage, loadDataImages } from "../actions";

//import f2 from "../../img/Ultrafin.jpg";
import kreska from "../../img/kreska.jpg"

import ResultTime from "./ResultTime";
import SelectPanelProducentFilmow from "./SelectPanelProducentFilmow";
import SelectPanelFilmy from "./SelectPanelFilmy";
import SelectPanelChemia from "./SelectPanelChemia";
import SelectPanelProducentChemii from "./SelectPanelProducentChemii";
import SelectPanelASA from "./SelectPanelASA";
import SelectPanelDilution from "./SelectPanelDilution";
//import ImageGallery from "./ImageGalery";
import ImageCard from "./ImageCard";


//var images = require.context('../../img', true);


const mapStateToProps = state => {
    return {
        producenciFilmow: state.producenciFilmow,
        producenciChemii: state.producenciChemii,
        film: state.selectedFilmId,
        chemia: state.selectedChemiaId,
        asa: state.selectedASA,
        roz: state.selectedDilution,
        imgFilm: state.selimgFilm,
        imgChem: state.selimgChem,
        image: state.image,
        smallImages: state.smallImages,
        imageNames: state.result.images,
        katalog: state.result.katalog,
        cards: state.cards,
        result: state.result


    };
}





class ConnectedResultInput extends Component{


    componentDidMount() {
        this.props.getDataProducenci();
    }

//asa=100&roz=20&film=4&chemia=1"
    handleClick(){
        const a = this.props.asa;
        const r = this.props.roz;
        const f = this.props.film;
        const c = this.props.chemia;

        const fi = this.props.imgFilm;

        console.log(" handleClick asa="+ a);
        console.log(" handleClick roz="+ r);
        console.log(" handleClick film="+ f);
        console.log(" handleClick chemia="+ c);

        console.log(" handleClick imgFilm="+ fi);
        this.props.getDataResult(a,r,f,c);

    }

    handleLoad(){
        console.log("  handleLoad  ");
        const images = this.props.imageNames;
        const katalog = this.props.katalog;
        const payload = {katalog: katalog, images: images};

        this.props.loadDataImages(payload);

    }


    handleNew(){
        console.log("  handleNew ");
        this.state.search = false;
    }


    render() {

        console.log("RENDER .. INPUT")
        const imgF = this.props.imgFilm;
        const imgC = this.props.imgChem;
        console.log("imgF="+ imgF);
        console.log("imgC="+ imgC);
        const search = this.state.search;
        let resultPanel ;


        return (
            <div className="container">
                <h1>ResultInput</h1>
                <h2>wprowadzanie nowego wywołania</h2>



            </div>
        );

    }



}


const ResultInput = connect(mapStateToProps, { getDataProducenci, getDataResult, getDataImage, getDataSmallImage , loadDataImages })(ConnectedResultInput);
export default ResultInput;
