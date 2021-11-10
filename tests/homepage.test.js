import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import store from "../redux/store";
import {Provider} from "react-redux";

describe('Home', () => {
    it('renders a heading', () => {
        render(
            <Provider store={store}>
                <Home />
            </Provider>);

        const heading = screen.getByRole('heading', {
            name: "Star Wars Profiles"
        })

        expect(heading).toBeInTheDocument()
    })
})
