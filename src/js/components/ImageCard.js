import React, {Component} from 'react';
import {connect} from "react-redux";
import {getDataImage} from "../actions";
//import mapStateToProps from "react-redux/lib/connect/mapStateToProps";


const mapStateToProps = state => {
    return {
        image: state.card.imagFile,
        url: state.card.url,
        imageName: state.card.imageName,
        katalog: state.card.katalog,
        imageBig: state.image
    }
}

function mapDispatchToState(dispatch) {
    return {
        getDataImage: (katalog, imageName) => dispatch(getDataImage(katalog, imageName))
    }
}


class ConnectedImageCard extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            big: true,
           // current:{}

        }
        this.getImage = this.getImage.bind(this);
    }



    getImage() {
        console.log("GET IMAGE  katalog=" + this.props.katalog);
        console.log("nazwa =" + this.props.imageName);

        const k = this.props.katalog;
        const i = this.props.imageName;
        this.props.getDataImage(k, i);

        const b = this.state.big;
        if(b){
            this.state.big = false;
        }else{
            this.state.big = true;
        }

    }


    render() {

        const b = this.state.big;

        let current = {};

        if(b){
            current = this.props.image;
           // this.state.big = false;
        }else{
            current = this.props.imageBig;
          //  this.state.big = true
        }


        return (
            <div>
                <img src={current} alt=" immage " onClick={this.getImage}/>
                <div><h2>katalog: {this.props.katalog}</h2></div>
                <div><h2>nazwa pliku: {this.props.imageName}</h2></div>
                <div>
                    <button onClick={this.getImage}>get image</button>
                </div>

            </div>
        );
    }


}

const ImageCard = connect(mapStateToProps, mapDispatchToState)(ConnectedImageCard)
export default ImageCard;
