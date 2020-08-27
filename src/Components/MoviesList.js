import React from 'react';
import {Link} from "react-router-dom";
import {setFilmsActionCreatorAsync} from "../reducers/starshipReducer";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {useMount} from "react-use";

const MoviesList = (props) => {

    useMount(() => {
        props.setFilms();
    });

    const filmItem = (film) => {
        let starshipId = (str) => {
            let strSplit = str.split('/');
            return strSplit[strSplit.length - 2];
        };

        return <div key={`${film.title}`}>
            <h1>{film.title}</h1>
            <h3>{film.episode_id}</h3>
            <p>{film.opening_crawl}</p>
            {film.starships.map((item, index) => <Link key={`${film.title} + ${index}`}
                                                       to={"/starship/" + starshipId(item)}>{item}<br/></Link>)}
        </div>
    };

    return (
        <>
            <div>
                {props.films && props.films.map(item => filmItem(item))}
            </div>
        </>
    )
};

const mapStateToProps = (state) => ({
    films: state.starshipPage.films.results
});

const mapDispatchToProps = (dispatch) => ({
    setFilms: bindActionCreators(setFilmsActionCreatorAsync, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
