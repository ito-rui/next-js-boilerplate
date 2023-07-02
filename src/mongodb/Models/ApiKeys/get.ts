import ApiKeysModel from './Model';

const getApikey = async (key: string) => {
	const doc = await ApiKeysModel.findOne({ key });
	return doc;
};

export const getApiKeyWithApiKeyAndIp = async (key: string, ip: string) => {
	const doc = await ApiKeysModel.findOne({ key, ip });
	return doc;
};

export default getApikey;
