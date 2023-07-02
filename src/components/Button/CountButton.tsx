'use client';

import { useMemo, useCallback } from 'react';
import type { FC } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { add } from '@/store/count';
import type { DispatchType } from '@/types/Store';

const CountUpButton: FC<ButtonProps> = ({ children, ...props }) => {
	const dispatch: DispatchType = useDispatch();

	const onClickHandler = useCallback(() => {
		dispatch(add(1));
	}, [dispatch]);

	return useMemo(
		() => (
			<Button {...props} onClick={onClickHandler}>
				{children}
			</Button>
		),
		[children, onClickHandler, props]
	);
};

export default CountUpButton;
