import React, { Component } from "react";
import {connect} from "react-redux";


const mapStateToProps = state => {
    return {
        result: state.result
    }

}


class ConnectedResultTime extends Component{


    render() {

        const wynik = this.props.result;

        return (
            <div>
                <div id="body3">
                    <div className={"container d-inline-flex float-right"} id="cont3wynik">
                        <div className={"row"}>
                            <div className={"col-4"}>
                                <p id="opiswyniku">film:<b> {wynik.filmName}</b><br/>
                                    naswietlony jak: {wynik.asa}<br/>
                                    wywoływacz: {wynik.chemiaName}<br/>
                                    rozcieńczenie: {wynik.rozcienczenie}<br/>
                                    katalog: {wynik.katalog}<br/>
                                    nazwa pliku:<b> {wynik.numerNegatywu}</b><br/>
                                    data: {wynik.data}





                                </p>
                            </div>
                            <div className={"col"}>
                                <h1>czas {wynik.czasWolania}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const ResultTime = connect(mapStateToProps)(ConnectedResultTime);
export default ResultTime;
