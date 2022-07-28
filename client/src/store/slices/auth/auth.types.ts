export interface IUser {
    password: string,
    email: string,
    id: string,
}

export interface IUserLogin {
    email: string,
    password: string,

}

export interface IUserRegistration extends IUserLogin {
}

export interface IAuthState {
    loading: boolean,
    error: null | string,
    user: IUser,
    isAuth: boolean,
}

export interface IAuthResponse {
    accessToken: string,
    refreshToken: string,
    user: IUser,
}
