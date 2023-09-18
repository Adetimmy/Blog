import NextAuth from "next-auth";
import { nextOptions } from "@/src/utils/auth";

export default NextAuth(nextOptions)