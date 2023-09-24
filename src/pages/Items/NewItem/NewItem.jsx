import { useState } from 'react'
import './newitem.css'
import useCollection from '../../../hooks/useCollection'

export default function NewItem() {
    const [itemName, setItemName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    const {addItem} = useCollection()

    const handleSubmit = (ev) => {
        ev.preventDefault()
        addItem({ itemName, quantity, price: parseFloat(price), category, description })
    }

    return (
        <form onSubmit={handleSubmit} className='container-new-item'>
            <div className='wrapper'>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} required/>
                </div>

                <div>
                    <label htmlFor="quantity">Quantidade</label>
                    <input type="number" id='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} required/>
                </div>

                <div>
                    <label htmlFor="price">Preço</label>
                    <input type="number" id='price' value={price} onChange={(e) => setPrice(e.target.value)} required/>
                </div>

                <div>
                    <label htmlFor="">Categoria</label>
                    <select required name="" id="" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option disabled>Selecione uma categoria</option>
                        <option value="Jogos">Jogos</option>
                        <option value="Livros">Livros</option>
                    </select>
                </div>
            </div>

            <label htmlFor="">Descrição</label>
            <textarea
                name="" id=""
                rows="10"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button>Salvar</button>
        </form>
    )
}