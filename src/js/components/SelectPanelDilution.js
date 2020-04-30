import React, { Component } from 'react';
import {selectDilution} from "../actions";
import {connect} from "react-redux";





function matDispatchToState(dispatch){
    return {  selectDilution: dilution => dispatch(selectDilution(dilution))}
}

class ConnectedSelectPanelDilution extends Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
            dilution: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.selectDilution(event.target.value);
    }

    render() {
        const dilution = [{value:0,label: "bez rozcieńczenia (stock)"},
            {value:1,label: "1 do 1"},
            {value:2,label: "1 do 2"},
            {value:3,label: "1 do 3"},
            {value:10,label: "1 do 10"},
            {value:15,label: "1 do 15"},
            {value:20,label: "1 do 20"},
            {value:30,label: "1 do 30"},
            {value:40,label: "1 do 40"},
            {value:50,label: "1 do 50"},
            {value:100,label: "1 do 100"},

        ]

        return (
            <div id="body3">
                <div className="container" id="cont-select">
                    <div className="row">
                        <div className="col" id="col1label">
                            <p>rozcieńczenie</p>
                        </div>
                        <div className="col" id="col2select">
                            <select onChange={this.handleChange} >

                                {dilution.map(
                                    el => <option key={el.value} value={el.value}>{el.label}</option>
                                )}


                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const SelectPanelDilution= connect(null, matDispatchToState)(ConnectedSelectPanelDilution);
export default SelectPanelDilution;
