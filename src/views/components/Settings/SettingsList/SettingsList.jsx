import AccountIcon from '../../../../components/icons/AccountIcon';
import AddressIcon from '../../../../components/icons/AddressIcon';
import PaymentIcon from '../../../../components/icons/PaymentIcon';
import SecurityIcon from '../../../../components/icons/SecurityIcon';
import SettingsItem from '../SettingsItem/SettingsItem';
import './SettingsList.scss';
import { useState } from 'react';

const SettingsList = ({ onChildClick }) => {
    return (
        <div className="settings">
            <div className="settings__list">
                <SettingsItem
                    onChildClick={onChildClick}
                    tab="1"
                    title="Account"
                    desc="Personal information"
                    icon={<AccountIcon />}
                />
                <SettingsItem
                    onChildClick={onChildClick}
                    tab="2"
                    title="Address"
                    desc="Shippings addresses"
                    icon={<AddressIcon />}
                />
                <SettingsItem
                    onChildClick={onChildClick}
                    tab="3"
                    title="Payment method"
                    desc="Connected credit cards"
                    icon={<PaymentIcon />}
                />
                <SettingsItem
                    onChildClick={onChildClick}
                    tab="4"
                    title="Security"
                    desc="Password, 2FA"
                    icon={<SecurityIcon />}
                />
            </div>
        </div>
    );
};
export default SettingsList;