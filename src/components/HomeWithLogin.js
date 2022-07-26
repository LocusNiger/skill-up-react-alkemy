import HomeSearch from "./HomeSearch";
import TrendingInHome from "./TrendingInHome";

export default function HomeWithLogin() {
  return (
    <>
      <section className="text-white">
        <div className="max-w-screen-xl px-4 pt-12 mx-auto lg:items-center lg:flex ">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 mb-4">
              Movies App
            </h1>
            <div className="flex flex-col h-36 justify-around mb-10">
              <h3 className="text-xl px-4 sm:text-2xl">Search for a movie or see which ones are trending!</h3>
              <HomeSearch />
            </div>
          </div>
        </div>
      </section>
      <TrendingInHome />
    </>
  );
}
