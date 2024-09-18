import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search contacts..."
      onChange={handleFilterChange}
      className={styles.input}
    />
  );
};

export default SearchBox;


