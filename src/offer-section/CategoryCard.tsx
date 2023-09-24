import FlowerIcon from "../icons/Flower"
import LemonIcon from "../icons/Lemon"
import FruitsIcon from "../icons/Fruits";
import WoodIcon from "../icons/Wood";
import WaveIcon from "../icons/Wave";
import LeafIcon from "../icons/Leaf";
import { type ParfumCategories } from "../types";

export default function CategoryCard({category}: {category: ParfumCategories}) {
    return (
        <article className='flex flex-col rounded-[10px] border items-center gap-y-4 pt-10 pb-5 px-5 min-w-[340px] mb:min-w-full lg:min-w-[calc(50%-20px)]'>
            {getCategoryIcon(category)}
            <h3 className="text-xl font-semibold text-[#b51f42]">{ category.charAt(0).toUpperCase() + category.slice(1) }</h3>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptatibus. Rerum, rem. Consequatur quis odio iure ea nulla natus labore voluptates quisquam assumenda, necessitatibus explicabo libero consequuntur id facilis officiis.</p>
        </article>
    )
}

function getCategoryIcon(category: ParfumCategories) {
    switch (category) {
        case 'floral': return <FlowerIcon></FlowerIcon>
        case 'citrics': return <LemonIcon></LemonIcon>
        case 'fruits': return <FruitsIcon></FruitsIcon>
        case 'woods': return <WoodIcon></WoodIcon>
        case 'aquatics': return <WaveIcon></WaveIcon>
        case 'green': return <LeafIcon></LeafIcon>
    }
}