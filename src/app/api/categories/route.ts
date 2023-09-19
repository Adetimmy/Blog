
import { prisma } from "@/src/utils/connect"
import { NextResponse } from "next/server"


//mind you; you'll need a stable network to connect or will spring up error 
export const GET = async () => {

    // ts does not recognise all the models createdd except the default ones are specify in the prismaClinet 
    try {
        //@ts-expect-error
        const categories = await prisma.category.findMany()

        return NextResponse.json(categories, {status:200})

    } catch (error) {
        console.log(error)

        return NextResponse.json( {message:"Something went wrong!"}, {status: 500})

    }
}
