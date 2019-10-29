import React from 'react';
import "./style.css";
import "../../characters.json";

class characters extends React.Component {

    state = {
        score: 0,
        record: 0,
        characters: characters
    }

handleIncrement = () => {
    this.setState({ count: this.state.count +1 });
};
}

function Eleven() {
    return (
        <div className="card">
            <div className="img-container">
            <img alt="Eleven" src="https://specials-images.forbesimg.com/imageserve/5d2795864c687b00085c6b98/960x0.jpg?fit=scale" />
            </div>
        </div>
    );
}

export default Eleven;