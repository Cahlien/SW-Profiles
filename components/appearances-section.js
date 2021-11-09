import {Fragment, useEffect, useState} from "react";
import axios from "axios";

export default function FilmAppearances(props){
    const [appearances, setAppearances] = useState();

    async function fetchFilmAppearanceInformation(films){
        let filmAppearances = [];

        for(const film of films){
            const results = await axios.get(`${process.env.NEXT_PUBLIC_FILMS_ENDPOINT}` + film);
            filmAppearances.push(results?.data?.title);
        }

        setAppearances(filmAppearances);
    }

    useEffect(() => {
        if(!appearances){
            fetchFilmAppearanceInformation(props.films);
        }

    })

    return (
        <Fragment>
            <h3 className={'mt-3'}>Film Appearances</h3>
            <div>
                {appearances && appearances.map((appearance, index) => (
                    <p key={index}><strong>{index + 1}: </strong>{appearances[index]}</p>
                ))}
            </div>
        </Fragment>
    )
}
