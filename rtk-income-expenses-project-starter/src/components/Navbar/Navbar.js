import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <Link to={"/"} className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={logo}
                    alt="I-Novotek"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={logo}
                    alt="I-Novotek"
                  />
                </Link>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  <Link
                    to="/register"
                    className="text-gray-300 cursor-pointer pt-1 pb-1 pr-3 pl-3 hover:bg-gray-700 hover:text-white">
                    Register
                  </Link>

                  <Link
                    to="/login"
                    className="text-gray-300 cursor-pointer pt-1 pb-1 pr-3 pl-3 hover:bg-gray-700 hover:text-white">
                    Login
                  </Link>

                  <Link
                    to="/about"
                    className="text-gray-300 cursor-pointer pt-1 pb-1 pr-3 pl-3 hover:bg-gray-700 hover:text-white">
                    About
                  </Link>
                  {/* Authenticated */}
                  <Link
                    to="/dashboard"
                    className="text-gray-300 cursor-pointer pt-1 pb-1 pr-3 pl-3 hover:bg-gray-700 hover:text-white">
                    Dashboard
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                {/* <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                    <PlusIcon
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    <span>New Bill</span>
                  </button>
                </div> */}

                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="relative inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 mr-3">
                    <PlusIcon
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    <span>New Project</span>
                  </button>
                </div>

                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="relative inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>

                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 w-full pt-2 pb-3 sm:px-3">
              <Link
                to="/register"
                className="text-gray-300 cursor-pointer pt-1 pb-1 pr-3 pl-3 hover:bg-gray-700 hover:text-white">
                Register
              </Link>
            </div>
            <div className="space-y-1 px-2 w-full pt-2 pb-3 sm:px-3">
              <Link
                to="/login"
                className="text-gray-300 cursor-pointer pt-1 pb-1 pr-3 pl-3 hover:bg-gray-700 hover:text-white">
                Login
              </Link>
            </div>
            <div className="space-y-1 px-2 w-full pt-2 pb-3 sm:px-3">
              <Link
                to="/about"
                className="text-gray-300 cursor-pointer pt-1 pb-1 pr-3 pl-3 hover:bg-gray-700 hover:text-white">
                About
              </Link>
            </div>
            <div className="space-y-1 px-2 w-full pt-2 pb-3 sm:px-3">
              {/* Authenticated */}
              <Link
                to="/dashboard"
                className="text-gray-300 cursor-pointer pt-1 pb-1 pr-3 pl-3 hover:bg-gray-700 hover:text-white">
                Dashboard
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
