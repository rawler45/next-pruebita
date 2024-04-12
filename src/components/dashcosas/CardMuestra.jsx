/* import { cardsMock } from "@/app/data/cardsMock";
import Image from "next/image";

const CardMuestra = ({slug} ) => {
  const item = cardsMock.find(p => p.slug === slug)
      return(
        <div>
            <Image src={item.image} alt={item.nombre} width={300} height={300} />
            <h2>{item.nombre}</h2>
            <p>{item.description}</p>
        </div>
      )
}

export default CardMuestra; */