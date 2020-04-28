import React from 'react';

// import './App.css';

import './css/Navigation-Clean.css';
import './css/Navigation-with-Search.css';
import './css/styles.css';

function App() {
    return (

        <div className={"body"}>

            <div>
                navbar
            </div>

            <div className={"jumbotron"}
                 style={{backgroundImage:  "header.jpg"}}>

                jumbotron
            </div>

            <div>
                <div className={"container"}
                     style={{backgroundColor:(	52, 47, 47), opacity: 0.73,  borderRadius: 25 ,}}>
                    zdjęcie, wstęp
                </div>
            </div>
            <div>
                <div className={"row"}>
                    <div className={"col-4"}>
                        <div className={"card"}>
                            <div className={"card-body"}>
                                <h4 className={"text-center card-title"}>Producenci</h4>
                                <p className={"card-text"}>Kilku producentów nadal produkuje filmy perforowane 35mm dl
                                    apotrzeb kinematografii, lotnictwa, rejestratorów i fotografii. Producenci tacy
                                    jak&nbsp;Ilford, Kodak, Agfa, Foma, Rollei. którzy w poprzednich dekadach przodowali w
                                    wytwarzaniu filmów fotograficznych nadal produkuje swoje wyroby. Są&nbsp;również
                                    firmy, które konfekcjonują i przygotowują do użytku fotograficznego taśmy kinowe.</p>
                            </div>
                        </div>
                    </div>

                    <div className={"col-4"}>
                        filmy
                    </div>

                    <div className={"col-4"}>
                        wywolywacze
                    </div>

                </div>
            </div>

        </div>

    );
}

export default App;
