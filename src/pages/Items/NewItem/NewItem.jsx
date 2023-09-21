import './index.css'

export default function NewItem() {
    return (
        <section className='container-new-item'>
            <div className='wrapper'>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" />
                </div>

                <div>
                    <label htmlFor="">Quantidade</label>
                    <input type="number" />
                </div>

                <div>
                    <label htmlFor="">Preço</label>
                    <input type="number" />
                </div>

                <div>
                    <label htmlFor="">Categoria</label>
                    <select name="" id="">
                        <option value="">ferf</option>
                    </select>
                </div>
            </div>

            <label htmlFor="">Descrição</label>
            <textarea name="" id="" rows="10"></textarea>
        </section>
    )
}