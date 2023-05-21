import HotItem from '../HotItem/HotItem';
import './HotList.scss';
import { useState } from 'react';

const HotList = () => {
    const [items, setItem] = useState([
        {
            id: 1,
            title:"All desserts",
            discount:"20% OFF",
            desc:"Desserty",
            img: '/src/assets/dessert.png',
            alt: "dessert"
        },
        {
            id: 2,
            title:"Big Burgers",
            discount:"50% OFF",
            desc:"Fooddies",
            img: '/src/assets/burger.png',
            alt: "burger"
        },
    ])
    return (
        <div className="hot">
            <div className="col-2 hot__list">
                {/* <HotItem title="All desserts" discount="20% OFF" desc="Desserty" img={dessert} alt="dessert" />
                <HotItem title="Big Burgers" discount="50% OFF" desc="Fooddies" img={burger} alt="burger" /> */}

                {items && items.map((item, index) => {
                    return (
                        <HotItem key={index} title={item.title} discount={item.discount} desc={item.desc} img={item.img} alt={item.alt} />
                    )
                })}
            </div>
        </div>
    );
};
export default HotList;