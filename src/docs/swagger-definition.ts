import swaggerJSDoc from 'swagger-jsdoc'
import { variables } from '../system/config'

export default class SwaggerDefinition {
	public options: object = {}
	private _routes: any = {}
	private _schemas: any = {}

	constructor(routes: any) {
		routes.forEach((item: any) => {
			Object.assign(this._routes, item.swRoutes())
			Object.assign(this._schemas, item.swSchemas())
		})
	}

	setSwaggerJSDoc() {
		this.options = {
			definition: {
				openapi: '3.0.1',
				info: {
					title: variables.APP_NAME,
					version: variables.APP_VERSION,
					description: variables.APP_DESCRIPTION,
					license: {
						name: 'ISC',
					},
				},
				servers: [{ url: variables.BASE_PATH_SERVER }],
				paths: {
					...this._routes,
				},
				components: {
					schemas: {
						...this._schemas,
					},
					securitySchemes: {
						bearerAuth: {
							type: 'http',
							scheme: 'bearer',
							bearerFormat: 'JWT',
						},
					},
				},
				security: {
					bearerAuth: [],
				},
			},
			apis: ['dist/api/**/*.js', 'src/api/**/*.ts'],
		}
		return swaggerJSDoc(this.options)
	}
}
