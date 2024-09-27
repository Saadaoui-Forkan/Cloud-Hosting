export interface Article {
    id:number;
    userId:number;
    title:string;
    body:string;
}

export interface createArticleDTO { //DTO: data transfer object
    title: string;
    body: string;
}