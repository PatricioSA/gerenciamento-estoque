export default function AllItems() {
    return (
        <table style={{width: '100%'}}>
            <thead>
                <th>ID</th>
                <th>Nome</th>
                <th>Em Estoque</th>
                <th>Categoria</th>
                <th>Ações</th>
            </thead>
            <tbody>
                <tr>
                    <td>dsfwrgsfhdfgsdgsdsgerg</td>
                    <td>7 Wonders</td>
                    <td>8 Unid.</td>
                    <td>Jogos</td>
                    <td>
                        <button>Ver</button>
                        <button>Atualizar</button>
                        <button>Excluir</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}