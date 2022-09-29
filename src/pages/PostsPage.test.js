import { render, screen, waitFor } from '@testing-library/react';
import PostsPage from './PostsPage'

test('Render halaman Post', async () => {
    render(<PostsPage />);

    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent('Back To Home');

    const posts = await waitFor(() => {
        return screen.findByText('qui est esse')
    }, {timeout: 5000})
    expect(posts).toBeInTheDocument();
})