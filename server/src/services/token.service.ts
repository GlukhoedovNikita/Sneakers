import jsonwebtoken from 'jsonwebtoken'

import tokenModel from '@models/token.model'
import { IJwtPayload } from 'interfaces/auth.interfaces'

class TokenService {
    create(email: string, id: string) {
        const accessToken = jsonwebtoken.sign({ email, id }, process.env.SECRET_ACCESS_TOKEN as string, { expiresIn: '1d' })
        const refreshToken = jsonwebtoken.sign({ email, id }, process.env.SECRET_REFRESH_TOKEN as string, { expiresIn: '30d' })
        return {
            accessToken,
            refreshToken
        }
    }

    async save(userId: string, refreshToken: string) {
        await tokenModel.create({ userId, refreshToken })
    }

    async delete(refreshToken: string) {
        await tokenModel.findOneAndDelete({ refreshToken })
    }

    validRefreshToken(refreshToken: string) {
        const jwtPayload = jsonwebtoken.verify(refreshToken, process.env.SECRET_REFRESH_TOKEN as string)
        return jwtPayload as IJwtPayload
    }
}

export default new TokenService()
