import { models, model, Schema } from 'mongoose';
import type { Model } from 'mongoose';
import type { ApiKeysModelType } from '../../../types/Mogodb/ApiKeys/Model';

export const ApiKeys = new Schema({
	name: {
		type: String,
		require: true,
	},
	key: {
		type: String,
		require: true,
	},
	ip: {
		type: String,
		require: true,
	},
	permission: {
		type: Number,
		require: true,
	},
});

type ApiKeysModel = Model<ApiKeysModelType>;

export default (models?.apiKey as ApiKeysModel) || model<ApiKeysModelType>('apiKey', ApiKeys);
