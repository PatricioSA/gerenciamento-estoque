import { useState } from "react"
import {v4 as uuidv4} from 'uuid'

export default function useCollection() {
    const [stock, setStock] = useState(() => {
        const storage = localStorage.getItem('stock')
        if (!storage) return []
        return JSON.parse(storage)
    })

    const addItem = ({ itemName, itemQuantity, price, category, description }) => {
        const id = uuidv4()
        const item = { id, itemName, itemQuantity, price, category, description }
        setStock(state => {
            const newState = [...state, item]
            localStorage.setItem('stock', JSON.stringify(newState))
            return newState
        })
    }

    const removeTransaction = (id) => {
        setStock(state => {
            const newState = state.filter((transaction) => transaction.id !== id);
            localStorage.setItem('stock', JSON.stringify(newState))
            return newState
        })
    }

    return {stock, addItem, removeTransaction}
}