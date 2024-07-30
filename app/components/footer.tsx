
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import Link from 'next/link'
const Footer = () => {
  return (
    <>
    <footer className='container-full  pt-5 pb-3 mx-auto text-black'>
      <div className='pt-24 flex-col flex w-[40%] mx-auto justify-between gap-2 items-center'>
      <div className='flex gap-3'>
      <a href="https://www.youtube.com/@codeguru3204"><AiFillYoutube color='white' size={40} /></a>
      <a href="https://www.facebook.com/dean.lewis.988711?mibextid=LQQJ4d"><AiFillFacebook color='white' size={40}/></a>
      <a href="https://www.instagram.com/guy.asong?igsh=MXNobmNxZmM4c3lzMw%3D%3D&utm_source=qr"><AiFillInstagram color='white' size={40}/></a>
      <a href="https://github.com/guyasong2"><AiFillGithub color='white' size={40}/></a>
      </div>
      <p className='text-center'>Copyright © 2024, Udown. All Rights Reserved</p>
      </div>
    </footer>
    </>
  )
}

export default Footer