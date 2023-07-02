'use client';

import type { FC } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import type { BoxProps } from '@chakra-ui/react';

const Body: FC<BoxProps> = ({ children, ...props }) => {
	return (
		<Box {...props}>
			<VStack mt='20%' spacing={5}>
				{children}
			</VStack>
		</Box>
	);
};

export default Body;
