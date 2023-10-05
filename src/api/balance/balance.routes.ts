import { Router } from 'express'
import { BalanceController } from './balance.controller'

export default class BalanceRoutes {
	static swRoutes() {
		return {
			'/balance': {
				get: {
					summary: 'Get Balance endpoint',
					tags: ['balance'],
					
					responses: {
						'200': {
							description: 'Balance response',
						},
						'401': {
							description: 'Unauthorised',
						},
					},
				},
			},
		}
	}

	static swSchemas() {
		return {}
	}

	static init(_route: Router) {
		_route.get(
			'/balance',
			BalanceController.getBalance,
		)
	}
}
