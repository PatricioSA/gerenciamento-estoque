import { useState } from "react"


export default function useCollection() {
    const [stock, setStock] = useState(() => {
        const storage = localStorage.getItem('stock')
        if (!storage) return []
        const items = JSON.parse(storage)
        items.forEach((item) => {
            item.createdAt = new Date(item.createdAt)
            item.updatedAt = new Date(item.updatedAt)
        })
        return items
    })

    const addItem = ( item ) => {
        setStock(state => {
            const updatedItems = [...state, item]
            localStorage.setItem('stock', JSON.stringify(updatedItems))
            return updatedItems
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