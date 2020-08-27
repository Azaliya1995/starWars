import React from 'react';
import './App.css';
import MoviesList from "./Components/MoviesList";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Starship from "./Components/Starship";
import Planets from "./Components/Planets";
import People from "./Components/People";

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/films'
                       component={MoviesList}/>

                <Route path='/starships/:id'
                       component={Starship}/>

                <Route path='/planets/:id'
                       component={Planets}/>

                <Route path='/people/:id'
                       component={People}/>

            </Switch>
        </Router>
    );
}

export default App;
