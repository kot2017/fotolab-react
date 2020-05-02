import React, { Component } from 'react';
import { connect } from "react-redux";

import {   selectProducentChemiiId, getDataChemia } from "../actions";
//import {logger} from "../middleware";


const mapStateToProps = state => {
    return {
        producenciChemii: state.producenciChemii,
    };
}


function mapDispatchToProps(dispatch) {
    return {
        selectProducentChemiiId: producentChemiiId => dispatch(selectProducentChemiiId(producentChemiiId)),
        getDataChemia: producentChemiiId  => dispatch(getDataChemia(producentChemiiId ))
    }
}



class ConnectedSelectPanelProducentChemii extends Component{

    constructor(props) {
        super(props);
        this.state = {
            producentChemiiId: -1,
        }
        this.handleChangeChemiaId = this.handleChangeChemiaId.bind(this);
    }


    handleChangeChemiaId(event) {

        const targetValue = event.target.value;
        console.log("wybrany producent chemii przy zmianie: "+ targetValue);
      this.props.selectProducentChemiiId( targetValue);
        //wywolaj rest dla listy chemii tego producenta
        this.props.getDataChemia(targetValue)
    };


    render() {
      //  const {selectedOption } = this.state;

        return (
            <div id="body3">
                <div className="container" id="cont-select">
                    <div className="row">
                        <div className="col" id="col1label">
                            <p>producenci chemii</p>
                        </div>
                        <div className="col" id="col2select">
                            <select onChange={this.handleChangeChemiaId} name={"selectProdChem"} id={"selectProdChem"}>
                                <option key={-1} value={-1}>wybierz</option>
                                {this.props.producenciChemii.map(
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

const SelectPanelProducentChemii = connect(mapStateToProps, mapDispatchToProps )(ConnectedSelectPanelProducentChemii);

export default SelectPanelProducentChemii;
