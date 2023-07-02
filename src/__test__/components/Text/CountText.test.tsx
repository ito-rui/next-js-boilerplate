import { render, screen } from '../../jest.setup';
import CountText from '../../../components/Text/CountText';
import '@testing-library/jest-dom';

test('renders count text with correct value', () => {
	render(<CountText />);

	const count = 0;
	const expectedText = `Count: ${count}`;
	const countTextElement = screen.getByText(expectedText, { selector: 'p' });

	expect(countTextElement).toBeInTheDocument();
});
