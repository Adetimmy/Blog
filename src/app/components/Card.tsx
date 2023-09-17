import Image from "next/image"
import Link from "next/link"

export const Card = () => {
  return (
    <div className="mb-[50px] flex items-center gap-[50px]">
        <div className="flex-1 h-[350px] relative">
            <Image  src="/p1.jpeg" alt='' fill className="object-cover"/>
        </div>
          <div>
            <div className="flex-1 flex flex-col gap-[30px]">
                <div>
                    <span className="text-[gray]">11.02.2023 - </span>
                    <span className="text-[crimson]">CULTURE</span>
                </div>
                <Link href='/'>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </Link>
                <p className="text-lg font-light text-softTextColor ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis reprehenderit provident dolore, enim eum, perspiciatis accusantium minima ratione cum dolor fugiat modi tenetur amet non.
                </p>
                <Link href='/' className="border-b-[1px] border-[crimson] w-max py-1">Read More</Link>
            </div>
          </div>
    </div>
  )
}
