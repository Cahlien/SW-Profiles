import axios from "axios";
import {Fragment, useEffect, useState} from "react";

export default function StarshipsSection(props){
    const [starships, setStarships] = useState();

    async function fetchStarshipInformation(urls){
        const starshipArray = [];

        for(const url of urls){
            const results = await axios.get(url);
            starshipArray.push(results?.data?.name);
            console.log(results);
        }

        setStarships(starshipArray);
    }

    useEffect(() => {
        if(!starships){
            fetchStarshipInformation(props.starships);
        }
    });

    return (
        <Fragment>
            <h3 className={'mt-3'}>Starships Flown</h3>
            <div>
                {starships && starships.map((starship, index) => (
                    <p key={index}><strong>{index + 1}: </strong> {starship}</p>
                ))}
            </div>
        </Fragment>
    )
}
