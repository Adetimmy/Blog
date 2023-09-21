import { prisma } from "@/src/utils/connect"
import { NextResponse } from "next/server"

// get single page post
export const GET = async (req:Request ) => {

    const {searchParams} = new URL(req.url) 

    const slug = searchParams.get('slug') as any  
 

    try {
    
        console.log(slug)    
        return NextResponse.json({slug})

    } catch (error) {
        console.log(error)

        return NextResponse.json( {message:"Something went wrong!"}, {status: 500})

    }
}
