import React, {Component} from 'react';
import {connect} from "react-redux";
import {getDataProducenci, getDataResult, getDataImage, getDataSmallImage, loadDataImages } from "../actions";

//import f2 from "../../img/Ultrafin.jpg";

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
        cards: state.cards


    };
}






class ConnectedInputPanel extends Component {


    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
        selIm:""
        }
    }




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
      this.loadComponent();
    }


    loadComponent(){

        const katalog =  "FUJI_F400/100ASA/TetenalUltrafin/1do20/20min";
       const imageName = "N10142_Fuji400-100ASA_Tetenal-Ultrafin-1do20-20min_FOT15.jpg";
        this.props.getDataSmallImage(katalog, imageName);

      const kat = this.props.katalog;
      const im = this.props.imageNames;
        this.props.loadDataImages(katalog,im);

    }

    clikImage(){
        console.log(" kliknalem "  );
      //  this.props.getDataImage(this.props.katalog, imageName);
    }


    render() {

        console.log("RENDER .. INPUT")

        const imgF = this.props.imgFilm;
        const imgC = this.props.imgChem;

        console.log("imgF="+ imgF);
        console.log("imgC="+ imgC);

        return (
            <div className={"container"} id="cont1">
                <div className={"row"} id="row1">
                    <div className={"col-sm-12 col-md-6"} id="col1filmy">
                        <h2>filmy</h2>
                        <SelectPanelProducentFilmow />
                        <SelectPanelFilmy />
                        <SelectPanelASA/>
                    </div>
                    <div className={"col-sm-12 col-md-6"} id="col2wyw">
                        <h2>wywolywacze</h2>
                        <SelectPanelProducentChemii />
                        <SelectPanelChemia />
                        <SelectPanelDilution/>
                    </div>
                </div>

                <div className={"row"} id="rowbutton">
                    <div className={"col-12 d-flex justify-content-center"} id="row2col2button-1">
                        <button className={"btn btn-primary"} type="button" onClick={this.handleClick}>Szukaj</button>
                    </div>
                </div>

                <div className={"row"} id="row2">
                    <div className={"col-md-6 col-sm-12"} id="row2col1fotfilm" >


                        <img src={require(`../../img/filmy/${imgF}` )} alt="product" width={200} height={200} />

                    </div>

                    <div className={"col-md-6 col-sm-12"} id="row2col3fotwyw">

                        <img src={require(`../../img/chemia/${imgC}` )} alt="productC" width={200} height={200} />


                    </div>
                </div>
                <div className={"row"} id="row3">
                    <div className={"col"} id="timeresult">

                        <ResultTime/>
                    </div>

                    {/*<p>{this.props.image.size}IMAGE from this.props.image {this.props.image.type}</p>*/}

                    {/*    <div><img key="123" src={this.props.image}  alt={"aa"} onClick={this.clikImage}  />   </div>*/}


                </div>

                <ImageCard/>
            </div>
        )
    }

}


const InputPanel = connect(mapStateToProps, { getDataProducenci, getDataResult, getDataImage, getDataSmallImage , loadDataImages })(ConnectedInputPanel);

export default InputPanel;
