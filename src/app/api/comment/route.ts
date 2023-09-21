import { prisma } from "@/src/utils/connect"
import { NextResponse } from "next/server"

// get single page post
export const GET = async (req:Request ) => {

 
    const {searchParams} = new URL(req.url) 

    const postSlug = searchParams.get('postSlug') 
 
    try {
    
        const post = await prisma.comment.findMany({
            where: {
                ...(postSlug && { postSlug }),
            },
            include:{user:true}
        })
        return NextResponse.json({post},{status: 200} ) 

    } catch (error) {
        console.log(error)

        return NextResponse.json( {message:"Something went wrong!"}, {status: 500})

    }
}
