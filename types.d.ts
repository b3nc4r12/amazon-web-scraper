type Product = {
    features: string[]
    image: string
    imageset: string
    input: {
        search: string
    }
    price: number
    previous_price?: number
    rating: string
    reviews: number
    sponsored: boolean
    title: string
    url: string
}