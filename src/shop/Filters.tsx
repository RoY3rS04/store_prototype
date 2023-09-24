import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
} from "@chakra-ui/react";

import { useState, useContext, SyntheticEvent } from "react";
import { ProductsContext } from "../routes/Shop";
import { type Product, type Category, type ArrayState } from "../types";
import { isCategory } from "../types";

export default function Filters() {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(1000);

    const arrayState = useContext(ProductsContext) as ArrayState<Product>;

    function getMinMaxPrice(val: number[]) {
        setMin(val[0]);
        setMax(val[1]);
    }

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();

        if (e.target instanceof HTMLFormElement) {
            const data = new FormData(e.target);

            let categories: Category[] = [];

            for (let pair of data.entries()) {
                if (isCategory(pair[0])) {
                    categories.push(pair[0]);
                }
            }
            //console.log(categories)

            updateProducts(arrayState, categories, [min, max]);
        }

        //console.log(categories)
    }

    return (
        <div className="flex-1">
            <form
                onSubmit={handleSubmit}
                className="flex items-center justify-between xs:flex-col xs:gap-y-5"
            >
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold xs:text-center">Categories</h2>
                    <div className="xs:grid xs:grid-cols-2 xs:justify-items-center gap-2">
                        <div className="flex items-center gap-x-3">
                            <label
                                htmlFor="men"
                                className="text-sm font-medium"
                            >
                                Men's clothing
                            </label>
                            <input
                                type="checkbox"
                                name="men's clothing"
                                id="men"
                            />
                        </div>
                        <div className="flex items-center gap-x-3">
                            <label
                                htmlFor="women"
                                className="text-sm font-medium"
                            >
                                Women's clothing
                            </label>
                            <input
                                type="checkbox"
                                name="women's clothing"
                                id="women"
                            />
                        </div>
                        <div className="flex items-center gap-x-3">
                            <label
                                htmlFor="jewelry"
                                className="text-sm font-medium"
                            >
                                Jewelry
                            </label>
                            <input
                                type="checkbox"
                                name="jewelery"
                                id="jewelry"
                            />
                        </div>
                        <div className="flex items-center gap-x-3">
                            <label
                                htmlFor="electronics"
                                className="text-sm font-medium"
                            >
                                Electronics
                            </label>
                            <input
                                type="checkbox"
                                name="electronics"
                                id="electronics"
                            />
                        </div>
                    </div>
                </div>
                <div className="xs:w-full">
                    <h2 className="text-xl font-semibold xs:text-center">Price Range</h2>
                    <div className="min-w-[200px] flex items-center gap-x-3">
                        <span className="text-sm font-semibold">{min}$</span>
                        <RangeSlider
                            aria-label={["min", "max"]}
                            min={0}
                            max={1000}
                            defaultValue={[0, 1000]}
                            onChangeEnd={getMinMaxPrice}
                        >
                            <RangeSliderTrack>
                                <RangeSliderFilledTrack bg="#b51f42" />
                            </RangeSliderTrack>
                            <RangeSliderThumb index={0} />
                            <RangeSliderThumb index={1} />
                        </RangeSlider>
                        <span className="text-sm font-semibold">{max}$</span>
                    </div>
                </div>
                <button className="bg-[#b51f42] font-medium py-2 px-3 text-white rounded xs:w-full">
                    Search
                </button>
            </form>
        </div>
    );
}

function updateProducts(
    productsState: ArrayState<Product>,
    categories?: Category[],
    range?: [number, number]
) {
    const [products, setProducts] = productsState;
    let updatedProducts: Product[] = [];

    if (categories && categories.length > 0 && range) {
        updatedProducts = products.filter((product) => {
            if (
                categories.includes(product.category) &&
                product.price > range[0] &&
                product.price < range[1]
            ) {
                return true;
            }

            return false;
        });
    } else if (range) {
        updatedProducts = products.filter((product) => {
            if (product.price > range[0] && product.price < range[1]) {
                return true;
            }

            return false;
        });
    }

    setProducts(updatedProducts);
}
