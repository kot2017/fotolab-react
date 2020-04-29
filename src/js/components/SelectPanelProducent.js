import React, { Component } from 'react';
import { connect } from "react-redux";

import {   selectProducentFilmowId, getDataFilmy } from "../actions";


const mapStateToProps = state => {
    return {
        producenci: state.producenci
    };
}


function mapDispatchToProps(dispatch) {
    return {
        selectProducentFilmowId: producentId => dispatch(selectProducentFilmowId(producentId)),
         getDataFilmy: producentId => dispatch(getDataFilmy(producentId))
    }
}



class ConnectedSelectPanelProducent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            producentId: -1,
        }
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        console.log("event ="+ event.target.value);
        const targetValue = event.target.value;
        console.log("wybrany producent przy zmianie: "+ targetValue);
        this.setState( Object.assign( this.state, {  producentId:targetValue })  );
        this.props.selectProducentFilmowId(targetValue);
        //wywolaj rest dla listy filmow tego producenta
        this.props.getDataFilmy(targetValue)
    };


    render() {
        const {selectedOption } = this.state;

        return (
            <div id="body3">
                <div className="container" id="cont-select">
                    <div className="row">
                        <div className="col" id="col1label">
                            <p>producenci</p>
                        </div>
                        <div className="col" id="col2select">
                            <select onChange={this.handleChange} name={"selectProdFilm"} id={"selectProdFilm"}>
                                {this.props.producenci.map(
                                    el => (
                                        <option key={el.id} value={el.id}>{el.nazwa}</option>
                                    )
                                )}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const SelectPanelProducent = connect(mapStateToProps, mapDispatchToProps )(ConnectedSelectPanelProducent);

export default SelectPanelProducent;
