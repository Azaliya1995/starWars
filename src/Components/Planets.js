import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {setPlanetsActionCreator} from "../reducers/starshipReducer";
import {PlanetsAPI} from "../api/api";
import {connect} from "react-redux";

const Planets = (props) => {
    let {id} = useParams();

    useEffect(() => {
        async function getPlanetsInfo() {
            let res = await PlanetsAPI.getPlanetsAPI(id); //promise
            let data = await res.data;
            props.setPlanet(data);
        }

        getPlanetsInfo();
    }, []);


    return (
        <div>
            <h1>Planets</h1>
            <h2>{props.planet.name}</h2>
            <div>{props.planet.films}</div>
            <div>{props.planet.residents}</div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    planet: state.starshipPage.name
});

const mapDispatchToProps = (dispatch) => ({
    setPlanet: (planet) => dispatch(setPlanetsActionCreator(planet))
});

export default connect(mapStateToProps, mapDispatchToProps)(Planets);
