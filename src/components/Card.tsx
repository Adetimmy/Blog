import Image from "next/image"
import Link from "next/link"

interface Post {
  posts:{
    _id:string
    img:string,
    desc:string,
    title:string
    createdAt?:string
    catSlug?:string
  } 
}

export const Card = ({posts}:Post) => {
  return (
    
    <div className="mb-[50px] flex items-center gap-[30px]" key={posts._id}>
        <div className="flex-1 h-[350px] relative aspect-square hidden lg:inline">
        {posts.img &&  <Image  src={posts.img} alt='' fill className="object-cover"/>}
        </div>
          <div>
            <div className="flex-1 flex flex-col gap-[10px]">
                <div>
                    <span className="text-[gray] text-[12px]">{posts.createdAt?.substring(0, 10)} - </span>
                    <span className="text-[crimson] text-[12px] capitalize">{posts.catSlug}</span>
                </div>
                <Link href='/'>
                    <h1 className="text-[24px] dark:text-darkSoft">{posts.title}</h1>
                </Link>
                <p className="text-[18px] font-light text-softTextColor ">
                  {posts.desc}
                </p>
                <Link href='/' className="border-b-[1px] border-[crimson] w-max py-1">Read More</Link>
            </div>
          </div>
    </div>
  )
}
