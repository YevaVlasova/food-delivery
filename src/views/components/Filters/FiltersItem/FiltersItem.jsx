import './FiltersItem.scss';

const FiltersItem = ({title, img, alt}) => {
    return (
        <>
            <div className="filters-item">
                <div className="filters-item__img"><img src={img} alt={alt} /></div>
                <div className="filters-item__title">{title}</div>
            </div>
        </>
    );
};
export default FiltersItem;