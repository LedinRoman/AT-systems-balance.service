import { Response } from 'express'
import { IJsObject } from '../../models/shared.models'
import { BalanceService } from './balance.service'

export class BalanceController {
	static async getBalance(req: IJsObject, res: Response) {
		try {
			const response = await BalanceService.getBalance()
			res.send({ status: true, response }).status(200)
		} catch (e) {
			res.send({ status: 401, message: (e as { message: string }).message}).status(401)
		}
	}
}
