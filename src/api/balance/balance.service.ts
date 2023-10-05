import axios from 'axios'
import { RedisClient } from '../../shared/redis.client'

export class BalanceService {
	static async getBalance() {
		try {
			const PHPSESSID = await RedisClient.redisClient.get('user')
			if (!PHPSESSID) {
				throw new Error('Unauthorized')
			}
			const response = await axios.request({
				method: 'GET',
				url: 'https://trending.bid/api/user/getprofile',
				headers: {
					Cookie: `kpixel=1; PHPSESSID=${PHPSESSID};`,
					'Cache-Control': 'max-age=0',
					Referer: 'https://trending.bid/login',
					Host: 'trending.bid',
					Origin: 'https://trending.bid',
					Connection: 'keep-alive',
				},
			})

			return {
				balance: response!.data.data.balance,
				currency: response!.data.data.currency,
			}
		} catch (error) {
				throw new Error('Unauthorized')
		}
	}
}
