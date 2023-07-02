import { render, screen } from '../jest.setup';
import Home from '../../app/page';
import '@testing-library/jest-dom';

describe('Home', () => {
	it('renders a heading', () => {
		render(<Home />);
	});
	it('', () => {
		render(<Home />);
		const count = 0;
		const text = `Count: ${count}`;
		const countTextElement = screen.getByText(text, { selector: 'p' });
		expect(countTextElement).toBeInTheDocument();
	});
});
