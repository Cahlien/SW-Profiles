import {Fragment} from "react";
import {Form} from "react-bootstrap";
import axios from "axios";
import {characterActions} from "../redux/characters";

import {useDispatch} from "react-redux";

export default function CharacterSearch() {
    let characterName;
    const dispatch = useDispatch();

    function handleCharacterNameChange(event) {
        characterName = event.target.value;
    }

    async function handleCharacterSearch(event) {
        event.preventDefault();
        const response = await axios.get('http://swapi.dev/api/people', {
            params: {
                search: characterName
            }
        });

        dispatch(characterActions.updateCharacters(response.data.results));

    }

    return (
        <Fragment>
            <Form className={'d-flex'}>
                <input className="form-control me-2" type="search" placeholder="Search by name" aria-label="Search"
                       onChange={handleCharacterNameChange}/>
                <button className="btn btn-outline-success" type="submit" onClick={handleCharacterSearch}>Search
                </button>
            </Form>
        </Fragment>
    );
}
