import axios from "axios";

export default async function handler(req, res) {
    const params = req.query;

    const starships = await axios.get(`${process.env.SWAPI_STARSHIPS_ENDPOINT}`, {params});

    res.status(200).json(starships.data);
}
