import { parfumCategories } from "./offer-section/Catalog";
import { type Dispatch, type SetStateAction } from "react";

export type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: Category,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

const categories = [
    'men\'s clothing',
    'electronics',
    'jewelery',
    'women\'s clothing'
] as const;

export type Category = typeof categories[number];

export type ParfumCategories = (typeof parfumCategories)[number];

export function isCategory(str: string): str is Category {
    return categories.includes(str as Category);
}

export type ArrayState<T> = [T[], Dispatch<SetStateAction<T[]>>]

export type UserProductsTuple<T> = [number, T, (id: number) => void];

export type CartProduct = Product & {
    quantity: number
}

export type CartConfig = {
    headingsStyle: string,
    imageStyle: string,
    numbersStyle: string,
    alignment: string,
    justifyContent: string
}

export function getTotal(products: CartProduct[]) {
    return products.reduce((accum, product) => {
            return accum + (product.quantity * product.price);
        }, 0).toFixed(2)
}