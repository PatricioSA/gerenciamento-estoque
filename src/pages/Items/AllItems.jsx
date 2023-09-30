import { Link } from "react-router-dom"
import useCollection from "../../hooks/useCollection"
import CustomButton from "../../components/CustomButton"

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
                            <Link to={`/items/${item.id}`}>
                                <CustomButton
                                    title="Ver"
                                    bgColor="#5ba7fd"
                                />
                            </Link>
                            <Link to={`/items/${item.id}/update`}>
                                <CustomButton
                                    title="Atualizar"
                                    color="black"
                                    bgColor="white"
                                />
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}