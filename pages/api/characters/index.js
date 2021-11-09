import axios from "axios";

export default async function handler(req, res) {
    const params = req.query;
    const characters = await axios.get(`${process.env.SWAPI_CHARACTER_ENDPOINT}`, {params});

    res.status(200).json(characters.data);
}
