import React from 'react';

class Home extends React.Component {
    render() {
        return(
            <div>
                <p>Elije el numero de secciones del examen</p>
                <h3>Numero de secciones: {this.props.activities.length}</h3>
                {this.props.activities.length !== 0 ? <button className="button" value="remove" onClick={this.props.changeActivities} >Quitar seccion</button> : null}
                <button className="button" value="add" onClick={this.props.changeActivities}>Añadir seccion</button>
            </div>
        );
    }
}

export default Home;