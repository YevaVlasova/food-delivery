import { Link } from "react-router-dom";
import BasketIcon from "../../icons/BasketIcon";
import profileImage from '../../../assets/profile.webp';
import Logo from '../../../assets/Logo.svg';
import Input from "../Input/Input";

import style from './Header.module.scss'

const Header = () => {
    return (
        <header className={style.header}>
            <div className={`container ${style.header__container}`}>
                <Link to={'/'} className={style.header__logo}>
                    <img src={Logo} alt="Food delivery" />
                </Link>
                <div className={style.header__search}>
                    <Input />
                </div>
                <div className={style.header__nav}>
                    <Link to={'/'}>Restaurants</Link>
                    <Link to={'/'}>Deals</Link>
                    <Link to={'/'}>My orders</Link>
                </div>
                <div className={style.header__btn}>
                    <div className={style.headerBasket}>
                        <BasketIcon />
                        <div className={style.headerBasket__counter}>4</div>
                    </div>
                    <div className={style.headerProfile}>
                        <Link to={'/profile'}><img src={profileImage} alt="Profile" /></Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;