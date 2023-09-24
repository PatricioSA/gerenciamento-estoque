import DashboardCard from '../../components/DashboardCard'
import useCollection from '../../hooks/useCollection'
import './dashboard.css'

export default function Dashboard() {
    const {stock} = useCollection()

    return (
        <section className='container'>
            <h1>Dashboard</h1>
            <section className="cards">
                <DashboardCard title='Diversidade de itens'/>
                <DashboardCard title='Inventário total' number={stock.length}/>
                <DashboardCard title='Itens recentes' />
                <DashboardCard title='Itens acabando' />
            </section>


            <section className='tables'>
                <table>
                    <thead>
                        <th>Itens Recentes</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>7 Wonders</td>
                            <td>Ver</td>
                        </tr>
                    </tbody>
                </table>

                <table>
                    <thead>
                        <th>Itens Acabando</th>
                        <th>Qtd.</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>7 Wonders</td>
                            <td>8</td>
                            <td>ver</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </section>
    )
}