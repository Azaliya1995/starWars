import React from 'react';
import {useParams} from "react-router-dom";
import {setStarshipActionCreatorAsync} from "../reducers/starshipReducer";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {useMount} from "react-use";

const Starship = (props) => {
    let {id} = useParams();

    useMount(() => {
       props.setStarship(id)
    });

    return (
        <div>
            <div>Starships {id}</div>

        </div>
    )
};

const mapStateToProps = (state) => ({
    starship: state.starshipPage.name
});

const mapDispatchToProps = (dispatch) => ({
    setStarship: bindActionCreators(setStarshipActionCreatorAsync, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Starship);
