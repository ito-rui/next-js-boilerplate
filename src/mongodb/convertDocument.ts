import { Document } from 'mongoose';
import type { ConvertDocumentReturnType } from '../types/Mogodb/ConvertDocument';

const convertDocment = <T>(document: Document<T>): ConvertDocumentReturnType<T> => {
	const { _id, ...rest } = document.toObject();
	return { id: String(_id), ...rest } as ConvertDocumentReturnType<T>;
};

export default convertDocment;
