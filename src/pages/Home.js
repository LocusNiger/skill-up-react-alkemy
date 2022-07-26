import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="text-white bg-gray-900">
        <div className="max-w-screen-xl h-full px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex flex flex-col justify-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-14">
              Movies App
            </h1>

            <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring"
                to="/login"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
