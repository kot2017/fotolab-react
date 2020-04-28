import React from 'react';

// import './App.css';


import './css/styles.css';

function App() {
    return (
        <div id={"body_wyniki"}>

            <div className={"collapse navbar-collapse"} id="navcol-2"  >
                navbar

            </div>

            <div>

                <div className={"container"}
                     style={{backgroundColor: (52, 47, 47), borderRadius: 25}}>
                    <div className={"row"}>
                        wstep

                    </div>
                </div>

            </div>

            <div className={"row"}>
                <div className={"col-auto"}></div>
            </div>
            <div>
                <p>Paragraph</p>
            </div>

            <div id={"kontener_glowny"}>
                kontener główny
                <div className={"container"}>

                    <div id={"pierwszy wiersz"} className={"row"}>
                        pierwszy wiersz
                        <div className={"col"}>
                            kolumna
                            <div className={"container text-primary"}>
                                formatki do wyboru danych
                                <div className={"row"}>
                                    <div className={"col"}>

                                        <div className={"form-group"}>
                                            form grup 1
                                        </div>
                                    </div>
                                    <div className={"form-group"}>
                                        form grup 2
                                    </div>

                                </div>

                            </div>
                            <div className={"row"}>

                                <div className={"col-5 align-self-center"}>
                                    zdjecie filmu
                                </div>

                                <div className={"col-2 align-self-start"}>
                                    <button className={"btn btn-primary"} type="button">Button</button>
                                </div>

                                <div className={"col-5"}>
                                    zdjecie wywolywacza
                                </div>

                                <div className={"row"}>
                                    <div className={"col"}>
                                        panel wynikow -->

                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className={"col"}>
                            duze zdjecie
                        </div>

                    </div>

                        <div className="row">
                            <div className="col">

                                drugi wiersz - zdjecia
                            </div>

                        </div>

                    </div>

                </div>
            </div>



                );
                }

                export default App;
