type CountBaseType = {
	type?: string;
	payload: number;
};

export type Init = {
	type?: string;
};

export type Add = CountBaseType;

export type Minus = CountBaseType;

export type AsyncAdd = CountBaseType;
