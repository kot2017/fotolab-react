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






class ConnectedInputPanel extends Component {


    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
        this.handleNew = this.handleNew.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
        selIm:"",
            search: true
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

    handleSearch(){
        console.log("  handleSearch  ");
        this.state.search = true;
    }


    render() {
        console.log("RENDER .. INPUT")
        const imgF = this.props.imgFilm;
        const imgC = this.props.imgChem;
        console.log("imgF="+ imgF);
        console.log("imgC="+ imgC);
        const search = this.state.search;
        let resultPanel ;
        // if(this.props.result.selectedFilmId>0){
        //    resultPanel =   <ResultTime/>
        // }


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
                <div className={"row"} id="row2">
                    <div className={"col-md-4 col-sm-12"} id="row2col1fotfilm" >
                        <img src={require(`../../img/filmy/${imgF}` )} alt="product" width={200} height={200} />
                    </div>

                    <div className={"col-md-4 col-sm-12"} id="row2col1fot-button" >

                            <div className={"col-12 d-flex justify-content-center"} id="row2col2button-1">
                                <button className={"btn btn-primary"} type="button" onClick={this.handleClick}>Szukaj wyniku</button>
                            </div>

                        <div>
                            <div>
                                <img src={kreska} alt={""} />
                            </div>

                            <div>
                                Nowy czas wywołania:
                            </div>
                            <div>
                                <input/>
                            </div>
                           <div>
                               <button onClick={this.handleSearch}>Zapisz</button>
                           </div>
                        </div>
                    </div>

                    <div className={"col-md-4 col-sm-12"} id="row2col3fotwyw">
                        <img src={require(`../../img/chemia/${imgC}` )} alt="productC" width={200} height={200} />
                    </div>
                </div>
                <div className={"row"} id="row3">
                    <div className={"col"} id="timeresult">

                        <ResultTime/>
                        {/*{resultPanel}*/}
                        <button className={"btn btn-secondary"} onClick={this.handleLoad}> Pokaż zdjecia </button>
                        <input/><button>załaduj zdjecia</button>
                    </div>
                </div>

                <div className={"container d-inline-flex float-right"}  >
                    <div className={"row"}>
                        <div className={"col"}>
                            {this.props.cards.map(el =>
                                <ImageCard key={el.image} card={el} alt="" />
                            )}
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}


const InputPanel = connect(mapStateToProps, { getDataProducenci, getDataResult, getDataImage, getDataSmallImage , loadDataImages })(ConnectedInputPanel);

export default InputPanel;
