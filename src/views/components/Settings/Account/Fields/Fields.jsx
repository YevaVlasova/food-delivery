import './Fields.scss';

const Fields = () => {
    return (
        <>
            <div className="field">
                <div className="field-firstLine">
                    <div className="fields">
                        <label className="fields-input">First name</label>
                        <input className="fields-input__field" type="text" placeholder="Jane" />
                    </div>
                    <div className="fields">
                        <label className="fields-input">Last name</label>
                        <input className="fields-input__field" type="text" placeholder="Robertson" />
                    </div>
                </div>
                <div className="field-secondLine">
                    <div className="fields">
                        <label className="fields-input">Email</label>
                        <input className="fields-input__field" type="email" placeholder="jane.robertson@example.com" />
                    </div>
                    <div className="fields">
                        <label className="fields-input">Phone number</label>
                        <input className="fields-input__field" type="tel" placeholder="(217) 555-0113" />
                    </div>
                </div>
            </div>
        </>
        
    );
};
export default Fields;