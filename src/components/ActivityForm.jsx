import React from 'react';

import './ActivityFormStyle.css';

class ActivityForm extends React.Component {
    render() {
        return(
            <div className="activity-form">
                <h3>Actividad {this.props.activity[0] + 1}</h3>
                <div className="activity-form-field">
                    <p>Valor actividad: {this.props.activity[1]}</p>
                    <button value={`remove ${this.props.activity[0]}`} onClick={this.props.changeValue}>-</button>
                    <button value={`add ${this.props.activity[0]}`} onClick={this.props.changeValue}>+</button>
                </div>
                <div className="activity-form-field">
                    <p>Numero de preguntas: {this.props.activity[2]}</p>
                    <button value={`remove ${this.props.activity[0]}`} onClick={this.props.changeQuestions}>-</button>
                    <button value={`add ${this.props.activity[0]}`} onClick={this.props.changeQuestions}>+</button>
                </div>
            </div>
        );
    }
}

export default ActivityForm;