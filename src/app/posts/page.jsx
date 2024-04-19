import Image from "next/image";
import PostDetail from "./[id]/page";
import Link from "next/link";

const getPosts = async () =>{
  const response = await fetch ("https://jsonplaceholder.typicode.com/photos")

  if(!response.ok) {
    throw new Error ("FALLO LA CONECCION DE DATOS")
  }
  return response.json()
} 

const Posts = async () => {


  const posts = await getPosts()
  const primeros = posts.slice(0, 10);

  
  return (
    <div>
        
        
          {primeros.map( primero => (
            <Link key={primero.id} href={`/posts/${primero.id}`} >
            <li >
              <h2>{primero.title} </h2>
              <Image src={primero.thumbnailUrl} 
              alt={primero.title} 
              width={200}
              height={200}
              />
            </li>
            </Link>
            
          ))}
        
    </div>
    
  )
}

export default Posts