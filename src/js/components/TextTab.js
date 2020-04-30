import React, {Component} from 'react';


class TextTab extends Component {


    constructor(props, context) {
        super(props, context);

    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div id="artykol">
                            <h1>Heading</h1>
                            <p>Paragraph</p>
                        </div>
                    </div>
                    <div className="col">
                        <h1>Heading</h1>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        )
    }

}


export default TextTab;

