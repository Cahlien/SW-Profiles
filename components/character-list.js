import {Fragment} from "react";
import {Button, Table} from "react-bootstrap";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";

export default function CharacterList(){
    const characters = useSelector(state => state.characters.characters);
    const router = useRouter();

    async function handleButtonClick(event) {
        event.preventDefault();
        await router.push('/characters/' + event.target.value);
    }

    return (
        <Fragment>
            <Table striped bordered hover className={'me-3 table-responsive my-5'} >
                <thead>
                <tr>
                    <th className={'col-11'}>Name</th>
                    <th className={'col-1'}>Details</th>
                </tr>
                </thead>
                <tbody>
                {characters && characters.map((character, index) => (
                <tr key={index}>
                    <td>{character.name}</td>
                    <td className={'float-end'}>
                        <Button onClick={handleButtonClick} value={index}>View</Button>
                    </td>
                </tr>
                ))}
                </tbody>
            </Table>
        </Fragment>
    )
}
