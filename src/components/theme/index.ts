import { extendTheme } from '@chakra-ui/react';
import config from './config';
import breakpoints from './breakpoint';
import colors from './colors';
import components from './components';

const theme = extendTheme({
	colors,
	config,
	components,
	breakpoints,
	styles: {
		global: {
			body: {},
			div: {},
		},
	},
});

export default theme;
