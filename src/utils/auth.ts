
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./connect"
// import { PrismaClient } from "@prisma/client"



const googleID = process.env.GOOGLE_ID as string
const googleSecret = process.env.GOOGLE_SECRET as string
const githubID = process.env.GITHUB_ID as string
const githubSecret =  process.env.GITHUB_SECRET as string


// const prisma = new PrismaClient()


export const nextOptions = {
    // a Prisma function from prima/client can still do but wnat to globalize it that's y connet.ts is created t stop importing that again and again whenever a method what to be perform 
   
    adapter: PrismaAdapter(prisma),
    providers: [
    
        GoogleProvider({
            clientId: googleID,
            clientSecret: googleSecret,
        }),

        GithubProvider({
            clientId: githubID,
            clientSecret: githubSecret,
        }),

        FacebookProvider({
            clientId: '',
            clientSecret:'', 
        })
    ],
}



