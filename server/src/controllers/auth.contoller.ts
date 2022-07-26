import { Request, Response } from 'express'

import authService from '@services/auth.service'

class AuthController {
    async registration(req: Request, res: Response) {
        try {
            const createdUser = await authService.registration(req.body)
            res.cookie('refreshToken', createdUser.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            res.json(createdUser)
        } catch (e) {
            res.status(401).json({ message: `Auth Controller Error - ${e}` })
        }
    }

    async login(req: Request, res: Response) {
        try {
            const user = await authService.login(req.body)
            res.cookie('refreshToken', user.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            res.json(user)
        } catch (e) {
            res.status(401).json({ message: `Auth Controller Error - ${e}` })
        }
    }

    async logout(req: Request, res: Response) {
        try {
            const { refreshToken } = req.cookies
            await authService.logout(refreshToken as string)
            res.clearCookie('refreshToken')
            res.json('Success')
        } catch (e) {
            res.status(401).json({ message: `Auth Controller Error - ${e}` })
        }
    }

    async refresh(req: Request, res: Response) {
        try {
            const { refreshToken } = req.cookies
            const user = await authService.refresh(refreshToken as string)
            res.cookie('refreshToken', user.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            res.json(user)
        } catch (e) {
            res.status(401).json({ message: `Auth Controller Error - ${e}` })
        }
    }
}

export default new AuthController()
