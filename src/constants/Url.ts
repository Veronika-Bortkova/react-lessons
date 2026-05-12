const baseURL = "https://jsonplaceholder.typicode.com";
export const urls = {
    users: {
        allUsersL: baseURL + "/users",
        byId: (id: number) => {
            return baseURL + "/" + id;
        }
    },
    posts:{

    }
}
