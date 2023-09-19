import NextAuth from "next-auth";
import { nextOptions } from "@/src/utils/auth";


const handler = NextAuth(nextOptions)  

export {handler as GET, handler as POST }