import axios from "axios";
import {Fragment, useEffect, useState} from "react";

export default function StarshipsSection(props){
    const [starships, setStarships] = useState();

    async function fetchStarshipInformation(ships){
        const starshipArray = [];
        for(const ship of ships){
            const results = await axios.get(`${process.env.NEXT_PUBLIC_STARSHIPS_ENDPOINT}` + ship);
            starshipArray.push(results?.data?.name);
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
