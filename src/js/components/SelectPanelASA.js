import React, { Component } from 'react';
import {selectASA} from "../actions";
import {connect} from "react-redux";


// const mapStateToProps = state => {
//     return {selectedASA: state.selectedASA}
// }


function matDispatchToState(dispatch){
      return {  qselectASA: asa => dispatch(selectASA(asa))}
}

class ConnectedSelectPanelASA extends Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
            asa: 0
        }
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        console.log("==  Wybrane ASA:  "+event.target.value);
        this.props.qselectASA(event.target.value);
    }

    render() {
        const asadin = [{asa:3,din:6 },
            {asa:6,din:9 },
            {asa:12,din:12 },
            {asa:25,din:15},
            {asa:40,din:17 },
            {asa:50,din:50 },
            {asa:64,din:19 },
            {asa:100,din:21 },
            {asa:160,din:23 },
            {asa:200,din:24 },
            {asa:320,din:26 },
            {asa:400,din:27 },
            {asa:800,din:30 },
            {asa:1600,din:33 },
            {asa:3200,din:36 },
            {asa:6400,din:39 },
        ]

        return (
            <div id="body3">
                <div className="container" id="cont-select">
                    <div className="row">
                        <div className="col" id="col1label">
                            <p>czułość ASA/DIN</p>
                        </div>
                        <div className="col" id="col2select">
                            <select onChange={this.handleChange} >

                                {asadin.map(
                                    el => <option key={el.asa} value={el.asa}>ASA {el.asa} / DIN {el.din}</option>
                                )}


                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const SelectPanelASA = connect(null, matDispatchToState)(ConnectedSelectPanelASA);
export default SelectPanelASA;
