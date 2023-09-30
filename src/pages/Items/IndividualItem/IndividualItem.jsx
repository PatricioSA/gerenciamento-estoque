import { Link, useParams } from "react-router-dom";
import CustomButton from "../../../components/CustomButton";
import useCollection from "../../../hooks/useCollection";
import "./individualitem.css"
import DeleteButton from "../../../components/DeleteButton";

export default function IndividualItem() {
    const { getItem } = useCollection()
    const { id } = useParams()

    const item = getItem(id)
    let itemCreatedAt = item.createdAt = new Date()
    let itemUpdatedAt = item.updatedAt = new Date()

    return (
        <section className="individual__item">
            <div>
                <h2>{item.name}</h2>
                <Link to={`/items/${item.id}/update`}>
                    <CustomButton title="Atualizar"
                        bgColor="#fff" color="black" />
                </Link>
                <DeleteButton itemId={item.id} itemName={item.name}/>
            </div>

            <div>
                <div className="item__details">
                    <p>Categoria: {item.category}</p>
                </div>
                <div className="item__details">
                    <p>Quantidade em estoque: {item.quantity}</p>
                </div>
                <div className="item__details">
                    <p>Preço: R${item.price}</p>
                </div>
            </div>

            <div>
                <p>{item.description}</p>
            </div>

            <div>
                <p>Cadastrado em: {itemCreatedAt.toLocaleString()}</p>
                <p>Atualizado em: {itemUpdatedAt.toLocaleString()}</p>
            </div>
        </section>
    )
}