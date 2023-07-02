import { NextRequest, NextResponse } from 'next/server';
import errorHandler from './utils/handler';

export const config = {
	matcher: ['/((?!api).*)'],
};

export async function middleware(request: NextRequest) {
	try {
		return;
	} catch (e) {
		const { body, status, statusText } = errorHandler(e);
		return NextResponse.json(body, { status, statusText });
	}
}
