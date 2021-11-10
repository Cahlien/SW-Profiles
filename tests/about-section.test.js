import {render} from '@testing-library/react';
import AboutSection from "../components/about-section";


describe('AboutSection', () => {
    it('renders the section', async () => {
        const aboutSection = render(<AboutSection/>);

        const heading = aboutSection.getByText(/About/);

        expect(heading).toBeInTheDocument();
    });

    it('populates fields with data from the provided character', () => {
        const character = {
            name: "Anakin Skywalker",
            height: "172",
            mass: "77",
            hair_color: "blond",
            birth_year: "19BBY"
        };

        const aboutSection = render(<AboutSection character={character}/>)

        const height = aboutSection.getByText(/172/);
        const mass = aboutSection.getByText(/77/);
        const hairColor = aboutSection.getByText(/blond/);
        const dob = aboutSection.getByText(/19BBY/);

        expect(height).toBeInTheDocument();
        expect(mass).toBeInTheDocument();
        expect(hairColor).toBeInTheDocument();
        expect(dob).toBeInTheDocument();
    });
})
