import { getAuthSession } from "@/src/utils/auth"
import { prisma } from "@/src/utils/connect"
import { NextResponse } from "next/server"

// get single page post
export const GET = async (req:Request ) => {

 
    const {searchParams} = new URL(req.url) 

    const postSlug = searchParams.get('postSlug') 
 
    try {
    
        const comments = await prisma.comment.findMany({
            where: {
                ...(postSlug && { postSlug }),
            },
            include:{user:true}
        })
        return NextResponse.json({comments},{status: 200} ) 

    } catch (error) {
        console.log(error)

        return NextResponse.json( {message:"Something went wrong!"}, {status: 500})

    }
}

//create a comment 
export const POST = async (req:Request ) => {



 const session  = await getAuthSession()  
 
 if(!session){
    return NextResponse.json( {message:"not authenticated!"}, {status: 401})
 }

 
    try {
        const body = await req.json()
        const comment = await prisma.comment.create({
            data: {...body, userEmail: session.user?.email} as any 
        })
        
        return NextResponse.json({comment},{status: 200} ) 

    } catch (error) {
        console.log(error)

        return NextResponse.json( {message:"Something went wrong!"}, {status: 500})

    }
}