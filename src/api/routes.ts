import { Router } from 'express'
import DocsRoutes from '../docs/docs.routes'
import AuthRoutes from './auth/auth.routes'
import BalanceRoutes from './balance/balance.routes'

export class Routes {
	public _route: Router
	public routes: object
	constructor() {
		this._route = Router()
		this.routes = [AuthRoutes, BalanceRoutes]
		this.initRoutes()
	}
	initRoutes() {
		DocsRoutes.init(this._route, this.routes)
		AuthRoutes.init(this._route)
		BalanceRoutes.init(this._route)
		return this._route
	}
}
