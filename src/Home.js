import React from 'react';

import kot from "./img/kot.jpg";

const Home = () => {
    return (
        <div id="back">
            <div className="container">
            <h1>Home!!</h1>

            <div id="intro">
                <div className={"container"}>
                    <div className="row">
                        <div className={"col"}>
                            <div id="kotdiv"><img src={kot} alt={"kot"}/> zdjęcie</div></div>
                        <div className={"col"}>text wstepu</div>
                    </div>
                </div>
            </div>

        </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div id="artykol">
                            <h1>Heading</h1>
                            <p>Paragraph</p>
                        </div>
                    </div>
                    <div className="col">
                        <div id="artykol">
                            <h1>Heading</h1>
                            <p>Paragraph</p>
                        </div>
                    </div>
                    <div className="col">
                        <div id="artykol">
                            <h1>Heading</h1>
                            <p>Paragraph</p>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
}

export default Home;
