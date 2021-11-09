import axios from "axios";

export default async function handler(req, res) {
    const params = req.query;

    const species = await axios.get(`${process.env.SWAPI_SPECIES_ENDPOINT}`, {params});

    res.status(200).json(species.data);
}
