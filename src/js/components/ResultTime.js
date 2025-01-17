import React, {Component} from "react";
import {connect} from "react-redux";


const mapStateToProps = state => {
    return {
        result: state.result
    }
}


class ConnectedResultTime extends Component {

    constructor(props, context) {
        super(props, context);
    }


    render() {
        const wynik = this.props.result;
        return (
            <div>
                <div id="body3">
                    <div className={"container d-inline-flex float-right"} id="cont3wynik">
                        <div className={"row"}>
                            <div className={"col-12"}>
                                <h1>czas {wynik.czasWolania}</h1>
                            </div>
                        </div>

                        <div className={"row"}>
                            <div className={"col-12"}>
                                <p id="opiswyniku">film:<b> {wynik.filmName}</b><br/>

                                    wywoływacz: {wynik.chemiaName} rozcieńczenie: {wynik.rozcienczenie}<br/>
                                    {/*katalog: {wynik.katalog}<br/>*/}
                                    {/*nazwa pliku:<b> {wynik.numerNegatywu}</b><br/>*/}
                                    {/*data: {wynik.data}*/}
                                </p>
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
