import { Product } from '../types/Product'
import { API_URL } from '../config'

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch(`${API_URL}/products`)

        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`)
        }

        const data: Product[] = await response.json()

        return data
    } catch (error) {
        console.error('Failed to fetch products: ', error)
        throw error
    }
}
