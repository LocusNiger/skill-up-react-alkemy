import HomeSearch from "./HomeSearch";
import TrendingInHome from "./TrendingInHome";

export default function HomeWithLogin() {
  return (
    <>
      <section className="text-white bg-gray-900 ">
        <div className="max-w-screen-xl h-full px-4 pt-12 mx-auto  lg:items-center lg:flex">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-14">
              Movies App
            </h1>
            <div className="my-12 flex flex-col h-48 justify-around">
              <h3 className="text-2xl">Search for a movie or see which ones are trending!</h3>
              <HomeSearch />
            </div>
          </div>
        </div>
      </section>
      <TrendingInHome />
    </>
  );
}
