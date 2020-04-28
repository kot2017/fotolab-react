import React, { Component } from 'react';


class SelectPanel extends Component{


    render() {
        return (
            <div id="body3">
                <div className="container" id="cont-select">
                    <div className="row">
                        <div className="col" id="col1label">
                            <p>Select Panel</p>
                        </div>
                        <div className="col" id="col2select">
                            <select>
                                <option>a</option>
                                <option>b</option>
                                <option>c</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


export default SelectPanel;
