import React, { Component } from 'react';
import { connect } from "react-redux";

import {   selectProducentFilmowId, getDataFilmy } from "../actions";


const mapStateToProps = state => {
    return {
        producenciFilmow: state.producenciFilmow
    };
}


function mapDispatchToProps(dispatch) {
    return {
        selectProducentFilmowId: producentFilmowId => dispatch(selectProducentFilmowId(producentFilmowId)),
         getDataFilmy: producentFilmowId => dispatch(getDataFilmy(producentFilmowId))
    }
}



class ConnectedSelectPanelProducentFilmow extends Component{

    constructor(props) {
        super(props);
        this.state = {
            producentFilmowId: -1,
        }
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        const targetValue = event.target.value;
        console.log("wybrany producent przy zmianie: "+ targetValue);
        this.props.selectProducentFilmowId(targetValue);
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

                                <option key={-1} value={-1}>wybierz</option>
                                {this.props.producenciFilmow.map(

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

const SelectPanelProducentFilmow = connect(mapStateToProps, mapDispatchToProps )(ConnectedSelectPanelProducentFilmow);

export default SelectPanelProducentFilmow;
