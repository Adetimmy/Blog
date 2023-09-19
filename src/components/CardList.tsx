import { Pagination } from './Pagination'
import { Card } from './Card'

interface Category{
  
}


export const CardList =  async () => {


  const res =  await fetch('http://localhost:3000/api/post', {next:{revalidate:10}}) 
  const data = await res.json() as Promise<Category>


  return (
    <div className='' style={{flex:"5" }}>
      <h1 className='my-[50px]'>Recent Posts</h1>
      <div>
        <div>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
      <Pagination/>
    </div>
  )
}
