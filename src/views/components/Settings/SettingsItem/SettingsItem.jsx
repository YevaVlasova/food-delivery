import './SettingsItem.scss';

const SettingsItem = (props) => {
    const handleClick = () => {
        props.onChildClick(props.tab)
    };
    return (
        <>
            <div className="settings-item" onClick={handleClick}>
                <div className="settings-item__img">{props.icon}</div>
                <div className="settings-item__info">
                    <div className="settings-item__title">{props.title}</div>
                    <div className="settings-item__desc">{props.desc}</div>
                </div>
            </div>
        </>
    );
};
export default SettingsItem;