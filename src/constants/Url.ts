const baseURL = "https://jsonplaceholder.typicode.com";
export const urls = {
    users: {
        allUsersL: baseURL + "/users",
        byId: (id: number) => {
            return baseURL + "/" + id;
        }
    },
    posts:{
        allPosts: baseURL+"/posts",
        byId: (id:number) => baseURL + "/posts/" + id,
        userPostById: (id:number) => baseURL + "/posts?userId=" + id
        }

    }

