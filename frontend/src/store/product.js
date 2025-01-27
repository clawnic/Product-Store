import { create } from "zustand"

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {
        try {
            if (!newProduct.name || !newProduct.image || !newProduct.price) {
                return { success: false, message: "please fill in all fields." }
            }
            const res = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProduct)
            })
            const data = await res.json()
            set((state) => ({
                products: [...state.products, data.data]
            }))
            return { success: true, message: "Product created successfully" }
        } catch (error) {
            console.error("API Error:", error)
            return { success: false, message: "Failed to create product" }
        }
    }
}))