import SearchIcon from "../../icons/SearchIcon";
import './Input.scss';

const Input = () => {
    return (
        <label className="input">
            <input className="input__field" type="text" placeholder="Search" />
            <span className="input__icon"><SearchIcon /></span>
        </label>

    );
}
export default Input;