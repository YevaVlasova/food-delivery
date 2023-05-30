import './Address.scss';

const Address = (props) => {
    return (
        <div className="address">
            <div className="address__title">{props.title}</div>
            <div className="address__field">
                <div className="address__desc">Shippings addresses</div>
            </div>
        </div>
    );
};
export default Address;