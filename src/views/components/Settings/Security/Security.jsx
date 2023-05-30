import './Security.scss';

const Security = (props) => {
    return (
        <div className="security">
            <div className="security__title">{props.title}</div>
            <div className="security__field">
                <div className="security__desc">Password, 2FA</div>
            </div>
        </div>
    );
};
export default Security;