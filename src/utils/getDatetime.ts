import moment from 'moment';
import type { Format } from '../types/Utils/GetDatetime';

const getDatetime = (format: Format = 'YYYY年MM月DD日（ddd）HH時mm分ss秒') => {
	moment.locale('ja');
	return moment().format(format);
};

export const getDatetimeWithTimestamp = (timestamp: number, format: Format = 'YYYY年MM月DD日（ddd）HH時mm分ss秒') => {
	moment.locale('ja');
	return moment.unix(timestamp).format(format);
};

export const getDateWithOnlyNumber = () => {
	moment.locale('ja');
	return moment().format('YYYYMMDD');
};

export default getDatetime;
