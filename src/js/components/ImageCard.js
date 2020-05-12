import React, {Component} from 'react';
import {connect} from "react-redux";
import {getDataImage} from "../actions";
//import mapStateToProps from "react-redux/lib/connect/mapStateToProps";


const mapStateToProps = state => {
    return {
      //  image: state.card.imagFile,
      //   url: state.card.url,
      //   imageName: state.card.imageName,
      //   katalog: state.card.katalog,
        imageBig: state.image
    }
}

function mapDispatchToState(dispatch) {
    return {
        getDataImage: (katalog, imageName) => dispatch(getDataImage(katalog, imageName))
    }
}

const divStyle = {
    margin: '40px',
    border: '5px solid pink',
    width: '300px'
};

class ConnectedImageCard extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            big: true,
           card: {}

        }
        this.getImage = this.getImage.bind(this);
    }



    getImage() {
        console.log("GET IMAGE  katalog=" + this.props.card.katalog);
        console.log("nazwa =" + this.props.card.image);

        const k = this.props.card.katalog;
        const i = this.props.card.image;
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

        let current // = this.props.card.imagFile

        if(b){
            current = this.props.card.imgFile // this.props.image;
           // this.state.big = false;
        }else{
            current = this.props.imageBig;
          //  this.state.big = true
        }


        return (
             <div className={divStyle} >
                <img src={current} alt=" immage " onClick={this.getImage}/>
                <div><p>katalog: {this.props.card.katalog}</p></div>
                {/*<div><h2>nazwa pliku: {this.props.card.image}</h2></div>*/}
                {/*<div>*/}
                {/*    <button onClick={this.getImage}>get image</button>*/}
                {/*</div>*/}

             </div>
        );
    }


}

const ImageCard = connect(mapStateToProps, mapDispatchToState)(ConnectedImageCard)
export default ImageCard;
