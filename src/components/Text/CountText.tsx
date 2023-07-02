'use client';

import { useMemo } from 'react';
import type { FC } from 'react';
import { Text } from '@chakra-ui/react';
import type { TextProps } from '@chakra-ui/react';
import { useSelector } from '@/store';

const CountText: FC<TextProps> = ({ ...props }) => {
	const count = useSelector((state) => state.countReducer.countState.count);
	return useMemo(() => <Text {...props}>Count: {count}</Text>, [count, props]);
};

export default CountText;
