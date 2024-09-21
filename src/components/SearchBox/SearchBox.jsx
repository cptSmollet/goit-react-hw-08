import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from '../../redux/filters/slice'; 
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.filters); 

  const handleChange = (e) => {
    dispatch(setFilterValue(e.target.value)); 
  };

  return (
    <div className={styles.searchBox}>
      <label className={styles.searchText}>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className={styles.searchData}
      />
    </div>
  );
};

export default SearchBox;
