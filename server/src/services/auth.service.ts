import { hashSync, compareSync } from 'bcrypt'

import tokenService from './token.service'
import authModel from '@models/auth.model'
import productUserModel from '@models/product.user.model'

import { IJwtPayload, IUser, IUserCreated } from '@interfaces/auth.interfaces'
import myError from '@utils/myError'

class AuthService {
    async registration(user: IUser) {
        try {
            const userConfirm = await authModel.findOne<IUserCreated>({ email: user.email })
            myError(!!userConfirm, 'Такой пользователь уже есть')

            const hashPassword = hashSync(user.password, 7)
            const createdUser = await authModel.create<IUserCreated>({ ...user, password: hashPassword })
            const tokens = tokenService.create(String(createdUser._id), createdUser.email)
            await tokenService.save(String(createdUser._id), tokens.refreshToken)

            await productUserModel.create({ userId: String(createdUser._id) })

            return {
                user: createdUser,
                ...tokens
            }
        } catch (e) {
            throw e
        }
    }

    async login(user: IUser) {
        try {
            const userConfirm = await authModel.findOne<IUserCreated>({ email: user.email })
            myError(!userConfirm, 'Пользователь не зарегистрирован')
            const confirmPassword = compareSync(user.password, userConfirm?.password as string)
            myError(!confirmPassword, 'Неправильный пароль')

            const tokens = tokenService.create(user.email, userConfirm?._id as string)
            await tokenService.save(String(userConfirm?._id), tokens.refreshToken)
            return {
                user: userConfirm,
                ...tokens
            }
        } catch (e) {
            throw e
        }
    }

    async logout(refreshToken: string) {
        try {
            myError(!refreshToken, 'Нет refreshToken')
            await tokenService.delete(refreshToken)
        } catch (e) {
            throw e
        }
    }

    async check(refreshToken: string) {
        try {
            myError(!refreshToken, 'Нет refreshToken')
            const jwtPayload: IJwtPayload = tokenService.validRefreshToken(refreshToken)

            const userConfirm = await authModel.findById<IUserCreated>(jwtPayload.id)
            myError(!userConfirm, 'Пользователь не зарегистрирован')
            return userConfirm
        } catch (e) {
            throw e
        }
    }

    async refresh(refreshToken: string) {
        try {
            const user = await this.check(refreshToken)
            await tokenService.delete(refreshToken)
            const tokens = tokenService.create(user?.email as string, String(user?._id))
            await tokenService.save(String(user?._id), tokens.refreshToken)
            return {
                user,
                ...tokens
            }
        } catch (e) {
            throw e
        }
    }
}

export default new AuthService()
