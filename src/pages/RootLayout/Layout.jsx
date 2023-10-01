import { Link, Outlet } from "react-router-dom";
import './rootLayout.css'

export default function RootLayout() {
  return (
    <>
      <header>
        <Link to="/" className="logo">REACT ESTOQUE</Link>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/items">Itens</Link>
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