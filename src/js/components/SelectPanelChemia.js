import React, { Component } from 'react';
import {selectChemiaId} from "../actions";
import {connect} from "react-redux";


const mapStateToProps = state => {
    return{
        chemia: state.chemia
    }
}

function mapDispatchToProps(dispatch){
    return {
        selectChemiaId: chemiaId => dispatch(selectChemiaId(chemiaId))
    }
}


class ConnectedSelectPanelChemia extends Component{


    constructor(props, context) {
        super(props, context);
        this.state = {
            chemia: [],
            selectChemiaId: -1
        }

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event){
        const targetValue = event.target.value;
        this.props.selectChemiaId(targetValue);
    }

    render() {
        return (
            <div id="body3">
                <div className="container" id="cont-select">
                    <div className="row">
                        <div className="col" id="col1label">
                            <p>Select Panel</p>
                        </div>
                        <div className="col" id="col2select">
                            <select onChange={this.handleChange} key={"selectChemia"} name={"selectChemia"}>
                                <option key={-1} value={-1}>wybierz</option>
                                {this.props.chemia.map(
                                    el=> (
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


const SelectPanelChemia = connect(mapStateToProps, mapDispatchToProps)(ConnectedSelectPanelChemia);

export default SelectPanelChemia;
