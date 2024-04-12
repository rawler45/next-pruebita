import Link from "next/link";
import Image from "next/image";


const ContCards = ({item} ) => {
    
    return(
        <div style={{height:"470px"}} className="border bg-gray-100 rounded-lg border-gray-300 hover:bg-slate-200">
            <Link href={`/dashboard/cardscont/${item.slug}`}>
            <Image src={item.image} alt={item.nombre} width={300} height={300} />
            <h2>{item.nombre}</h2>
            <p>{item.description}</p>
            </Link>
        </div>
    )
}

export default ContCards;