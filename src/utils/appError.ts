import type { AppErrorOptions } from '../types/Utils/AppError';

class AppError extends Error {
	public readonly name: string;
	public readonly httpStatusCode: number;
	public readonly isOperational: boolean | undefined;
	constructor(name: string, options: AppErrorOptions) {
		const { description, httpStatusCode, isOperational } = options;
		super(description);
		Object.setPrototypeOf(this, new.target.prototype);
		this.name = name;
		this.httpStatusCode = httpStatusCode;
		this.isOperational = isOperational;
		Error.captureStackTrace(this);
	}
}

export default AppError;
