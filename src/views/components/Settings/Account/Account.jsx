import './Account.scss';
import Avatar from './Avatar/Avatar';
import Fields from './Fields/Fields';

const Account = (props) => {
    return (
        <div className="account">
            <div className="account__title">{props.title}</div>
            <div className="account__field">
                <div className="account__desc">Personal information</div>
                <Avatar />
                <Fields />
                {/* <Notifications />
                <ProfileBtns /> */}
            </div>
        </div>
    );
};
export default Account;