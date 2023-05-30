import BasketGrayIcon from '../../../../components/icons/BasketGrayIcon';
import TimeIcon from '../../../../components/icons/TimeIcon';
import './RestaurantsItem.scss';

const RestaurantsItem = ({title, img, alt, time, sum, tags}) => {
    return (
        <>
            <div className="restaurant-item">
                <div className="restaurant-item__img"><img src={img} alt={alt} /></div>
                <div className="restaurant-item__info">
                    <div className="restaurant-item__header">
                        <div className="restaurant-item__header-title">{title}</div>
                        <BasketGrayIcon />
                    </div>
                    <div className="restaurant-item__process">
                        <div className="restaurant-item__process-time">
                            <TimeIcon />
                            {time}
                        </div>
                        <div className="restaurant-item__process-cost">
                            <div className="restaurant-item__process-cost__dot"></div>
                            {sum}
                        </div>
                    </div>
                    <div className="restaurant-item__filters">
                        {tags.map((tag => {
                            return (
                                <div className="restaurant-item__desc">
                                    <img src={tag.imgS} alt={tag.altS} />
                                    {tag.text}
                                </div>
                            )
                        }))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default RestaurantsItem;