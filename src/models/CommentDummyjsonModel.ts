export interface ICommentsDummyjson{
    comments: ICommentDummyjson[];
    total: number;
    skip: number;
    limit: number
}

export interface ICommentDummyjson{

        id: number;
        body: string;
        postId: number;
        likes: number;
        user: IUser
}

interface IUser{
    id: number,
    username: string,
    fullName: string
}