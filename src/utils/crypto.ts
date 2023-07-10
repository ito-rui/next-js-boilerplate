import { createHash } from 'crypto';
import { Readable } from 'stream';

const sha256HashSync = (data: string) => {
	const hash = createHash('sha256');
	const newHash = hash.update(data).digest('hex');
	return newHash;
};

export const sha256HashAsync = async (data: string): Promise<string> => {
	return await new Promise((resolve, reject) => {
		const hash = createHash('sha256');
		hash.once('finish', () => {
			const hashedData = hash.read().toString('hex');
			resolve(hashedData);
		});
		const newData = Readable.from(data);
		newData.on('error', (err) => reject(err));
		newData.pipe(hash);
	});
};

export default sha256HashSync;
