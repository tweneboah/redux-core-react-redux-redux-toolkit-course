import React from "react";

const Home = () => {
  return (
    <>
      <section className="overflow-hidden">
        <div className="relative bg-gray-50 pt-20 pb-24 lg:py-40 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 flex items-center">
                <div className="w-full text-center lg:text-left">
                  <div className="relative max-w-md mx-auto lg:mx-0">
                    <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading">
                      <span> Keep your finances</span> {""}
                      <span className="text-purple-600">organized</span>
                    </h2>
                  </div>
                  <div className="relative max-w-sm mx-auto lg:mx-0">
                    <p className="mb-6 text-gray-400 leading-loose">
                      Easily track your income and expenses with this powerful
                      and user-friendly application.
                    </p>
                    <div>
                      <a
                        className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                        href="">
                        Get Started
                      </a>
                      <a
                        className="inline-block w-full lg:w-auto py-2 px-6 leading-loose font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200"
                        href="/">
                        Enroll in the Course
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <img
                  className="lg:absolute top-0 my-12 lg:my-0 h-full w-full lg:w-1/2 rounded-3xl lg:rounded-none object-cover"
                  src="https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="expenses"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        </div>
      </section>

      {/* Features */}

      <section>
        <div className="py-20 bg-gray-900 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="mb-16 max-w-md mx-auto text-center">
              <span className="text-purple-600 font-bold">
                INCOME & EXPENSES TRACKER
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading text-white">
                Get your finances in order
              </h2>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="mb-6 w-full lg:w-1/2 px-3">
                <div className="p-6 flex flex-wrap bg-gray-800 shadow-md rounded-lg">
                  <div>
                    <span className="mb-4 lg:mb-0 mr-6 inline-block p-3 md:p-5 rounded-lg bg-yellow-800">
                      <svg
                        className="h-8 w-8 md:w-12 md:h-12 text-yellow-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-full lg:w-2/3">
                    <h3 className="mb-2 text-2xl font-bold font-heading text-white">
                      finances under control
                    </h3>
                    <p className="text-gray-500">
                      Stop struggling to keep track of everything manually
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-6 w-full lg:w-1/2 px-3">
                <div className="p-6 flex flex-wrap bg-gray-800 shadow-md rounded-lg">
                  <div>
                    <span className="mb-4 lg:mb-0 mr-6 inline-block p-3 md:p-5 rounded-lg bg-pink-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-8 w-8 md:w-12 md:h-12 text-yellow-500">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-full lg:w-2/3">
                    <h3 className="mb-2 text-2xl font-bold font-heading text-white">
                      Project finances organized
                    </h3>
                    <p className="text-gray-500">
                      This app offers an easy way to track income and expenses
                      for any type of project.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-6 lg:mb-0 w-full lg:w-1/2 px-3">
                <div className="p-6 flex flex-wrap bg-gray-800 shadow-md rounded-lg">
                  <div>
                    <span className="mb-4 lg:mb-0 mr-6 inline-block p-3 md:p-5 rounded bg-blue-800">
                      <svg
                        className="h-8 w-8 md:w-12 md:h-12 text-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="w-full lg:w-2/3">
                    <h3 className="mb-2 text-2xl font-bold font-heading text-white">
                      Project Management on the Go
                    </h3>
                    <p className="text-gray-500">
                      Keep your project income and expenses organized with this
                      handy app.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-3">
                <div className="p-6 flex flex-wrap bg-gray-800 shadow-md rounded-lg">
                  <div>
                    <span className="mb-4 lg:mb-0 mr-6 inline-block p-3 md:p-5 rounded bg-purple-800">
                      <svg
                        className="h-8 w-8 md:w-12 md:h-12 text-purple-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                    </span>
                  </div>
                  <div className="w-full lg:w-2/3">
                    <h3 className="mb-2 text-2xl font-bold font-heading text-white">
                      Task Management Made Easy
                    </h3>
                    <p className="text-gray-500">
                      Keep your finances organized and under control with this
                      app.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
