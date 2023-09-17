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
                    <span>11.02.2023</span>
                    <span>CULTURE</span>
                </div>
                <Link href='/'>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </Link>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis reprehenderit provident dolore, enim eum, perspiciatis accusantium minima ratione cum dolor fugiat modi tenetur amet non.
                </p>
                <Link href='/'>Read More</Link>
            </div>
          </div>
    </div>
  )
}
