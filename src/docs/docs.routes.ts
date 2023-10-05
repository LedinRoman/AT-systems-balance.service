import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import SwaggerDefinition from './swagger-definition'

export default class DocsRoutes {
	static init(_route: Router, routes: object) {
		const swaggerSpec = new SwaggerDefinition(routes).setSwaggerJSDoc()
		_route.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
	}
}
