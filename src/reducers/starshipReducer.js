export const SET_STARSHIP = 'SET_STARSHIP';
export const SET_PLANETS = 'SET_PLANETS';
export const SET_MOVIES = 'SET_MOVIES';


let initialState = {
    name: "",
    films: []
};

export const setStarshipActionCreator = starship => ({
    type: SET_STARSHIP,
    starship
});

export const setPlanetsActionCreator = planet => ({
    type: SET_PLANETS,
    planet
});

export const setFilmsActionCreator = film => ({
    type: SET_MOVIES,
    film
});

const starshipReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_STARSHIP:
            return {
                ...state,
                name: action.starship
            };

        case SET_PLANETS:
            return {
                ...state,
                name: action.planet
            };

        case SET_MOVIES:
            return {
                ...state,
                films: action.film
            };

        default:
            return state
    }
};

export default starshipReducer;
