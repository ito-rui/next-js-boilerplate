import { render } from '@testing-library/react';
import ReduxProviders from '@/components/ReduxProvider';
import ChakraProviders from '@/components/ChakraProvider';

Object.defineProperty(window, 'matchMedia', {
	value: () => ({
		matches: false,
		addListener: () => {},
		removeListener: () => {},
	}),
});

const customRender = (ui, options) =>
	render(
		<ReduxProviders>
			<ChakraProviders>{ui}</ChakraProviders>
		</ReduxProviders>,
		options
	);

export * from '@testing-library/react';

export { customRender as render };
