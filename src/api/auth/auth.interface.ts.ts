import Joi from 'joi'

export class AuthInterface {
	static loginInterface() {
		return Joi.object({
			PHPSESSID: Joi.string().required(),
		})
	}
}
