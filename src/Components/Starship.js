import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const Starship = () => {
    let {id} = useParams();
    let [state, setState] = useState("");

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/' + id)
            .then(response => response.data)
            .then(res => setState(res));
    }, []);

    return (
        <div>
            Starships {id}
            <div>
                name: {state.name} <br/>
                cargo_capacity: {state.cargo_capacity} <br/>
                consumables: {state.consumables} <br/>
                hyperdrive_rating: {state.hyperdrive_rating} <br/>
                length: {state.length} <br/>
                manufacturer: {state.manufacturer} <br/>
                model: {state.model} <br/>
                passengers: {state.passengers} <br/>
                starship_class: {state.starship_class}
            </div>
        </div>
    )
};

export default Starship;