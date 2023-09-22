import { prisma } from "@/src/utils/connect"
import { NextResponse } from "next/server"

// get single page post
export const GET = async (req:Request, { params }: { params: { slug: string } } ) => {

 
    const { slug } = params
 
    try {
    
        const post = await prisma.post.update({
            where: {slug},
            data:{views:{increment:1}},
            include:{user:true}
        })
        return NextResponse.json({post},{status: 200} ) 

    } catch (error) {
        console.log(error)

        return NextResponse.json( {message:"Something went wrong!"}, {status: 500})

    }
}
