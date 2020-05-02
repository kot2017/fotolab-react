import React, {Component} from 'react';
import {connect} from "react-redux";
import {getDataProducenci, getDataResult } from "../actions";

//import f1 from "../../img/filmy.jpg";
import f2 from "../../img/Ultrafin.jpg";
import f400 from "../../img/filmy/4.jpg"

import ResultTime from "./ResultTime";
import SelectPanelProducentFilmow from "./SelectPanelProducentFilmow";
import SelectPanelFilmy from "./SelectPanelFilmy";
import SelectPanelChemia from "./SelectPanelChemia";
import SelectPanelProducentChemii from "./SelectPanelProducentChemii";
import SelectPanelASA from "./SelectPanelASA";
import SelectPanelDilution from "./SelectPanelDilution";


const mapStateToProps = state => {
    return {
        producenciFilmow: state.producenciFilmow,
        producenciChemii: state.producenciChemii,
        film: state.selectedFilmId,
        chemia: state.selectedChemiaId,
        asa: state.selectedASA,
        roz: state.selectedDilution,
        imgFilm: state.selimgFilm,
        imgChem: state.selimgChem

    };
}




class ConnectedInputPanel extends Component {


    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
       // this.loadImage = this.loadImage.bind(this);
        this.state = {
            image: "../../img/film/4.jpg"
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


        console.log(" handleClick asa="+ a);
        console.log(" handleClick roz="+ r);
        console.log(" handleClick film="+ f);
        console.log(" handleClick chemia="+ c);

      this.props.getDataResult(a,r,f,c);

    }



    // loadImage = imageName => {
    //
    //     console.log("imageName  = "+ imageName);
    //     import(`../../img/filmy/${imageName}.jpg`).then(image => {
    //         this.setState({
    //             image
    //         });
    //     });
    // };



    render() {

      const  image  = this.state.image

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
                    <div className={"col-md-6 col-sm-12"} id="row2col1fotfilm">


                        {/*<img src={require('../../img/filmy/4.jpg')} alt="product" />*/}

                        <img src={require(`${image}`)} alt="product" />


                        {/*<img id="imgfilm" src={f400} alt={"f1"} width={200} height={200}/>*/}
                    </div>
                    {/*<div className={"col-2"} id="row2col2button">*/}
                    {/*</div>*/}
                    <div className={"col-md-6 col-sm-12"} id="row2col3fotwyw">
                        <img id="imgwyw" src={f2} alt={"f2"} width={200} height={200}/>
                    </div>
                </div>
                <div className={"row"} id="row3">
                    <div className={"col"} id="timeresult">

                        <ResultTime/>
                    </div>
                </div>
            </div>
        )
    }

}


const InputPanel = connect(mapStateToProps, { getDataProducenci, getDataResult })(ConnectedInputPanel);

export default InputPanel;
