import React, {Component} from 'react';
import {selectFilmId} from "../actions";
import {connect} from "react-redux";


//mapowanie stanu na properties
const mapStateToProps = state => {
    return {
        filmy: state.filmy
    };
}

//mapowanie funkcji na wywolanie akcji
//mapujemy wybranie id filmu
function mapDispatchToState(dispatch) {
    return {selectFilmId: (filmId, imgId, name) => dispatch(selectFilmId(filmId, imgId, name))}
}


class ConnectedSelectPanelFilmy extends Component {


    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const targetValue = event.target.value;
        console.log(" handleChange  targetValue= " + targetValue)
        var res = targetValue.split("&");
        this.props.selectFilmId(res[0], res[1], res[2]);
    }


    render() {
        console.log("RENDER .. filmy")
        return (
            <div id="body3">
                <div className="container" id="cont-select">
                    <div className="row">
                        <div className="col" id="col1label">
                            <p>Filmy</p>
                        </div>
                        <div className="col" id="col2select">
                            <select onChange={this.handleChange} name={"selectFilmy"} key={"selectFilmy"}
                                    id={"selectFilmy"}>

                                <option key={-1} value={-1}>wybierz film</option>

                                {this.props.filmy.map(
                                    el => <option id={el.id} key={el.id}
                                                  value={`${el.id}&${el.fot}&${el.nazwa}`}>{el.nazwa}</option>
                                )}

                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


const SelectPanelFilmy = connect(mapStateToProps, mapDispatchToState)(ConnectedSelectPanelFilmy);

export default SelectPanelFilmy;
