export interface IUser {
    email: string,
    password: string,

}

export interface IUserCreated extends IUser {
    _id: string,
}

export interface IToken {
    accessToken: string,
    refreshToken: string,
}

export interface IJwtPayload {
    email: string,
    _id: string,
}
