import { disconnect } from 'mongoose';

const disconnectMongodb = async () => {
	await disconnect();
};

export default disconnectMongodb;
