import { Pagination } from './Pagination'
import { Card } from './card'

export const CardList = () => {
  return (
    <div className='' style={{flex:"5" }}>
      <h1 className='my-[50px]'>Recent Posts</h1>
      <div>
        <div>
          <Card/>
        </div>
      </div>
      <Pagination/>
    </div>
  )
}
