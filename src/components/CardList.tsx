'use client'
import { Pagination } from './Pagination'
import { Card } from './Card'
import {useSearchParams } from 'next/navigation'
import { useState } from 'react'



type Page = {
  cat:string | null,
  page?:number
}


export const CardList =  ({cat}:Page) => {
 
  const [res, setRes] = useState<any>()
  const searchParam = useSearchParams()
  const pages = Number(searchParam.get('page')) || 1

    fetch(`http://localhost:3000/api/posts?page=${pages}&cat=${cat || ''}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        // Handle the parsed data here
         setRes(data)
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error(error);
      })


  return (
    <div className='' style={{flex:"5" }}>
      <h1 className='my-[50px]'>Recent Posts</h1>
      <div>
        <div>
          {res?.posts?.map((post:any) => <Card key={post._id}
          posts={post}/> )}
        </div>
      </div>
      <Pagination page={pages} count={res?.count}/>
    </div>
  )
}
