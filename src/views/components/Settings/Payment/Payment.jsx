import './Payment.scss';

const Payment = (props) => {
    return (
        <div className="payment">
            <div className="payment__title">{props.title}</div>
            <div className="payment__field">
                <div className="payment__desc">Connected credit cards</div>
            </div>
        </div>
    );
};
export default Payment;