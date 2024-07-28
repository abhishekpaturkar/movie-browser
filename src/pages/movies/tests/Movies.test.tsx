import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import Movies from "../Movies.tsx";

describe("Home component", () => {
    it('renders without crashing', () => {
        render(
            <BrowserRouter>
                <Movies />
            </BrowserRouter>
        );
        expect(screen.getByTestId('movies-element')).toBeInTheDocument();
    });

    it('contains the expected content', () => {
        render(
            <BrowserRouter>
                <Movies />
            </BrowserRouter>
        );
        expect(screen.getByTestId('movies-h1-element')).toBeInTheDocument();
    });
});