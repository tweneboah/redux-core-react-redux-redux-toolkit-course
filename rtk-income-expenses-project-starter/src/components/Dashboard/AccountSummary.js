import React from "react";

const AccountSummary = () => {
  return (
    <section className="py-20">
      <h1 style={{ textAlign: "center" }}>Account Summary</h1>
      <div className="container mx-auto px-4">
        <div className="py-4 flex flex-wrap items-center text-center rounded-lg border">
          <div className="py-4 w-full md:w-1/2 lg:w-1/4 border-b md:border-b-0 lg:border-r">
            <h4 className="mb-2 text-gray-500">Total Revenue</h4>
            <span className="text-3xl lg:text-4xl font-bold">$33,261</span>
          </div>
          <div className="py-4 w-full md:w-1/2 lg:w-1/4 border-b md:border-b-0 lg:border-r">
            <h4 className="mb-2 text-gray-500">Subscribers</h4>
            <span className="text-3xl lg:text-4xl font-bold">481,095</span>
          </div>
          <div className="py-4 w-full md:w-1/2 lg:w-1/4 border-b md:border-b-0 lg:border-r">
            <h4 className="mb-2 text-gray-500">Conversations</h4>
            <span className="text-3xl lg:text-4xl font-bold">643,533</span>
          </div>
          <div className="py-4 w-full md:w-1/2 lg:w-1/4">
            <h4 className="mb-2 text-gray-500">Modal Sale Rate</h4>
            <span className="text-3xl lg:text-4xl font-bold">25%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountSummary;
