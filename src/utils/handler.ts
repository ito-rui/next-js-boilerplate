import AppError from './appError';
import { ErrorHandlerReturnType } from '../types/Utils/Handler';

const errorHandler = (error: unknown) => {
	if (error instanceof AppError) {
		return appErrorHandler(error);
	}
	if (error instanceof Error) {
		return defaultErrorHandler(error);
	}
	return unknownErrorHandler();
};

const appErrorHandler = (error: AppError): ErrorHandlerReturnType => {
	const { name, message, httpStatusCode, isOperational } = error;
	return {
		body: { title: 'AppError', name, message, httpStatusCode, isOperational },
		status: httpStatusCode,
		statusText: message,
	};
};

const defaultErrorHandler = (error: Error): ErrorHandlerReturnType => {
	const { name, message, stack } = error;
	return {
		body: { title: 'Error', name, message, httpStatusCode: 500, stack },
		status: 500,
		statusText: message,
	};
};

const unknownErrorHandler = (): ErrorHandlerReturnType => {
	return {
		body: {
			title: 'UnknownError',
			name: 'Unhandled Errors',
			message: 'This error is not handled and the cause is unknown.',
			httpStatusCode: 500,
		},
		status: 500,
		statusText: 'This error is not handled and the cause is unknown.',
	};
};

export default errorHandler;
