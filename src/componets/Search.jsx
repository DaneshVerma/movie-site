const Search = ({setSearchTerm, searchTerm}) => {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className='search flex w-full items-center gap-5 p-5 bg-[#0F0D23] rounded-md'>
      <div className='icon'>
        <img src='/image/search.svg' alt='' />
      </div>
      <input onChange={handleSearchChange} className='outline-0 border-0 w-full text-white' type='text' placeholder="search through thousans of movies" />
    </div>
  );
};

export default Search;
