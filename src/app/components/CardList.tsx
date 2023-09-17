import { Pagination } from './Pagination'
import { Card } from './Card'

export const CardList = () => {
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
