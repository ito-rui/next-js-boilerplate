import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// import connectMongodb from '@/mongodb/connect';
// import disconnectMongodb from '@/mongodb//disconnect';
import getApikey from '@/mongodb/Models/ApiKeys/get';
import AppError from '@/utils/appError';
import errorHandler from '@/utils/handler';
import sha256HashSync from '@/utils/crypto';

export async function GET(request: NextRequest) {
	// await connectMongodb('dbName1');
	try {
		const apiKey = request.headers.get('authorization');
		const permission = request.headers.get('permission');
		if (!apiKey) {
			throw new AppError('Not Authorized', {
				httpStatusCode: 401,
				description: 'Authorized is not set in Header',
				isOperational: true,
			});
		}
		const newApiKey = sha256HashSync(apiKey);
		const isApikey = await getApikey(newApiKey);
		if (!isApikey) {
			throw new AppError('Authentication Failure', {
				httpStatusCode: 401,
				description: 'Unauthorized Apikey is set',
				isOperational: false,
			});
		}
		const isPermission = Number(permission) <= isApikey.permission;
		if (!isPermission) {
			throw new AppError('Insufficient Authority', {
				httpStatusCode: 403,
				description: 'This API key has insufficient privileges',
				isOperational: false,
			});
		}
		return new NextResponse(null, { status: 204 });
	} catch (e: unknown) {
		const { body, status, statusText } = errorHandler(e);
		return NextResponse.json(body, { status, statusText });
	} finally {
		// await disconnectMongodb();
	}
}
