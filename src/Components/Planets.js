import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const Planets = () => {
    let {id} = useParams();
    let [state, setState] = useState("");

    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/' + id)
            .then(response => response.data)
            .then(res => setState(res));
    }, []);
    return (
        <div>
            Planets {id}
        </div>
    )
};

export default Planets;