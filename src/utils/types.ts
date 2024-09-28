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