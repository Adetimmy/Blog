import Image from 'next/image'
import React from 'react'
import { Menu } from '../../components/Menu'
import { Comments } from '../../components/Comments'

const SinglePage = () => {
  return (
    <div className=''>
        <div className='flex gap-[30px] my-[50px]'>
            <div className='lg:w-4/6  flex flex-col justify-between'>
                <h1 className='lg:text-[44px] leading-normal md:text[36px] mb-2 text-[24px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <div className='flex gap-4 items-center'>
                    <div className=''>
                    <Image src='/coding.png' alt='john doe' width={50} height={50} className='rounded-full aspect-square'/>
                    </div>
                    <div className='flex text-[12px] font-semibold flex-col text-softTextColor'>
                        <span className='text-[20px]'>John Doe</span>
                        <span className=' '>01-01-2024</span>
                    </div>

                </div>
            </div>
            <div className=' hidden lg:inline rounded-xl w-4/6 h-[350px] overflow-hidden relative'>
                <Image src="/p1.jpeg" alt="" fill className='object-cover aspect-square'/>
            </div>
        </div>
        <div className='flex gap-[50px]'>
            <div className='mt-[60px]' style={{flex:'5'}}>
                <div className='text-darkSoft flex flex-col gap-8'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam qui tempore sapiente doloribus corporis, reiciendis sint itaque distinctio sed alias omnis molestias, a ipsum aut quos unde dolorem assumenda officia eligendi? Aut laborum eaque hic, vitae reiciendis, deleniti facere sequi voluptas neque tempore explicabo quos? Earum neque reprehenderit ullam enim consectetur delectus quaerat qui tempore ab, repellendus nostrum repudiandae excepturi quisquam in reiciendis ratione nisi doloribus vitae rerum suscipit, debitis quis fugiat corporis? Voluptates obcaecati ipsum rem eveniet rerum. Illum natus vero quae eum provident suscipit molestias molestiae laboriosam quo recusandae officia asperiores totam eius hic dolorem dolor deleniti accusamus, placeat, error doloribus architecto blanditiis consectetur aut. Adipisci officiis cum suscipit reiciendis sequi voluptate facere esse voluptatem blanditiis eum. Blanditiis!
                    </p>
                    <div>
                        <h2 className='font-semibold text-[22px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam adipisci soluta laboriosam.</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quas possimus totam dignissimos similique cumque veritatis necessitatibus et expedita dolor, incidunt odio reiciendis, ex enim praesentium corrupti omnis sit architecto. Iste fuga exercitationem quaerat rem eius expedita autem unde suscipit magnam? Id maiores repudiandae natus, veritatis consequuntur minima excepturi qui dolore aut autem vero commodi ipsa eaque facere suscipit, quisquam dignissimos iusto aspernatur accusantium nihil unde quasi. Maiores laborum nobis quo aliquam voluptates corporis blanditiis iure aut, voluptatum voluptas a omnis soluta doloremque vitae unde eligendi nam recusandae reiciendis architecto provident aliquid dolore? Doloremque nisi cumque autem facilis ullam. Eos possimus minus unde iste consequuntur laudantium, doloremque odit impedit dignissimos velit a perferendis quae neque! Minus incidunt totam quae assumenda.
                        </p>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, facere? Iure sed facilis sit quibusdam doloribus illum ea itaque ad officia officiis suscipit illo facere eveniet aperiam assumenda soluta fugit dicta vitae voluptatem corporis, voluptas eius accusamus! Repellat id repellendus aspernatur ea, voluptates tempore similique quam iure, a odit facilis.
                    </p>
                </div>
             <Comments />
           </div>
          
            <Menu />

        </div>
    </div>
  )
}

export default SinglePage 