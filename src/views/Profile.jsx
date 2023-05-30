import '../styles/profile.scss';
import Account from './components/Settings/Account/Account';
import Address from './components/Settings/Address/Address';
import Payment from './components/Settings/Payment/Payment';
import Security from './components/Settings/Security/Security';
import SettingsList from './components/Settings/SettingsList/SettingsList';
import { useState } from "react";

const Profile = () => {
    const [tab, setTab] = useState('1');
    const handleChildClick = (element) => {
        setTab(element);
    };
    return (
        <div className="container profile">
            <div className="profile-settings">
                <div className="profile-settings__title">Settings</div>
                <SettingsList onChildClick={handleChildClick} />
            </div>
            <div className="profile-account">
                {tab === '1' && (
                    <Account title="Account" />
                )}
                {tab === '2' && (
                    <Address title="Address" />
                )}
                {tab === '3' && (
                    <Payment title="Payment method" />
                )}
                {tab === '4' && (
                    <Security title="Security" />
                )}
            </div>
        </div>
    );
}
export default Profile;