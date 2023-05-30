import FiltersItem from '../FiltersItem/FiltersItem';
import './FiltersList.scss';
import { useState } from 'react';

const FiltersList = () => {
    const [items, setItem] = useState([
        {
            id: 3,
            title:"Pizza",
            img: '/src/assets/UI/pizza.png',
            alt: "pizza"
        },
        {
            id: 4,
            title:"Burger",
            img: '/src/assets/UI/burger.png',
            alt: "burger"
        },
        {
            id: 5,
            title:"BBQ",
            img: '/src/assets/UI/meat.png',
            alt: "BBQ"
        },
        {
            id: 6,
            title:"Sushi",
            img: '/src/assets/UI/sushi.png',
            alt: "sushi"
        },
        {
            id: 7,
            title:"Vegan",
            img: '/src/assets/UI/broccoli.png',
            alt: "vegan"
        },
        {
            id: 8,
            title:"Desserts",
            img: '/src/assets/UI/cake.png',
            alt: "desserts"
        },
    ])
    return (
        <div className="filters">
            <div className="col-6 filters__list">

                {items && items.map((item, index) => {
                    return (
                        <FiltersItem key={index} title={item.title} img={item.img} alt={item.alt} />
                    )
                })}
            </div>
        </div>
    );
};
export default FiltersList;