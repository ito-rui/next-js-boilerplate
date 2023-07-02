import { connect, set } from 'mongoose';

const connectMongodb = async () => {
	set('strictQuery', true);
	const MONGODB_URI = process.env.MONGODB_URI as string;
	await connect(MONGODB_URI);
};

export default connectMongodb;
