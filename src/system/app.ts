import Server from './server'
import { variables } from './config'
import { RedisClient } from '../shared/redis.client'

export default class App {
	public readonly _name: string

	constructor() {
		this._name = variables.APP_NAME
	}

	async init() {
		RedisClient.init()

		new Server(
			this._name,
			variables.PORT,
			variables.BASE_PATH_API,
			variables.ACCESS_CONTROL_ORIGIN_HEADERS
		)
	}
}
