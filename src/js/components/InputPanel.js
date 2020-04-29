import React, {Component} from 'react';
import {connect} from "react-redux";
import {getDataProducenci } from "../actions";

import f1 from "../../img/filmy.jpg";
import f2 from "../../img/f_18.JPG";
import SelectPanel from "./SelectPanel";
import ResultTime from "./ResultTime";
import SelectPanelProducent from "./SelectPanelProducent";


const mapStateToProps = state => {
    return {
        producenci: state.producenci
    };
}


class ConnectedInputPanel extends Component {

    componentDidMount() {
        this.props.getDataProducenci();
    }


    render() {

        return (
            <div className={"container"} id="cont1">
                <div className={"row"} id="row1">
                    <div className={"col-sm-12 col-md-6"} id="col1filmy">
                        <h2>filmy</h2>
                        <SelectPanelProducent />
                        <SelectPanel/>
                        <SelectPanel/>
                    </div>
                    <div className={"col-sm-12 col-md-6"} id="col2wyw">
                        <h2>wywolywacze</h2>
                        <SelectPanelProducent />
                        <SelectPanel/>
                        <SelectPanel/>
                    </div>
                </div>

                <div className={"row"} id="rowbutton">
                    <div className={"col-12 d-flex justify-content-center"} id="row2col2button-1">
                        <button className={"btn btn-primary"} type="button">Button</button>
                    </div>
                </div>

                <div className={"row"} id="row2">
                    <div className={"col-md-6 col-sm-12"} id="row2col1fotfilm"><img id="imgfilm" src={f1} alt={"f1"}/>
                    </div>
                    {/*<div className={"col-2"} id="row2col2button">*/}
                    {/*</div>*/}
                    <div className={"col-md-6 col-sm-12"} id="row2col3fotwyw"><img id="imgwyw" src={f2} alt={"f2"}/>
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


const InputPanel = connect(null, { getDataProducenci })(ConnectedInputPanel);

export default InputPanel;
