import { Link, Outlet } from "react-router-dom";
import './rootLayout.css'

export default function RootLayout() {
  return (
    <>
      <header>
        <Link to="/gerenciamento-estoque/" className="logo">REACT ESTOQUE</Link>
        <nav>
          <Link to="/gerenciamento-estoque/">Início</Link>
          <Link to="/gerenciamento-estoque/items">Itens</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <hr />
        <p>Feito com React Router</p>
      </footer>
    </>
  )
}