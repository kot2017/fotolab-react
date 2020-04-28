import React from 'react';
import InputPanel from "./js/components/InputPanel";

import kot from "./img/kot.jpg";
import ResultGallery from "./js/components/ResultGallery";

const Topics = () => {
    return (
        <div className="container">
            <h1>TOPICS</h1>

            <div id={"back-1"}>
                {/*<p>div back-1&nbsp; &nbsp;Paragraph</p>*/}
                <div className={"container"} id="contener1">

                    <div className={"row"} id="row1gora">
                        <div className={"col-7"} id="col1input">

                            <div id="col1inputdiv">


                                <InputPanel />
                            </div>
                        </div>
                        <div className={"col-5"} id="col2picture">
                            <div id="col2picturediv">
                                {/*<img src={kot} alt={"kot"} />*/}

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <ResultGallery/>
        </div>
    );
}

export default Topics;
