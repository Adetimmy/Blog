
import { getAuthSession } from "@/src/utils/auth"
import { prisma } from "@/src/utils/connect"
import { NextResponse } from "next/server"


// const newPost:any = [
//     {
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, laborum commodi. Ipsum repellat blanditiis esse, omnis expedita dolorum culpa praesentium.",
//     catSlug:"fashion",
//     userEmail: 'ogunleademola@gmail.com',
//     slug: "fashion-post-1", // Specify the slug of the category to connect.
//     },
//     {
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, laborum commodi. Ipsum repellat blanditiis esse, omnis expedita dolorum culpa praesentium.",
//     catSlug:"culture",
//     userEmail: 'ogunleademola@gmail.com',
//     slug: "culture-post-2"  
//     },
//     {
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, laborum commodi. Ipsum repellat blanditiis esse, omnis expedita dolorum culpa praesentium.",
//     catSlug:"food",
//     userEmail: 'ogunleademola@gmail.com',
//     slug:"food-post-3",  
//     },
//     {
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, laborum commodi. Ipsum repellat blanditiis esse, omnis expedita dolorum culpa praesentium.",
//     catSlug:"coding",
//     userEmail: 'ogunleademola@gmail.com',
//     slug:"coding-post-4",  
//     },
//     {
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, laborum commodi. Ipsum repellat blanditiis esse, omnis expedita dolorum culpa praesentium.",
//     catSlug:"style",
//     userEmail: 'ogunleademola@gmail.com',
//     slug:"style-post-5",  
//     },    
//     {
//     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//     desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, laborum commodi. Ipsum repellat blanditiis esse, omnis expedita dolorum culpa praesentium.",
//     catSlug:"travel",
//     userEmail: 'ogunleademola@gmail.com',
//     slug:"travel-post-6",  
//     },  
     
// ]



// const slugDelete = ["fashion", "travel", "food"]

//mind you; you'll need a stable network to connect or will spring up error 
export const GET = async (req:Request) => {

    const {searchParams} = new URL(req.url) 

    const page = searchParams.get('page') as any 
    const cat = searchParams.get('cat') as any 
    // number of post
    const  post_per_page = 2



    // ts does not recognise all the models createdd except the default ones are specify in the prismaClinet 
    try {
        // const createdPost = await prisma.post.createMany({
        //     data: newPost,
        //   })

const query = {
    take: post_per_page, 
    skip: post_per_page * (page - 1), 
    where:{
        ...(cat && {catSlug:cat}),
}
}

        const [posts, count] = await prisma.$transaction([prisma.post.findMany(query), prisma.post.count({where:query.where})])


        
        // const deleteResponse = await prisma.post.deleteMany({
        //     where: {
        //       slug: {
        //         in: slugDelete, // Use the "in" operator to match multiple values
        //       },
        //     },
        //   });
      
  
        return NextResponse.json({posts, count}, {status:200})

    } catch (error) {
        console.log(error)

        return NextResponse.json( {message:"Something went wrong!"}, {status: 500})

    }
}


//create a post
export const POST = async (req:Request ) => {



    const session  = await getAuthSession()  
    
    if(!session){
       return NextResponse.json( {message:"not authenticated!"}, {status: 401})
    }
   
    
       try {
           const body = await req.json()
           const post = await prisma.post.create({
               data: {...body, userEmail: session.user?.email} as any 
           })
           
           return NextResponse.json({post},{status: 200} ) 
   
       } catch (error) {
           console.log(error)
   
           return NextResponse.json( {message:"Something went wrong!"}, {status: 500})
   
       }
   }