import {v4 as uuidv4} from 'uuid'

export default class StockItem {
    constructor({name, description, quantity, price, category}) {
        this.id = uuidv4()
        this.name = name
        this.description = description
        this.quantity = Number(quantity)
        this.price = parseFloat(price)
        this.category = category
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }
}