import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {setFilmsActionCreator} from "../reducers/starshipReducer";
import {MoviesListAPI} from "../api/api";
import {connect} from "react-redux";

const MoviesList = (props) => {

    useEffect(() => {
        async function getMoviesListAPI() {
            let res = await MoviesListAPI.getMoviesAPI();
            let data = await res.data;
            props.setFilms(data);
        }

        getMoviesListAPI();
    }, []);

    const filmItem = (film) => {
        let starshipId = (str) => {
            let strSplit = str.split('/');
            return strSplit[strSplit.length - 2];
        };

        return <div key={`${film.title}`}>
            <h1>{film.title}</h1>
            <h3>{film.episode_id}</h3>
            <p>{film.opening_crawl}</p>
            {film.starships.map((item, index) => <Link key={`${film.title} + ${index}`} to={"/starship/" + starshipId(item)}>{item}<br/></Link>)}
        </div>
    };

    return (
     <>
        <div>
            {props.films && props.films.map(item => filmItem(item))}
        </div>
    </>
)};

const mapStateToProps = (state) => ({
    films: state.starshipPage.films.results
});

const mapDispatchToProps = (dispatch) => ({
    setFilms: (films) => dispatch(setFilmsActionCreator(films))
});


export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
