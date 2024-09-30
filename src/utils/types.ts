export interface Article {
    id:number;
    userId:number;
    title:string;
    body:string;
}

export interface createArticleDTO { //DTO: data transfer object
    title: string;
    description: string;
}

export interface updateArticleDTO { 
    title?: string;
    description?: string;
} 

export interface RegisterUserDTO {
    username: string,
    email: string,
    password: string
}

export interface LoginUserDTO {
    email: string,
    password: string
}

export type JWTPayload = {
    id: number,
    isAdmin: boolean,
    username: string
}

export interface UpdateProfileDTO {
    email?: string,
    password?: string,
    username?: string
}