import React from 'react';
import Home from './Home';
import ActivityForm from './ActivityForm';
import Exam from './Exam';

class Routing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            activities: []
        }

        this.changePage = this.changePage.bind(this);
        this.changeActivities = this.changeActivities.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.changeQuestions = this.changeQuestions.bind(this);
    }

    // Renderiza las diferentes actividades
    changePage(event) {
        if(event.target.value === "next" && this.state.page < 2) {
            this.setState({
                page: this.state.page + 1
            });
        } else if(event.target.value === "back") {
            this.setState({
                page: this.state.page - 1
            });
        }
    }

    // Cambia el numero de secciones en el examen
    changeActivities(event) {
        let activitiesArray = this.state.activities;

        if(event.target.value === "add") {
            activitiesArray.push([this.state.activities.length, 0,0]);
            this.setState({
                activities: activitiesArray
            });
        } else if(event.target.value === "remove") {
            activitiesArray.pop();
            this.setState({
                activities: activitiesArray
            });
        }
    }

    // Cambia el valor de una seccion
    changeValue(event) {
        let splited = event.target.value.split(" ");

        let activitiesArray = this.state.activities;

        if (splited[0] === "add") {
            activitiesArray[splited[1]][1]++;
        } else if (splited[0] === "remove") {
            activitiesArray[splited[1]][1]--;
        }

        this.setState({
            activities: activitiesArray
        });

    }

    // Cambia el numero de preguntas en una seccion
    changeQuestions(event) {
        let splited = event.target.value.split(" ");

        let activitiesArray = this.state.activities;

        if (splited[0] === "add") {
            activitiesArray[splited[1]][2]++;
        } else if (splited[0] === "remove") {
            activitiesArray[splited[1]][2]--;
        }

        this.setState({
            activities: activitiesArray
        });
    }

    render() {
        let showPage;
        switch(this.state.page) {
            case 0:
                showPage = <Home activities={this.state.activities} changeActivities={this.changeActivities} />;
                break;
            case 1: showPage = this.state.activities.length === 0 
                            ? <p>Vuelve atras y elige el numero de secciones</p> 
                            : this.state.activities.map((activity) => 
                                    (<ActivityForm 
                                        activity={activity}
                                        changeValue={this.changeValue}
                                        changeQuestions={this.changeQuestions} 
                                    />)
                                );
                break;
            case 2: showPage = this.state.activities.length === 0 
                            ? <p>Vuelve atras y asigna valores</p> 
                            : this.state.activities.map((activity) => 
                                    (<Exam activity={activity} />)
                                );
                break;
            default:
                break;
        }
        return(
            <div>
                <h1>Maestra App</h1>
                {this.state.page !== 0 ? <button className="button" value="back" onClick={this.changePage}>Volver</button> : null}
                {this.state.page !== 2 ? <button className="button" value="next" onClick={this.changePage}>Siguiente</button> : null}
                {showPage}
            </div>
        );
    }
}

export default Routing;