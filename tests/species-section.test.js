import {act, render} from "@testing-library/react";
import SpeciesSection from "../components/species-section";
import axios from "axios";

jest.mock("axios");

describe('SpeciesSection', () => {
    it('renders the section', async () => {
        const species = [3];
        const promise = Promise.resolve({
            data: {
                name: 'Wookie',
                classification: 'mammal',
                designation: 'sentient',
                language: 'Shyriiwook'
            }
        });

        axios.get.mockResolvedValueOnce(promise);

        const speciesSection = render(<SpeciesSection speciesIndex={species}/>);

        await act(() => promise);

        const heading = speciesSection.getByText(/Species/);

        expect(heading).toBeInTheDocument();
    });

    it('populates fields with "Not Listed" when no species information is available', async () => {
        const species = 3;
        const promise = Promise.resolve();

        axios.get.mockResolvedValueOnce(promise);

        const speciesSection = render(<SpeciesSection speciesIndex={species}/>);

        await act(() => promise);

        const notListed = speciesSection.getAllByText(/Listed/);

        expect(notListed.length).toBe(4);
    });

    it('populates fields with species information when available', async () => {
        const species = 3;
        const promise = Promise.resolve({
            data: {
                name: 'Wookie',
                classification: 'mammal',
                designation: 'sentient',
                language: 'Shyriiwook'
            }
        });

        axios.get.mockResolvedValueOnce(promise);

        const speciesSection = render(<SpeciesSection speciesIndex={species}/>);

        await act(() => promise);

        const speciesName = speciesSection.getByText(/Wookie/);
        const speciesClassification = speciesSection.getByText(/mammal/);
        const speciesDesignation = speciesSection.getByText(/sentient/);
        const speciesLanguage = speciesSection.getByText(/Shyriiwook/);

        expect(axios.get).toHaveBeenCalled();
        expect(speciesName).toBeInTheDocument();
        expect(speciesClassification).toBeInTheDocument();
        expect(speciesDesignation).toBeInTheDocument();
        expect(speciesLanguage).toBeInTheDocument();
    });
});
