import React from "react";
import { Link } from "react-router-dom";
import TransactionList from "./TransactionList";

const AccountDetails = () => {
  return (
    <>
      {/* Account Summary */}
      <section
        className="py-20 xl:pt-24 xl:pb-32 bg-white"
        style={{
          backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          backgroundPosition: "center",
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="text-center">
            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">
              Your Initial Balance is: $1000
            </span>
            <h3 className="mb-4 text-4xl md:text-5xl text-coolGray-900 font-bold tracking-tighter">
              Account Details
            </h3>
            <p className=" mx-auto mb-8 text-lg md:text-xl text-coolGray-500 font-medium max-w-4xl">
              Flex is the only business platform that lets you run your business
              on one platform, seamlessly across all digital channels.
            </p>
            <Link
              to={"/edit-account/1"}
              className="inline-flex text-center  mb-8 items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Edit Account
            </Link>
            <div className="flex flex-wrap justify-center -mx-4">
              <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
                <h2 className="mb-2 text-4xl md:text-5xl text-red-600 font-bold tracking-tighter">
                  $900
                </h2>
                <p className="text-lg md:text-xl text-coolGray-500 font-medium">
                  Expenses
                </p>
              </div>
              <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
                <h2 className="mb-2 text-4xl md:text-5xl text-coolGray-900 font-bold tracking-tighter">
                  $30.000
                </h2>
                <p className="text-lg md:text-xl text-green-500 font-medium">
                  Income
                </p>
              </div>
              <div className="w-full md:w-1/3 lg:w-1/4 px-4">
                <h2 className="mb-2 text-4xl md:text-5xl text-coolGray-900 font-bold tracking-tighter">
                  $ 500
                </h2>
                <p className="text-lg md:text-xl text-blue-500 font-medium">
                  Balance
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2rem",
              }}
            >
              <Link
                to={"/add-transaction/1"}
                type="button"
                className="inline-flex text-center items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add New Transaction
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TransactionList />
    </>
  );
};

export default AccountDetails;
