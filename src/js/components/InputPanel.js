import React, {Component} from 'react';
import {connect} from "react-redux";
import {getDataProducenci, getDataResult } from "../actions";

//import f1 from "../../img/filmy.jpg";
import f2 from "../../img/Ultrafin.jpg";
import f400 from "../../img/filmy/Fuji400.jpg"

import ResultTime from "./ResultTime";
import SelectPanelProducentFilmow from "./SelectPanelProducentFilmow";
import SelectPanelFilmy from "./SelectPanelFilmy";
import SelectPanelChemia from "./SelectPanelChemia";
import SelectPanelProducentChemii from "./SelectPanelProducentChemii";
import SelectPanelASA from "./SelectPanelASA";
import SelectPanelDilution from "./SelectPanelDilution";


var images = require.context('../../img', true);


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
          //  image: "../../img/film/Fuji400.jpg",
           //img:  this.state.selectedFilmId  // ? "F125" : this.state.film
          img : "1.jpg"
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



    // loadImage = imageName => {
    //
    //     console.log("imageName  = "+ imageName);
    //     import(`../../img/filmy/${imageName}`).then(img => {
    //         this.setState({
    //             img
    //         });
    //     });
    // };

    loadImage(imageName){
            console.log("imageName  = "+ imageName);
            import(`../../img/filmy/${imageName}`).then(img => {
                this.setState({
                    img
                });
            });
    }



    render() {
        console.log(" RENDER..")

     //   this.loadImage(this.props.imgFilm)

       const img1 = "F125.jpg"
       //  const img1 = this.state.selimgFilm
       // let img_src = images(`./filmy/${this.state.imgFilm}`);
        console.log("images:  "+ images);
        console.log("this.state.imgFilm :  "+ this.state.imgFilm);
       // console.log("this.state.img :  "+ this.state.img);
        console.log(" img1 = "+img1)
        console.log("this.props.imgFilm :  "+ this.props.imgFilm);

        const img = this.props.imgFilm;

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

        {/*<img src={img1} alt={""}/>*/}


                        <img src={require(`../../img/filmy/${img}` )} alt="product" width={200} height={200} />

                    </div>

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
