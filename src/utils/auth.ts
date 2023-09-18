
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"



interface Next{
clientId:string,
clientSecret:string

}


export const nextOptions = {
    providers: [
    
        GoogleProvider({
            clientId:'',
            clientSecret:'',
        }),

        GithubProvider({
            clientId: '',
            clientSecret: '',
        }),

        FacebookProvider({
            clientId: '',
            clientSecret:'', 
        })
    ],
}



