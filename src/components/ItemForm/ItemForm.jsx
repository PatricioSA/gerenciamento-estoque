import { useState } from 'react'
import PropTypes from 'prop-types'
import useCollection from '../../hooks/useCollection'
import './itemform.css'
import StockItem from '../../model/StockItem'
import CustomButton from '../CustomButton'

ItemForm.propTypes = {
    itemToUpdate: PropTypes.object
}

export default function ItemForm({ itemToUpdate }) {
    const { addItem, updateItem } = useCollection()
    const defaultItem = {
        name: '',
        quantity: 0,
        price: 0,
        category: '',
        description: '',
    }
    const [item, setItem] = useState(itemToUpdate ? itemToUpdate : defaultItem)


    const handleSubmit = (ev) => {
        ev.preventDefault()

        if (itemToUpdate) {
            updateItem(itemToUpdate.id, item)
            alert('Item atualizado!')
        } else {
            const stockItem = new StockItem(item)
            addItem(stockItem)
            alert('Item cadastrado')
            setItem(defaultItem)
        }
    }

    const handleChange = (ev) => {
        setItem(currentState => {
            return {
                ...currentState,
                [ev.target.name]: ev.target.value
            }
        })
    }

    return (
        <form onSubmit={handleSubmit} className='container-new-item'>
            <div className='wrapper'>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        name='name'
                        id='name'
                        value={item.name}
                        required
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="quantity">Quantidade</label>
                    <input
                        type="number"
                        name="quantity"
                        id='quantity'
                        value={item.quantity}
                        min={1}
                        required
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="price">Preço</label>
                    <input
                        type="number"
                        name="price"
                        id='price'
                        value={item.price}
                        required
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="category">Categoria</label>
                    <select
                        name="category"
                        id="category"
                        value={item.category}
                        required
                        onChange={handleChange}
                    >
                        <option disabled value="">Selecione uma categoria</option>
                        <option value="Jogos">Jogos</option>
                        <option value="Livros">Livros</option>
                        <option value="Brinquedos">Brinquedos</option>
                        <option value="Acessórios">Acessórios</option>
                    </select>
                </div>
            </div>

            <label htmlFor="description">Descrição</label>
            <textarea
                id="description"
                name="description"
                rows="10"
                value={item.description}
                onChange={handleChange}
            ></textarea>
            <CustomButton
                title="Salvar"
                bgColor="#5ba7fd"
            />
        </form>
    )
}