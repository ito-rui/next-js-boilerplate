export const ORIGIN_ENDPOINT = (process.env.ROOT_URL_DEV as string) || (process.env.ROOT_URL_PRO as string);
export const JWT_ENDPOINT = `${ORIGIN_ENDPOINT}/api/jwt`;
