import React, {Component} from 'react';

// import './App.css';

import styles from "./css/styles.css";

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Result from "./Result";

// import header from "./img/header.jpg";
//import FlameArtwork2 from "./img/FlameArtwork2.png";


import DataInput from "./DataInput";
//import ResultInput from "./ResultInput";


class App extends Component {
    render() {
        return (
            <Router>
                <div className={"container"}   >

                    <div id="back">

                        <nav className={"navbar navbar-light navbar-expand-md navigation-clean"}
                             style={{backgroundColor: (239, 245, 251)}}>

                            <div className={"container"}>Tarken
                                <button data-toggle={"collapse"} className={"navbar-toggler"} data-target={"#navcol-1"}><span
                                    className={"sr-only"}>Toggle navigation</span><span
                                    className={"navbar-toggler-icon"}></span></button>
                                <div className={"collapse navbar-collapse"}
                                     id="navcol-1" style={{backgroundColor: (205, 198, 192)}}>
                                    <ul className={"nav navbar-nav ml-auto"}>
                                        <li className={"nav-item"}>
                                            <Link class={"nav-link"} to="/">Home</Link></li>

                                        <li className={"nav-item"}>
                                            <Link class={"nav-link"} to="/result">Wyniki</Link></li>
                                        {/*<li className={"nav-item"}>*/}
                                        {/*    <Link class={"nav-link"} to="/newresult">Nowy wyniki</Link></li>*/}

                                        <li className={"nav-item"}>
                                            <Link class={"nav-link"} to="/datainput">Wprowadzanie danych</Link></li>

                                    </ul>
                                </div>
                            </div>
                        </nav>

                    </div>

                    <div id="promo">
                        <div className={"jumbotron"} style={{opacity: 0.7}}>
                            <h1>FotoLab</h1>
                            <p>Dotografia analogowa żyje!.</p>

                        </div>
                    </div>


 

                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/result" component={Result}/>
                    {/*<Route path="/newresult" component={ResultInput}/>*/}
                    <Route path="/datainput" component={DataInput}/>
                </div>
            </Router>
        );
    }
}

export default App;
