import * as axios from "axios";

export const instance = axios.create({
    baseURL: 'https://swapi.dev/api/'
});

export const MoviesListAPI = {
    async getStarshipAPI(starshipId) {
        return await instance.get(`starships/${starshipId}`);
    },

    async getMoviesAPI() {
        return await instance.get(`films`);
    }
};

export const PlanetsAPI = {
    async getPlanetsAPI(planetId) {
        return await instance.get(`planets/${planetId}`);
    }
};
