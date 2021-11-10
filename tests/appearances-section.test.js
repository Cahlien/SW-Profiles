import {act, render} from "@testing-library/react";
import FilmAppearances from "../components/appearances-section";
import axios from "axios";

jest.mock("axios");

describe('FilmAppearances', () => {
    it('renders the section', async () => {
        const films = [1];
        const promise = Promise.resolve({
            data: {
                title: "A New Hope"
            }
        });

        axios.get.mockResolvedValueOnce(promise);

        const filmAppearances = render(<FilmAppearances films={films}/>);

        await act(() => promise);

        const heading = filmAppearances.getByText(/Appearances/);

        expect(axios.get).toHaveBeenCalled();
        expect(heading).toBeInTheDocument();
    });

    it('populates fields with data from the provided starships', async () => {
        const films = [1];
        const promise = Promise.resolve({
            data: {
                title: "A New Hope"
            }
        });

        axios.get.mockResolvedValueOnce(promise);

        const filmAppearances = render(<FilmAppearances films={films}/>);

        await act(() => promise);

        const filmTitle = filmAppearances.getByText(/Hope/);

        expect(axios.get).toHaveBeenCalled();
        expect(filmTitle).toBeInTheDocument();
    });
});
