import {Fragment} from "react";

export default function AboutSection(props) {
    const character = props.character;
    return (
        <Fragment>
            <h3 className={'mt-3'}>About</h3>
            <div>
                <p><strong>Height:</strong> {character?.height} cm</p>
                <p><strong>Weight:</strong> {character?.mass} kg</p>
                <p><strong>Hair Color:</strong> {character?.hair_color}</p>
                <p><strong>Date of Birth:</strong> {character?.birth_year}</p>
            </div>
        </Fragment>
    );
}
