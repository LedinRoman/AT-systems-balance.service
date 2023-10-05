import axios, { Method } from 'axios'
import { unserialize } from 'php-serialize'
import { BaseService } from '../../system/base/base.service'
import { AuthInterface } from './auth.interface.ts'
import { ILoginRequest } from '../../models/auth.models'
import { RedisClient } from '../../shared/redis.client'

export class AuthService {
	static async login(body: ILoginRequest) {
		await BaseService.validate(body, AuthInterface.loginInterface())

		const config = {
			method: 'POST' as Method,
			maxBodyLength: Infinity,
			url: 'https://trending.bid/login',
			headers: {
				Cookie: `kpixel=1; PHPSESSID=${body.PHPSESSID}`,
				'Cache-Control': 'max-age=0',
				Referer: 'https://trending.bid/login',
				Host: 'trending.bid',
				Origin: 'https://trending.bid',
				'Content-Type': 'application/x-www-form-urlencoded',
				Connection: 'keep-alive',
			},
		}

		const response = await axios.request(config)

		if (response.headers['set-cookie']?.[0]) {
			const jsonObj = response.headers['set-cookie'][0].slice(
				5,
				response.headers['set-cookie'][0].indexOf(';')
			)
			const decoded = decodeURIComponent(jsonObj)
			const parsedObject = unserialize(decoded)

			if (!parsedObject.user_id) {
				throw new Error('Invalid PHPSESSID')
			}
			await RedisClient.redisClient.set('user', body.PHPSESSID)
			return 'OK'
		}
		throw new Error('Invalid PHPSESSID')
	}
}
