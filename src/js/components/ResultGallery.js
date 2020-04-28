import React, { Component } from 'react';

import kot from "../../img/kot.jpg";


class ResultGallery extends Component{

    render() {
        return (
            <div>
                <div id="back-2">
                    <p>div back-2&nbsp; &nbsp;Paragraph</p>
                    <div className={"container"} id="contener2">
                        <p>container2 Paragraph</p>
                        <div className={"row"} id="row1gora-1">
                            <div className={"col-auto"} id="col2picture-1">
                                <div id="col2picturediv-1"><img src={kot} alt="kot" /></div>
                            </div>
                            <div className={"col-auto"} id="col2picture-2">
                                <div id="col2picturediv-2"><img src={kot} alt="kot" /></div>
                            </div>
                            <div className={"col-auto"} id="col2picture-3">
                                <div id="col2picturediv-3"><img src={kot} alt="kot" /></div>
                            </div>
                            <div className={"col-auto"} id="col2picture-4">
                                <div id="col2picturediv-4"><img src={kot} alt="kot" /></div>
                            </div>
                            <div className={"col-auto"} id="col2picture-5">
                                <div id="col2picturediv-5"><img src={kot} alt="kot" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default ResultGallery;
