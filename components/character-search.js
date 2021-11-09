import {Fragment} from "react";
import {Form} from "react-bootstrap";
import axios from "axios";
import {characterActions} from "../redux/characters";
import {useRouter} from "next/router";

import {useDispatch} from "react-redux";

export default function CharacterSearch() {
    const router = useRouter();
    const dispatch = useDispatch();
    let characterName;

    function handleCharacterNameChange(event) {
        characterName = event.target.value;
    }

    async function handleCharacterSearch(event) {
        event.preventDefault();
        if (router.query.id !== '/'){
            await router.push('/');
        }
            const response = await axios.get(`${process.env.NEXT_PUBLIC_CHARACTER_ENDPOINT}`, {
                params: {
                    search: characterName
                }
            });

        dispatch(characterActions.updateCharacters(response.data.results));

    }

    return (
        <Fragment>
            <Form className={'d-flex col-8 col-sm-5 col-lg-3 col-xl-2'}>
                <input className="form-control me-2" type="search" placeholder="Search by name" aria-label="Search"
                       onChange={handleCharacterNameChange}/>
                <button className="btn btn-outline-success" type="submit" onClick={handleCharacterSearch}>Search
                </button>
            </Form>
        </Fragment>
    );
}
