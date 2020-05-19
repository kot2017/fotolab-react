import React from 'react';
import FileLoader from "./js/components/FileLoader";

const DataInput = () => {
    return (
        <div className="container">
            <h1>DataInput</h1>
            <h2>wprowadzanie danych</h2>
            <li>producenci</li>
            <li>filmy</li>
            <li>chemikalia</li>
            <FileLoader/>
        </div>
    );
}

export default DataInput;
