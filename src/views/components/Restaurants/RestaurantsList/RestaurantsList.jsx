import RestaurantsItem from '../RestaurantsItem/RestaurantsItem';
import './RestaurantsList.scss';
import { useState } from 'react';

const RestaurantsList = () => {
    const [items, setItem] = useState([
        {
            id: 9,
            title:"Royal Sushi House",
            img: '/src/assets/Restaurants/Sushi House.png',
            alt: "Sushi House",
            time: "30-40 min",
            sum: "$32 min sum",
            tags: [
                {
                    imgS: '/src/assets/UI/sushi.png',
                    altS: "sushi",
                    text: "Sushi"
                },
            ],
        },
        {
            id: 10,
            title:"Burgers & Pizza",
            img: '/src/assets/Restaurants/Burgers & Pizza.png',
            alt: "Burgers & Pizza",
            time: "40-60 min",
            sum: "$24 min sum",
            tags: [
                {
                    imgS: '/src/assets/UI/burger.png',
                    altS: "burger",
                    text: "Burger",
                },
                {
                    imgS: '/src/assets/UI/pizza.png',
                    altS: "pizza",
                    text: "Pizza"
                },
            ],
        },
        {
            id: 11,
            title:"Ninja sushi",
            img: '/src/assets/Restaurants/Ninja sushi.png',
            alt: "Ninja sushi",
            time: "20-40 min",
            sum: "$40 min sum",
            tags: [
                {
                    imgS: '/src/assets/UI/sushi.png',
                    altS: "sushi",
                    text: "Sushi"
                },
            ],
        },
        {
            id: 12,
            title:"Sushi master",
            img: '/src/assets/Restaurants/Sushi master.png',
            alt: "Sushi master",
            time: "60-70 min",
            sum: "$49 min sum",
            tags: [
                {
                    imgS: '/src/assets/UI/sushi.png',
                    altS: "sushi",
                    text: "Sushi"
                },
            ],
        },
        {
            id: 13,
            title:"Japanese sushi",
            img: '/src/assets/Restaurants/Japanese sushi.png',
            alt: "Japanese sushi",
            time: "30-50 min",
            sum: "$104 min sum",
            tags: [
                {
                    imgS: '/src/assets/UI/sushi.png',
                    altS: "sushi",
                    text: "Sushi"
                },
            ],
        },
        {
            id: 14,
            title:"Kobe",
            img: '/src/assets/Restaurants/Kobe.png',
            alt: "Kobe",
            time: "20-30 min",
            sum: "$57 min sum",
            tags: [
                {
                    imgS: '/src/assets/UI/sushi.png',
                    altS: "sushi",
                    text: "Sushi"
                },
            ],
        },
    ])
    return (
        <div className="restaurants">
            <div className="restaurants-title">Nearby restaurants</div>
            <div className="col-3 restaurants__list">

                {items && items.map((item, index) => {
                    return (
                        <RestaurantsItem key={index} title={item.title} img={item.img} alt={item.alt} time={item.time} sum={item.sum} tags={item.tags} />
                    )
                })}
            </div>
        </div>
    );
};
export default RestaurantsList;


// imgS={item.imgS} altS={item.altS} text={item.text}