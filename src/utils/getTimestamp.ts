import moment from 'moment';
import type { unitOfTime } from 'moment';

export const getTimestamp = () => {
	moment.locale('ja');
	return moment().unix();
};

export const getStartOfTimestamp = (uint: unitOfTime.StartOf) => {
	moment.locale('ja');
	return moment().startOf(uint).unix();
};

export const getEndOfTimestamp = (uint: unitOfTime.StartOf) => {
	moment.locale('ja');
	return moment().endOf(uint).unix();
};

export const getYearLaterTimestamp = (timestamp: number, year = 0) => {
	moment.locale('ja');
	return timestamp + 60 * 60 * 24 * 365 * year;
};

export const getDayLaterTimestamp = (timestamp: number, day = 0) => {
	moment.locale('ja');
	return timestamp + 60 * 60 * 24 * day;
};
