import React from "react";
import {useParams} from "react-router-dom";
import {setPlanetsActionCreatorAsync} from "../reducers/starshipReducer";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {useMount} from "react-use";

const Planets = (props) => {
    let {id} = useParams();

    useMount(() => {
        props.setPlanet(id);
    });


    return (
        <div>
            <h1>Planets</h1>
            <h2>{props.planet.name}</h2>
            <div>{props.planet.films}</div>
            <br/>
            <div>{props.planet.residents}</div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    planet: state.starshipPage.name
});

const mapDispatchToProps = (dispatch) => ({
    setPlanet: bindActionCreators(setPlanetsActionCreatorAsync, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Planets);
