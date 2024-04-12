import { cardsMock } from "@/app/data/cardsMock";
import ContCards from "./ContCards";

const ItemsMenu = ({dashlinks} ) => {
    const items = cardsMock.filter(item => item.tag === dashlinks)

    return(
        <div className="w-3/4 flex gap-2 flex-wrap  bg-gray-600">
            {items.map(item => <ContCards key={item.nombre} item={item} />)}
        </div>
    )
}

export default ItemsMenu;