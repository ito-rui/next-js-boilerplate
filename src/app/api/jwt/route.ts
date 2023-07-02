import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import connectMongodb from '@/mongodb/connect';
import disconnectMongodb from '@/mongodb//disconnect';
import getApikey from '@/mongodb/Models/ApiKeys/get';
import AppError from '@/utils/appError';
import errorHandler from '@/utils/handler';

export async function GET(request: NextRequest) {
	await connectMongodb();
	try {
		const apiKey = request.headers.get('authorization');
		const permission = request.headers.get('permission');
		if (!apiKey)
			throw new AppError('Not Authorized', {
				httpStatusCode: 401,
				description: 'Authorized is not set in Header',
				isOperational: true,
			});
		const isApikey = await getApikey(apiKey);
		if (!isApikey)
			throw new AppError('Authentication Failure', {
				httpStatusCode: 401,
				description: 'Unauthorized Apikey is set',
				isOperational: false,
			});
		const isPermission = Number(permission) <= isApikey.permission;
		if (!isPermission) {
			throw new AppError('Insufficient Authority', {
				httpStatusCode: 403,
				description: 'This API key has insufficient privileges',
				isOperational: false,
			});
		}
		return NextResponse.json(apiKey, { status: 200, statusText: `${isApikey.name}s APIKey` });
	} catch (e: unknown) {
		const { body, status, statusText } = errorHandler(e);
		return NextResponse.json(body, { status, statusText });
	} finally {
		await disconnectMongodb();
	}
}
