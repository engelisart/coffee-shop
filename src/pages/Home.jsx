import { CoffeeList } from 'components/CoffeeList/CoffeeList';
import { SearchBar } from 'components/SearchBar/SearchBar';

const Home = () => {
  return (
    <>
      <hr />
      <SearchBar />
      <hr />
      <CoffeeList />
    </>
  );
};

export default Home;
