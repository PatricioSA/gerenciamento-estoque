import { Link } from 'react-router-dom'
import DashboardCard from '../../components/DashboardCard'
import CustomButton from '../../components/CustomButton'
import useCollection from '../../hooks/useCollection'
import './dashboard.css'

export default function Dashboard() {
    const { stock } = useCollection()

    const inventoryTotal = stock.reduce((accumulator, item) => accumulator + Number(item.quantity), 0)

    stock.forEach((item) => {
        item.createdAt = new Date(item.createdAt)
        item.updatedAt = new Date(item.updatedAt)
    })

    const limitDate = new Date()
    limitDate.setDate(limitDate.getDate() - 10)
    const recentItems = stock.filter(item => item.createdAt >= limitDate)
    const quantityRecentItems = recentItems.length

    const lowQuantityItems = stock.filter(item => item.quantity < 10)
    const lowQuantityTotal = lowQuantityItems.length

    return (
        <section className='container'>
            <h1>Dashboard</h1>
            <section className="cards">
                <DashboardCard title='Diversidade de itens' number={stock.length} bgColor="#A1C099" color="#327220"/>
                <DashboardCard title='Inventário total' number={inventoryTotal} bgColor="#DF9B55" color="#BA5f00"/>
                <DashboardCard title='Itens recentes' number={quantityRecentItems} bgColor="#B899C0" color="#683C73"/>
                <DashboardCard title='Itens acabando' number={lowQuantityTotal} bgColor="#C09999" color="#7B3737"/>
            </section>


            <section className='tables'>
                <table>
                    <thead>
                        <tr>
                            <th>Itens Recentes</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>
                                    <Link to={`items/${item.id}`}>
                                        <CustomButton title="Ver" bgColor="#A1C099" color="#327220" />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <table>
                    <thead>
                        <tr>
                            <th>Itens Acabando</th>
                            <th>Qtd.</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lowQuantityItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <Link to={`items/${item.id}`}>
                                        <CustomButton title="Ver" bgColor="#A1C099" color="#327220" />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </section>
    )
}