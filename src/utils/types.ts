import { Article, Comment, User } from "@prisma/client";

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

export interface CreateCommentDTO {
    text: string,
    articleId: number,
}

export interface UpdateCommentDTO {
    text: string,
}

export interface NavLink {
    name: string;
    path: string;
}

export type CommentWithUser = Comment & { user: User }

export type SingleArticleId = Article & { comments: CommentWithUser[] }

export interface AxiosError {
    response?: {
      data?: {
        message?: string 
      } 
    } 
}

type CommentWithArticle = Comment & { article: Article }
export type ProfileType = User & { comments: CommentWithArticle[] }