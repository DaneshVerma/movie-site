import Search from "./componets/Search"

const App = () => {
  return (
    <main className=''>
      <div className="bg-[url(/image/hero-bg.png)] w-full py-6 bg-cover bg-center flex gap-4 flex-col items-center justify-center">
        <div className="logo">
          <img src="/image/logo.png" alt="" />
        </div> 
        <div className="heroiamge w-90">
          <img className="w-full aspect-square" src="/image/hero-img.png" alt="" />
        </div>
        <header className="w-1/2 text-center font-bold text-white">
          <h1 className="text-5xl">Find <span className="text-[#AB8BFF]">Movies</span> You’ll Love Without the Hassle</h1>
        </header>
        <Search />
      </div>
    </main>
  )
}

export default App