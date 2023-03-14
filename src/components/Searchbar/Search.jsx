import React, {useState} from 'react'


function Search({ searchPost }) {
    const [search, setSearch] = useState('');
  
    const handleSearch = (e) => {
      setSearch(e.target.value);
      searchPost(e.target.value);
    };
    return (
      <div>
        <input type="text" name="search" value={search} onChange={handleSearch} />
      </div>
    );
  }

export default Search