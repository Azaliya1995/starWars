import React from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        };
    }

    componentDidMount() {
        axios.get('https://swapi.dev/api/films/')
            .then(res => res.data)
            .then((response) => {
                this.setState({
                    films: response.results
                });
            })
    }

    filmItem = (film) => {
        let starshipId = (str) => {
            let strSplit = str.split('/');
            return strSplit[strSplit.length - 2];
        };

        return <div>
            <h1>{film.title}</h1>
            <h3>{film.episode_id}</h3>
            <p>{film.opening_crawl}</p>
            {film.starships.map(item => <Link to={"/starship/" + starshipId(item)}>{item}<br/></Link>)}
        </div>
    };


    render() {
        const {films} = this.state;
        return <>
            <div>
                {films && films.map(item => this.filmItem(item))}
            </div>
        </>
    }
}

export default MoviesList;