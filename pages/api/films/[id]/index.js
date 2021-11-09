import axios from "axios";

export default async function handler(req, res) {
    const params = req.query;

    const films = await axios.get(`${process.env.SWAPI_FILMS_ENDPOINT}` + req.query.id, {params});

    res.status(200).json(films.data);
}
