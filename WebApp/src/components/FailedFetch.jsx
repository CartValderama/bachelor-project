import { Link } from "react-router-dom";
import NavBar from "../components/tailwind-components/Navbar";

export default function FailedFetch() {
  return (
    <>
      <NavBar />
      <section className="grid h-screen place-items-center bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Failed to fetch data
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Apologies, there was a problem retrieving the data. It's possible
            that the data you're attempting to fetch doesn't exist or is empty.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to={"/"}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
