import { useState } from "react"


export default function useCollection() {
    const [stock, setStock] = useState(() => {
        const storage = localStorage.getItem('stock')
        if (!storage) return []
        return JSON.parse(storage)
    })

    const addItem = ( item ) => {
        setStock(state => {
            const updatedItems = [...state, item]
            localStorage.setItem('stock', JSON.stringify(updatedItems))
            return updatedItems
        })
    }

    const getItem = (itemId) => {
        return stock.find(item => item.id == itemId)
    }

    const updateItem = (itemId, newAttributes) => {
        setStock(state => {
            const itemIndex = state.findIndex(item => item.id === itemId)
            const updatedItems = [...state]
            Object.assign(updatedItems[itemIndex], newAttributes, {updatedAt: new Date().toLocaleString()})
            localStorage.setItem('stock', JSON.stringify(updatedItems))
            return updatedItems
        })
    }

    const deleteItem = (id) => {
        setStock(state => {
            const newState = state.filter(item => item.id !== id);
            localStorage.setItem('stock', JSON.stringify(newState))
            return newState
        })
    }

    return {stock, addItem, getItem, updateItem, deleteItem}
}