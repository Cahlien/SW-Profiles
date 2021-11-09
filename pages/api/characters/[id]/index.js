import axios from "axios";

export default async function handler(req, res) {
    const characters = await axios.get(`${process.env.SWAPI_CHARACTER_ENDPOINT}` + req.query.id);
    res.status(200).json(characters.data);
}
