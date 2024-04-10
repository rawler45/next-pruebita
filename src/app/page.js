import Image from 'next/image'

export default function Home() {
  return(
    <div className='flex justify-center items-center'>
       <Image
       src="https://i.ibb.co/CmB17g7/image-2024-01-03-T012359-653.png"
       alt='foto-home'
       width={1500}
       height={1500}
       />
    </div>
  )
}