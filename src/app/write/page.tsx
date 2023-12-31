'use client'
import Image from 'next/image';
import React from 'react';
import "react-quill/dist/quill.bubble.css"
import { useSession } from "next-auth/react"
import {useRouter} from 'next/navigation'
import {getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { app } from '@/src/utils/firebase';
import dynamic from 'next/dynamic';


const storage = getStorage(app)

const WritePage = () => {
  const { status } = useSession()

  const ReactQuill = dynamic (() => import ('react-quill'), {ssr:false} )
  const router = useRouter()


  const [file, setFile] = React.useState<null | any>(null) 
  const [media, setMedia] = React.useState<string>('') 
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [catSlug, setCatSlug] = React.useState("");



  React.useEffect(() => {
    const upload = () => {
      // to create a unique file
      const name = new Date().getTime() + file.name 
const storageRef = ref(storage, name);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setMedia(downloadURL)
    });
  }
);
    }

    file && upload()
  }, [file])

if (status === "loading"){
  return <div>loading...</div>
}

else if(status === 'unauthenticated'){
  return router.push('/')
}

const slugify = (str:string) =>
str
  .toLowerCase()
  .trim()
  .replace(/[^\w\s-]/g, "")
  .replace(/[\s_-]+/g, "-")
  .replace(/^-+|-+$/g, "");

const handleSubmit = async () => {
const res = await fetch("/api/posts", {
  method: "POST",
  body: JSON.stringify({
    title,
    desc: value,
    img: media,
    slug: slugify(title),
    catSlug: catSlug || "style", //If not selected, choose the general category
  }),
});

if (res.status === 200) {
  const data = await res.json();
  router.push(`/posts/${data.slug}`);
}
};


  return (
    <div className='writ -z-10'>
      <div className='flex flex-col lg:flex-row justify-between lg:items-center my-16 xl:mt-2'>
         <input type="text" placeholder='Title' style={{flex:'5'}} className='p-4 text-xl lg:text-[35px] font-semibold xl:p-12 xl:text-[50px]  outline-none placeholder:text-[#b3b3b1] ' value={title} onChange={e => setTitle(e.currentTarget.value)} />
        <label htmlFor="category" className='text-xs'>Select Category: </label>
        <select id='category' style={{flex:'1'}} className='px-3 py-2 md:px-5 md:py-3 lg:ml-10 w-max border outline-none rounded-xl border-[lightgray] dark:bg-[transparent] dark:text-darkSoft dark:border-[#00800026]' onChange={(e) => setCatSlug(e.target.value)}>
          <option value="style">style</option>
          <option value="fashion">fashion</option>
          <option value="food">food</option>
          <option value="culture">culture</option>
          <option value="travel">travel</option>
          <option value="coding">coding</option>
        </select>
      </div>

      <div className='flex flex-col lg:flex-row write lg:gap-5 h-[700px] relative '>
        <button type="button" onClick={() => setOpen(!open)}>
          <Image src='/plus.png' alt='plus' width={16} height={16} className=''/>
        </button>
        {
          open && <div className='media_btn flex absolute bg-mainBg dark:bg-darkBg gap-5 z-50 w-full left-12'>
            <input type='file' id='image' onChange={e => setFile(e.target.files?.[0])} className='hidden' />
            <button type="button">
              <label htmlFor='image'>
                <Image src='/image.png' alt='add-image' width={16} height={16} />
              </label>
            </button>
            <button type="button">
              <Image src='/external.png' alt='add-file' width={16} height={16} />
            </button>
            <button type="button">
              <Image src='/video.png' alt='add-video' width={16} height={16} />
            </button>
          </div>
        }

        <ReactQuill theme='bubble' value={value} onChange={setValue} placeholder='Tell your story....' className='w-full'/>
      </div>
      <button className='absolute right-5 xl:top-7 top-20 text-sm px-5 py-2 bg-[#1a8917] text-[white] rounded-2xl' onClick={handleSubmit}>Publish</button>
   </div>
  )
}

export default WritePage