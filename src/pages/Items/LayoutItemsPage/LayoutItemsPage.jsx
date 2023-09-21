import { Link, Outlet, useLocation } from "react-router-dom";
import './LayoutItemsPage.css'

export default function LayoutItemsPage() {
    const { pathname } = useLocation()

    return (
        <section className="container">
            <h1>Itens em estoque</h1>

            <nav className="tabs">
                <Link
                    to='/items'
                    className={`tab ${pathname === '/items' ? 'active' : ''}`}>Todos os itens
                </Link>
                <Link
                    to='/items/new'
                    className={`tab ${pathname === '/items/new' ? 'active' : ''}`}>Novo item
                </Link>
            </nav>

            <main>
                <Outlet />
            </main>
        </section>
    )
}