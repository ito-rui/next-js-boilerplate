import { connect, set } from 'mongoose';
import type { DbName } from '@/types/Mogodb/Connect';

const connectMongodb = async (dbName: DbName) => {
	set('strictQuery', true);
	const MONGODB_URI = process.env.MONGODB_URI as string;
	await connect(MONGODB_URI, { dbName, retryWrites: true, w: 'majority' });
};

export default connectMongodb;
