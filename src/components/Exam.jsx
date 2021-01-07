import React from 'react';

class Exam extends React.Component {
    render() {
        let valorPregunta = this.props.activity[1] / this.props.activity[2];
        return(
            <div>
                <h3>Actividad {this.props.activity[0] + 1}</h3>
                <p>{this.props.activity[2]} preguntas</p>
                <p>Valor de cada pregunta: {valorPregunta.toFixed(2)}</p>
            </div>
        );
    }
}

export default Exam;