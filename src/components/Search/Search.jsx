import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Search.css'

const Search = () => {

    const history = useHistory();

    const [state, setState] = useState({
        asteroidId: "",
        errorMessage: ""
    });

    const changeHandler = ({ target: { name, value } }) => {
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const submitHandler = e => {
        e.preventDefault();
        if (state.asteroidId !== "") {
            history.push(`/${state.asteroidId}`);
        } else {
            setState(prevState => ({
                ...prevState,
                errorMessage: "Please enter an Asteroid Id."
            }))
        }
    }

    const RandomHandler = e => {
        history.push("/browse");
    }

    return (
        <div className="Search w80pc ma">
            <div className="form fcol ma mts">
                <form onSubmit={submitHandler} className="frow">
                    <input className="textInput fgr1" type="text" name="asteroidId" id="asteroidId__id" placeholder="Enter Asteroid ID" onChange={changeHandler} value={state.asteroidId} />
                    <button type="submit" className="button mls">Get Asteroid Info</button>
                </form>
                {
                    state.errorMessage && <p className="c2">{state.errorMessage}</p>
                }
                <button className="button w100pc mts" type="button" onClick={RandomHandler}>Random Asteroid</button>
            </div>
        </div>
    );
};

export default Search;