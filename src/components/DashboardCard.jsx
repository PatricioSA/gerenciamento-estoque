export default function DashboardCard({ title, number, bgColor, color }) {
    return (
        <div
            style={{ backgroundColor: bgColor, color: color }}
            className="card"
        >
            <h4>{title}</h4>
            <p>{number}</p>
        </div>
    )
}