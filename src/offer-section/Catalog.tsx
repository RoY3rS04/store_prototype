import { SyntheticEvent, useEffect } from "react";
import CategoryCard from "./CategoryCard";

export const parfumCategories = [
    'floral',
    'citrics',
    'fruits',
    'woods',
    'aquatics',
    'green'
] as const;

let categoryWidth: number;

export default function Catalog() {

    useEffect(() => {
        const getWidth = document.querySelector('.categories')?.children[0].getBoundingClientRect();

        if (getWidth) {
            const { width } = getWidth;
            categoryWidth = width;
        }
    }, [])

    window.addEventListener('resize', () => {
        const getWidth = document.querySelector('.categories')?.children[0].getBoundingClientRect();

        if (getWidth) {
            const { width } = getWidth;
            categoryWidth = width;
        }
    })

    return (
        <section className="mt-20" id="we-offer">
            <h2 className="font-semibold text-[2rem] text-center">What We Offer</h2>
            <p className="text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="flex gap-x-5">
                <button type="button" onClick={handleLeftClick}>
                    <svg className="pointer-events-none" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                </button>
                <div className="relative no-scroll-bar overflow-x-scroll">
                    <div className="flex gap-x-10 items-center mt-[50px] pb-1 categories">
                        {parfumCategories.map((category, idx) => {
                            return <CategoryCard key={idx} category={category}></CategoryCard>
                        })}
                    </div>
                </div>
                <button type="button" onClick={handleRightClick}>
                    <svg className="pointer-events-none" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                </button>
            </div>
        </section>
    )
}

function handleLeftClick(e: SyntheticEvent) {
    let actualScroll = (e.target as HTMLElement).parentElement?.children[1].scrollLeft;

    if (actualScroll !== undefined) {
        (e.target as HTMLElement).parentElement?.children[1].scroll({
            left: actualScroll - (categoryWidth + 40),
            behavior: 'smooth'
        });
    }
}

function handleRightClick(e: SyntheticEvent) {
    
    let actualScroll = (e.target as HTMLElement).parentElement?.children[1].scrollLeft;

    if (actualScroll !== undefined) {
        (e.target as HTMLElement).parentElement?.children[1].scroll({
            left: actualScroll + (categoryWidth + 40),
            behavior: 'smooth'
        });
    }
}