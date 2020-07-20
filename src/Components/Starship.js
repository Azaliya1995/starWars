import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {setStarshipActionCreator} from "../reducers/starshipReducer";
import {connect} from "react-redux";
import {MoviesListAPI} from "../api/api";

const Starship = (props) => {
    let {id} = useParams();

    useEffect(() => {
        async function getMoviesAPI() {
            let res = await MoviesListAPI.getStarshipAPI(id);
            let data = await res.data;
            props.setStarship(data);
        }
        getMoviesAPI();
    }, []);


    return (
        <div>
            Starships {id}
            <div>
                name: {props.starship.name}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    starship: state.starshipPage.name
});

const mapDispatchToProps = (dispatch) => ({
    setStarship: (starship) => dispatch(setStarshipActionCreator(starship))
});

export default connect(mapStateToProps, mapDispatchToProps)(Starship);