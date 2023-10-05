// @ts-ignore
import * as packageJson from '../../package.json'

export const variables = {
	APP_NAME: packageJson.name,
	APP_DESCRIPTION: packageJson.description,
	APP_VERSION: packageJson.version,
	BASE_PATH_SERVER: process.env.BASE_PATH_SERVER ?? '/',
	BASE_PATH_API: process.env.BASE_PATH_API ?? '',
	ACCESS_CONTROL_ORIGIN_HEADERS:  process.env.ACCESS_CONTROL_ORIGIN_HEADERS ?? '*',
	PORT: process.env.PORT ? +process.env.PORT : 3000,
	NODE_ENV: process.env.NODE_ENV ?? 'development',
}
