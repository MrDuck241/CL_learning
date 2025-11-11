import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import "@testing-library/jest-dom"
import Hello from './Hello';
import "@testing-library/jest-dom/vitest"
import React from "react";

describe('Hello component', () => {
    it('renders greeting with name', () => {
        render(<Hello name="Alice" />);
        expect(screen.getByText('Hello, Alice!')).toBeInTheDocument();
    });
});
