
import Image from 'next/image'

const Card = () => {
  return (
    <div className='w-64 bg-blue-400 h-64'>
        <div>
            <Image src="https://blog.cloudflare.com/content/images/2019/08/image1-3.png" 
            alt='foto-de-google'
            width={400}
            height={400}
            />
        </div>
    </div>
  )
}

export default Card;