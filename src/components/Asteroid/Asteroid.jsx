import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";

import { getAsteroidInfo } from '../../utils/api';
import NotFound from '../NotFound/NotFound';
import Loading from '../Loading/Loading';

const Asteroid = () => {
    const { asteroidId } = useParams();

    const [state, setState] = useState({
        message: "",
        asteroidInfo: {}
    });

    useEffect(() => {
        (async function () {
            const data = await getAsteroidInfo(asteroidId);
            setState(prevState => ({
                ...prevState,
                ...data
            }))
        }
        )();
    }, [asteroidId]);

    return (
        state.message === "success"
            ?
            <div className="Asteroid w80pc ma">
                <h1 className="c1">Asteroid Name: {state.asteroidInfo.name}</h1>
                <p>NASA JPL URL: <a href={state.asteroidInfo.nasa_jpl_url}>{state.asteroidInfo.nasa_jpl_url}</a></p>
                {
                    state.asteroidInfo.is_potentially_hazardous_asteroid ? <h2 className="c2">It is a potentially hazardous asteroid.</h2>
                        :
                        <h2 className="c3">It is NOT a potentially hazardous asteroid.</h2>
                }
            </div>
            :
            state.message === "failure"
                ?
                <NotFound />
                :
                <Loading />
    );
};

export default Asteroid;