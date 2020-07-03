import React from 'react';
import './App.css';
import MoviesList from "./Components/MoviesList";
import {Route} from "react-router-dom";
import Starship from "./Components/Starship";
import Planets from "./Components/Planets";

function App() {
    return (
        <>
            <Route path='/films'
                   component={MoviesList}/>

            <Route path='/starship/:id'
                   component={Starship}/>

            <Route path='/starship/:id'
                   component={Planets}/>
        </>
    );
}

export default App;
