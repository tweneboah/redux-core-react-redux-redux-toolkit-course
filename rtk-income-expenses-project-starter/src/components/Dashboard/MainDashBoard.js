import React from "react";
import AccountList from "./AccountList";
import AccountSummary from "./AccountSummary";

const MainDashBoard = () => {
  return (
    <>
      <AccountSummary />
      <AccountList />
    </>
  );
};

export default MainDashBoard;
