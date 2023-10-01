import { useParams } from "react-router-dom";
import ItemForm from "../../components/ItemForm/ItemForm";
import useCollection from "../../hooks/useCollection";

export default function UpdateItem() {
    const { getItem } = useCollection()
    const { id } = useParams()

    const item = getItem(id)

    return (
        <>
            <h2>Atualizar item</h2>
            <ItemForm itemToUpdate={item}/>
        </>
    )
}