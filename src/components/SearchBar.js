import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { usePlacesWidget } from 'react-google-autocomplete';

const SearchBar = (props) => {
  const { inputLocation } = props;
  const [location, setlocation] = useState('');
  const { ref } = usePlacesWidget({
    apiKey: 'AIzaSyAJXEfnHg0GO52LRMGf0Oz3lfQeOrDUR34',
    options: {
      types: ['(cities)'],
    },
  });
  const onClickHandler = (event) => {
    event.preventDefault();
    if (location.trim()) {
      inputLocation(location);
      setlocation('');
    } else {
      alert('Please enter input');
    }
  };
  const onChangeHandler = (event) => {
    setlocation(event.target.value);
  };
  return (
    <div>
      <form className="form-container">
        <input
          className="input-text"
          ref={ref}
          type="text"
          placeholder="Enter location..."
          value={location}
          onChange={(e) => onChangeHandler(e)}
          onSelect={(e) => onChangeHandler(e)}
        />
        <button className="input-submit" type="submit" onClick={(e) => onClickHandler(e)}>
          <FiSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;