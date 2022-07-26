import { Router } from 'express'

import authContoller from '@controllers/auth.contoller'

const authRouter = Router()

authRouter.post('/registration', authContoller.registration)
authRouter.post('/login', authContoller.login)
authRouter.get('/logout', authContoller.logout)
authRouter.get('/refresh', authContoller.refresh)

export default authRouter
