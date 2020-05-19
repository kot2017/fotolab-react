import React, {Component} from 'react';
import {addPhoto, uploadPhoto} from "../actions";
import {connect} from "react-redux";


/**
 * https://www.devglan.com/react-js/file-upload-react-spring-rest
 */


const mapStateToProps = state => {
    return {
        photos: state.uploadPhotos,
         katalog: state.result.katalog,
        filmName: state.selectedFilmName,
        chemiaName: state.selectedChemiaName,
        asa: state.selectedASA,
        roz: state.selectedDilution,
        time: state.title
    }
}


function mapDispatchToProps(dispatch) {
    return {
        selectFile: (selectedFile) => dispatch(addPhoto(selectedFile)),
        uploadPhoto: () => dispatch(uploadPhoto()),
    }
}

class ConnectedFileLoader extends Component{


    constructor(props, context ) {
        super(props, context);
        this.onFileChangeHandler = this.onFileChangeHandler.bind(this);
        this.onClikHandler = this.onClikHandler.bind(this);

    }

    onFileChangeHandler = (e) => {
        e.preventDefault();
        console.log("SELECTED FILE=  "+ e.target.files.length);
        this.props.selectFile(e.target.files);
        //const katalog = this.props.katalog
    }

    onClikHandler = (e) => {
        e.preventDefault();
        this.props.uploadPhoto( )
    }


    // buildKatalog(){
    //     const a = this.props.asa;
    //     const r = this.props.roz;
    //     const time = this.props.time;
    //     const fname = this.props.filmName
    //     const cname = this.props.chemiaName
    //
    //     const fnamet = fname.replace( /\s/g, '')
    //     const cnamet = cname.replace( /\s/g, '')
    //     const timet = time.replace( /\s/g, '')
    //
    //
    //     const katalog = fnamet+"\\"+a+"ASA\\"+cnamet+"\\1do" +r+"\\" + timet;
    //     return katalog;
    // }




    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group files color">
                            <label>Upload Your File </label>
                            <input type="file" className="form-control" multiple="multiple" name="file" onChange={this.onFileChangeHandler}/>
                            <div></div>
                            <button type="submit" name={"upload"} onClick={this.props.uploadPhoto} >zapisz</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const FileLoader = connect(null, mapDispatchToProps)(ConnectedFileLoader)

export default FileLoader;

