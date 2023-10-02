import { Link } from "react-router-dom"
import useCollection from "../../hooks/useCollection"
import CustomButton from "../../components/CustomButton"
import DeleteButton from "../../components/DeleteButton"

export default function AllItems() {
    const { stock } = useCollection()

    return (
        <table style={{ width: '100%' }}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Em Estoque</th>
                    <th>Categoria</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {stock.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.category}</td>
                        <td>
                            <Link to={`${item.id}`}>
                                <CustomButton
                                    title="Ver"
                                    bgColor="#5ba7fd"
                                    marginRight="0.5rem"
                                    marginBottom="0.5rem"
                                />
                            </Link>
                            <Link to={`${item.id}/update`}>
                                <CustomButton
                                    title="Atualizar"
                                    color="black"
                                    bgColor="white"
                                    marginRight="0.5rem"
                                    marginBottom="0.5rem"
                                />
                            </Link>
                            <DeleteButton itemId={item.id} itemName={item.name}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}