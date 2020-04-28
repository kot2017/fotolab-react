import React, { Component } from 'react';

import f1 from "../../img/filmy.jpg";
import f2 from "../../img/f_18.JPG";
import SelectPanel from "./SelectPanel";
import ResultTime from "./ResultTime";


class InputPanel extends Component{

    render() {

        return(
            <div className={"container"} id="cont1">
                <div className={"row"} id="row1">
                    <div className={"col"} id="col1filmy">
                        {/*<p>row1col1 panel filmow</p>*/}
                        <SelectPanel/>
                        <SelectPanel/>
                        <SelectPanel/>
                    </div>
                    <div className={"col"} id="col2wyw">
                        {/*<p>row1col2 panel wywolywacza</p>*/}
                        <SelectPanel/>
                        <SelectPanel/>
                        <SelectPanel/>
                    </div>
                </div>
                <div className={"row"} id="row2">
                    <div className={"col-5"} id="row2col1fotfilm"><img id="imgfilm" src={f1} alt={"f1"} /></div>
                    <div className={"col-2"} id="row2col2button">
                        <button className={"btn btn-primary"} type="button">Button</button>
                    </div>
                    <div className={"col-5"} id="row2col3fotwyw"><img id="imgwyw" src={f2}  alt={"f2"} /></div>
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


export default InputPanel;
