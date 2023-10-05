export class BaseService {
	static async validate(data: object | string, scheme: any) {
		try {
			return await scheme.validateAsync(data)
		} catch (e) {
			throw new Error((e as Error).message)
		}
	}
}