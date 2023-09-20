export default function DashboardCard({title, number}) {
    return (
        <div className="card">
            <h4>{title}</h4>
            <p>{number}</p>
        </div>
    )
}