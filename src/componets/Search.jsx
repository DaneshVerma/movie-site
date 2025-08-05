const Search = () => {
  return (
    <div className='search flex w-1/2 items-center gap-5 p-5 bg-[#0F0D23] rounded-md'>
      <div className='icon'>
        <img src='/image/search.svg' alt='' />
      </div>
      <input className='outline-0 border-0 w-full text-white' type='text' placeholder="search through thousans of movies" />
    </div>
  );
};

export default Search;
