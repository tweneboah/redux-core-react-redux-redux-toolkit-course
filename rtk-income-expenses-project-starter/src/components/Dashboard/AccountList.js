import React from "react";
import { Link } from "react-router-dom";

const AccountList = () => {
  return (
    <section
      className="py-24 bg-white"
      style={{
        backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
        backgroundPosition: "center",
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-12">
          <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-full shadow-sm">
            ACCOUNTS
          </span>
          <h3 className="mb-4 text-3xl md:text-4xl leading-tight font-medium text-coolGray-900 font-bold tracking-tighter">
            Account List
          </h3>
          <p className="text-lg md:text-xl text-coolGray-500 font-medium">
            Our philosophy is simple — hire a team of diverse, passionate people
            and foster a culture that empowers you to do you best work.
          </p>
        </div>
        <Link
          to={"/add-account"}
          className="inline-flex text-center  mb-8 items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add New Account
        </Link>
        {/* Loop */}
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <a className="group" href="#">
              <div className="bg-coolGray-50 group-hover:bg-coolGray-100 rounded-md shadow-md transition duration-200">
                <div className="flex flex-wrap items-start justify-between p-10 -mx-4">
                  <div className="w-full lg:w-2/3 px-4 mb-6 lg:mb-0">
                    <h3 className="mb-3 text-lg md:text-xl text-coolGray-800 group-hover:text-coolGray-900 font-semibold transition duration-200">
                      Front-end Developer
                    </h3>
                    <p className="text-coolGray-500 font-medium">
                      We’re looking for a mid-level Front-end Developer to join
                      our team.
                    </p>
                  </div>
                  <div className="w-full lg:w-1/3 px-4 lg:text-right">
                    <Link
                      to="/account/2"
                      className="inline-flex ml-auto items-center font-medium leading-6 text-green-500 group-hover:text-green-600 transition duration-200"
                    >
                      <span className="mr-2">View Job</span>
                      <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.71 10.71C13.801 10.6149 13.8724 10.5028 13.92 10.38C14.02 10.1365 14.02 9.86346 13.92 9.62C13.8724 9.49725 13.801 9.3851 13.71 9.29L10.71 6.29C10.5217 6.1017 10.2663 5.99591 10 5.99591C9.7337 5.99591 9.47831 6.1017 9.29 6.29C9.1017 6.4783 8.99591 6.7337 8.99591 7C8.99591 7.2663 9.1017 7.5217 9.29 7.71L10.59 9L7 9C6.73479 9 6.48043 9.10536 6.2929 9.29289C6.10536 9.48043 6 9.73478 6 10C6 10.2652 6.10536 10.5196 6.2929 10.7071C6.48043 10.8946 6.73479 11 7 11L10.59 11L9.29 12.29C9.19628 12.383 9.12188 12.4936 9.07111 12.6154C9.02034 12.7373 8.99421 12.868 8.99421 13C8.99421 13.132 9.02034 13.2627 9.07111 13.3846C9.12188 13.5064 9.19628 13.617 9.29 13.71C9.38297 13.8037 9.49357 13.8781 9.61543 13.9289C9.73729 13.9797 9.86799 14.0058 10 14.0058C10.132 14.0058 10.2627 13.9797 10.3846 13.9289C10.5064 13.8781 10.617 13.8037 10.71 13.71L13.71 10.71ZM20 10C20 8.02219 19.4135 6.08879 18.3147 4.4443C17.2159 2.79981 15.6541 1.51808 13.8268 0.761204C11.9996 0.00432792 9.98891 -0.193706 8.0491 0.192146C6.10929 0.577999 4.32746 1.53041 2.92894 2.92893C1.53041 4.32746 0.578004 6.10929 0.192152 8.0491C-0.1937 9.98891 0.00433294 11.9996 0.761209 13.8268C1.51809 15.6541 2.79981 17.2159 4.4443 18.3147C6.08879 19.4135 8.02219 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C17.9997 16.1425 18.7363 15.0401 19.2388 13.8268C19.7413 12.6136 20 11.3132 20 10ZM2 10C2 8.41775 2.4692 6.87103 3.34825 5.55544C4.2273 4.23985 5.47673 3.21446 6.93854 2.60896C8.40035 2.00346 10.0089 1.84504 11.5607 2.15372C13.1126 2.4624 14.538 3.22433 15.6569 4.34315C16.7757 5.46197 17.5376 6.88743 17.8463 8.43928C18.155 9.99113 17.9965 11.5997 17.391 13.0615C16.7855 14.5233 15.7602 15.7727 14.4446 16.6518C13.129 17.5308 11.5823 18 10 18C7.87827 18 5.84344 17.1571 4.34315 15.6569C2.84286 14.1566 2 12.1217 2 10Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* end */}
      </div>
    </section>
  );
};

export default AccountList;
