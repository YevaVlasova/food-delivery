import '../styles/home.scss';
import FiltersList from './components/Filters/FiltersList/FiltersList';
import HotList from "./components/Hot/HotList/HotList";
import RestaurantsList from './components/Restaurants/RestaurantsList/RestaurantsList';

const Home = () => {
    return (
        <div className="container home">
            <HotList />
            <FiltersList />
            <RestaurantsList />
        </div>
    );
}
export default Home;