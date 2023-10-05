import { Router } from 'express'
import joiToSwagger from 'joi-to-swagger'
import { AuthInterface } from './auth.interface.ts'
import { AuthController } from './auth.controller'

export default class AuthRoutes {
	static swRoutes() {
		return {
			'/auth': {
				post: {
					summary: 'Log In endpoint',
					tags: ['auth'],
					requestBody: {
						content: {
							'application/json': {
								schema: { $ref: '#/components/schemas/AuthLogin' },
							},
						},
					},
					responses: {
						'200': {
							description: 'Successfully logged in',
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
		return {
			AuthLogin: joiToSwagger(AuthInterface.loginInterface()).swagger,
		}
	}

	static init(_route: Router) {
		_route.post(
			'/auth',
			AuthController.login,
		)
	}
}
