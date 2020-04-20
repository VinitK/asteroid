import { NASA_API_KEY } from "./keys"

export const getAsteroidInfo = async asteroidId => {
    if (asteroidId.toLowerCase() === "browse") {
        return await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${NASA_API_KEY}`)
            .then(response => response.json())
            .then(result => {
                const asteroidArr = result.near_earth_objects;
                const asteroidInfo = asteroidArr[Math.floor(Math.random() * asteroidArr.length)]
                return {
                    asteroidInfo,
                    message: "success"
                }
            })
            .catch(err => {
                console.error("Failed to fetch Asteroid Information");
                return {
                    message: "failure"
                }
            });
    } else {
        return await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${NASA_API_KEY}`)
            .then(response => response.json())
            .then(result => {
                return {
                    asteroidInfo: result,
                    message: "success"
                }
            })
            .catch(err => {
                console.error("Failed to fetch Asteroid Information");
                return {
                    message: "failure"
                }
            });
    }
}