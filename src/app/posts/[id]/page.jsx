const { default: Image } = require("next/image")


const getPostById = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)

    if(!response.ok) {
        throw new Error("FALLO LA CONCHA")
    }
    {
        return response.json()
    }
}

const PostDetail = async ({params}) => {
    const {id} = params

    const post = await getPostById(id)

    return(
        <div>
            <h2>{post.title} </h2>      
            <Image src={post.thumbnailUrl} alt={post.title} width={400} height={400} />   
        </div>
    )
}

export default PostDetail;