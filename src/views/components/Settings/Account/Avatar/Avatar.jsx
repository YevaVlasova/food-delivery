import profileImage from '../../../../../assets/profile.webp';
import './Avatar.scss';

const Avatar = () => {
    return (
        <div className="avatar">
            <div className="avatar__title">Avatar</div>
            <div className="avatar-info">
                <div className="avatar-info__img">
                    <img src={profileImage} alt="Profile" />
                </div>
                <div className='avatar-info__btn-one'>Change</div>
                <div className='avatar-info__btn-two'>Remove</div>
            </div>
        </div>
    );
};
export default Avatar;