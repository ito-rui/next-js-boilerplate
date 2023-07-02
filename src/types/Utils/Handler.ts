import type { NextResponse } from 'next/server';

export type ErrorTitle = 'AppError' | 'Error' | 'UnknownError';

export type BodyProps = {
	title: ErrorTitle;
	name: string;
	message: string;
	httpStatusCode?: number;
	stack?: string;
	isOperational?: boolean;
	code?: number;
};

export type ErrorHandlerReturnType = {
	body: BodyProps;
	status: number;
	statusText?: string;
};

export type ErrorHandler = NextResponse<BodyProps>;
