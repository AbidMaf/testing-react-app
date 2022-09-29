import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from './HomePage'

test('Render halaman home', () => {
    render(<HomePage />);

    const title = screen.getByText(/Home Page/i);
    expect(title).toBeInTheDocument();

    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent('Post');
})