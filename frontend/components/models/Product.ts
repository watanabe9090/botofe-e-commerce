type Product = {
    id: string|number,
    title: string,
    subtitle: string,
    description: string,
    preview: string,
    price: number,
    flags: Array<string>,
    stars: number
};


type ProductPreview = {
    title: string
}



export type {
    Product, 
    ProductPreview
}