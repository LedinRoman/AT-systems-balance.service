import { Response } from 'express'
import { IJsObject } from '../../models/shared.models'
import { AuthService } from './auth.service'

export class AuthController {
	static async login(req: IJsObject, res: Response) {
		try {
			const response = await AuthService.login(req.body)
			res.send(response).status(200)
		} catch (e) {
			res.send({ status: 401, message: (e as { message: string }).message }).status(401)
		}
	}
}
