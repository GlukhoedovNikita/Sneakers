import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

import { SERVER_URL } from '@constants/index'
import { IAuthResponse } from '@store/slices/auth/auth.types'

const api = axios.create({
    withCredentials: true,
    baseURL: SERVER_URL
})

const apiRefresh = axios.create({
    withCredentials: true,
    baseURL: SERVER_URL
})

apiRefresh.interceptors.request.use((config: AxiosRequestConfig) => {
    if (config && config.headers) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    }
    return config
})

apiRefresh.interceptors.response.use((config: AxiosResponse) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        try {
            const response = await axios.get<IAuthResponse>(
                `${SERVER_URL}/auth/refresh`,
                { withCredentials: true }
            )
            localStorage.setItem('accessToken', response.data.accessToken)
            return api.request(originalRequest)
        } catch (e) {
            throw e
        }
    }
    throw error
})

class AuthSevice {
    async registration(email: string, password: string) {
        try {
            const response = await api.post<IAuthResponse>('/auth/registration', { email, password })
            localStorage.setItem('accessToken', response.data.accessToken)
            return response.data.user
        } catch (e) {
            throw e
        }
    }

    async login(email: string, password: string) {
        try {
            const response = await api.post<IAuthResponse>('/auth/login', { email, password })
            localStorage.setItem('accessToken', response.data.accessToken)
            return response.data.user
        } catch (e) {
            throw e
        }
    }

    async logout() {
        try {
            await api.get('/auth/logout')
            localStorage.removeItem('accessToken')
        } catch (e) {
            throw e
        }
    }

    async refresh() {
        try {
            const response = await apiRefresh.get<IAuthResponse>('auth/refresh')
            localStorage.setItem('accessToken', response.data.accessToken)
            return response.data.user
        } catch (e) {
            throw e
        }
    }
}

export default new AuthSevice()
