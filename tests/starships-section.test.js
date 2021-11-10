import {act, render} from "@testing-library/react";
import StarshipsSection from "../components/starships-section";
import axios from "axios";

jest.mock("axios");

describe('StarshipSection', () => {
    it('renders the section', async () => {
        const ships = [9];
        const promise = Promise.resolve({
            data: {
                name: "Death Star"
            }
        });

        axios.get.mockResolvedValueOnce(promise);

        const starshipsSection = render(<StarshipsSection starships={ships}/>);

        await act(() => promise);

        const heading = starshipsSection.getByText(/Flown/);

        expect(axios.get).toHaveBeenCalled();
        expect(heading).toBeInTheDocument();
    });

    it('populates fields with data from the provided starships', async () => {
        const ships = [9];
        const promise = Promise.resolve({
            data: {
                name: "Death Star"
            }
        });

        axios.get.mockResolvedValueOnce(promise);

        const starshipsSection = render(<StarshipsSection starships={ships}/>);

        await act(() => promise);

        const starship = starshipsSection.getByText(/Death Star/);

        expect(axios.get).toHaveBeenCalled();
        expect(starship).toBeInTheDocument();
    });
});
