
import React from 'react';

// import './App.css';

import './css/Navigation-Clean.css';
import './css/Navigation-with-Search.css';
import './css/styles.css';

function App() {
    return (

        <div className={"body"}>

            <nav className="navbar navbar-light navbar-expand-md navigation-clean"
                 style={{backgroundColor:  (239,245,251)}}>
                navbar
                {/*<div className={"container"}>*/}
                {/*    <button data-toggle="collapse" className={"navbar-toggler"} data-target="#navcol-1"><span*/}
                {/*        className={"sr-only"}>Toggle navigation</span><span className={"navbar-toggler-icon"}></span></button>*/}
                {/*    <div className={"collapse navbar-collapse"}*/}
                {/*         id="navcol-1" style={{ backgroundColor:(	221, 221, 221)}}>*/}
                {/*        <ul className={"nav navbar-nav ml-auto"}>*/}
                {/*            <li className={"nav-item"}  > Home*/}
                {/*            </li>*/}
                {/*            <li className={"nav-item"}  > Wyniki </li>*/}
                {/*            <li className={"nav-item"} > Galeria*/}
                {/*                zdjęć </li>*/}
                {/*            <li className={"nav-item dropdown"}>*/}
                {/*                <div className={"dropdown-menu"} role="menu"> </div>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </nav>

            <div className={"jumbotron"}
                 style={{backgroundImage:  "./header.jpg"}}>

                jumbotron

                {/*<div className={"container"}*/}
                {/*     style={{backgroundColor: (52, 47, 47), opacity: 0.35, borderRadius: 25 }}>*/}
                {/*    <h1 className={"display-3 text-center"} style={{color: (230,228,228)}}>FotoLab </h1>*/}
                {/*    <p className={"text-center"} style={{color: (249,246,246)}}>experymenty z obróbką filmów*/}
                {/*        analogowych</p>*/}
                {/*</div>*/}
            </div>

            <div>
                <div className={"container"}
                     style={{backgroundColor:(	52, 47, 47), opacity: 0.73,  borderRadius: 25 ,}}>
                    zdjęcie, wstęp
                    {/*<div className={"row"}>*/}
                    {/*    <div className="col align-self-center"><img className="img-fluid" src="./img/kot.jpg" alt={"kot"}/></div>*/}
                    {/*    <div className={"col"}>*/}
                    {/*        <p className={"lead"} style={{color:  (251,251,252)}}>Prezentuję tutaj moje doświadczenia z*/}
                    {/*            wywoływaniem filmów analogowych.<br/><br/>Wprawdzie film analogowy przenosi mniej informacji*/}
                    {/*                niż nowoczesne kamery cyfrowe, to do wielu zastosowań ta ilość informacji jest*/}
                    {/*                wystarczająca. Dodatkową*/}
                    {/*                cechą wyróżniającą zdjęcia analogowe jest ich sposób archiwizacji, niezależny od*/}
                    {/*                urządzeń technicznych. </p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
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
                        {/*<div className={"card"}>*/}
                        {/*    <div className={"card-body"}>*/}
                        {/*        <h4 className={"text-center card-title"}>Filmy</h4>*/}
                        {/*        <p className={"card-text"}>Obecnie produkowane filmy są wyższej jakości i o lepszych*/}
                        {/*            parametrach niż te wytwarzane przed pojawieniem się fotografii cyfrowej. Dostępne są*/}
                        {/*            również filmy produkowane w poprzednich latach dla potrzeb kinematografii. Filmy te,*/}
                        {/*            nawet przeterminowane o kilkanaście lat, po odpowiedniej obróbce dają zaskakująco*/}
                        {/*            dobre rezultaty.</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>

                    <div className={"col-4"}>
                        wywolywacze
                        {/*<div className={"card"}>*/}
                        {/*    <div className={"card-body"}>*/}
                        {/*        <h4 className={"text-center card-title"}>Wywoływacze</h4>*/}
                        {/*        <p className={"card-text"}>Obróka filmów analogowych polega na wzmocnieniu zaczernienia*/}
                        {/*            emulsji srebrowej. Robi się to poprzez zastosowanie odpowiednich chemikaliów.*/}
                        {/*            Producenci filmów oraz inni producenci chemii nadal wytwarzają odczynniki potrzebne do*/}
                        {/*            obróbki*/}
                        {/*            filmów - wywoływacze, utrwalacze. Poza tym możliwe jest samodzielne zestawianie tych*/}
                        {/*            kąpieli na podstawie publikowanych receptur, a potrzebne składniki można nabyć w*/}
                        {/*            sklepach chemicznych.</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>




                </div>
            </div>

        </div>




    );
}

export default App;
