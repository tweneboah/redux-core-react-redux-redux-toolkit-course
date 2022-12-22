import React from "react";

const AccountSummary = ({ profile }) => {
  //get all accounts
  const accounts = profile?.accounts;

  //get all transactions
  const transactions = accounts?.map((account) => account?.transactions);
  console.log(transactions);
  //total income
  const totalIncome = transactions?.reduce((acc, transaction) => {
    return (
      acc +
      transaction
        ?.filter((transaction) => transaction?.transactionType === "Income")
        .reduce((acc, transaction) => acc + transaction?.amount, 0)
    );
  }, 0);

  //total expenses
  const totalExpenses = transactions?.reduce((acc, transaction) => {
    return (
      acc +
      transaction
        ?.filter((transaction) => transaction?.transactionType === "Expenses")
        .reduce((acc, transaction) => acc + transaction?.amount, 0)
    );
  }, 0);

  console.log(totalExpenses);
  return (
    <>
      {profile?.accounts?.length <= 0 ? (
        <h2 className="text-center text-3xl mt-5">No Account Summary Found</h2>
      ) : (
        <section className="py-20">
          <h1 className="text-3xl text-center mb-5 text-indigo-600">
            Account Summary - for {profile?.accounts?.length} accounts
          </h1>
          <div className="container mx-auto px-4">
            <div className="py-4 flex flex-wrap items-center text-center rounded-lg border">
              <div className="py-4 w-full md:w-1/2 lg:w-1/4 border-b md:border-b-0 lg:border-r">
                <h4 className="mb-2 text-gray-500">Total Income</h4>
                <span className="text-3xl lg:text-4xl text-green-600 font-bold">
                  $ {totalIncome}
                </span>
              </div>
              <div className="py-4 w-full md:w-1/2 lg:w-1/4 border-b md:border-b-0 lg:border-r">
                <h4 className="mb-2 text-gray-500">Total Expenses</h4>
                <span className="text-3xl text-red-600 lg:text-4xl font-bold">
                  $ {totalExpenses}
                </span>
              </div>
              <div className="py-4 w-full md:w-1/2 lg:w-1/4 border-b md:border-b-0 lg:border-r">
                <h4 className="mb-2 text-gray-500">Total Balance</h4>
                <span className="text-3xl lg:text-4xl text-indigo-600 font-bold">
                  $ {totalIncome - totalExpenses}
                </span>
              </div>
              <div className="py-4 w-full md:w-1/2 lg:w-1/4">
                <h4 className="mb-2 text-gray-500">Total Transactions</h4>
                <span className="text-3xl lg:text-4xl font-bold">
                  {transactions?.length}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AccountSummary;
