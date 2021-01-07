import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return(
            <div>
                <Link to="/">Secciones</Link>
                <Link to="/activity">Actividades</Link>
                <Link to="/exam">Examen</Link>
            </div>
        );
    }
}

export default Navbar;