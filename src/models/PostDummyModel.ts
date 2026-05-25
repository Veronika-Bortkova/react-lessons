export interface IPostDummy {
    id: number,
    title: string,
    body: string,
    tags: string[],
    reactions: IReactions
    views: number,
    userId: number
}

interface IReactions{
    likes: number,
    dislikes: number
}

export interface IObjPostDummy{
    posts: IPostDummy[];
    total: number;
    skip:number;
    limit:number
}