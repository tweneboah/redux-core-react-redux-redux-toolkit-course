import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from "../slice/accounts/accountsSlice";
import transactionsReducer from "../slice/transactions/transactionSlice";
import usersReducer from "../slice/users/usersSlice";

//store
const store = configureStore({
  reducer: {
    users: usersReducer,
    accounts: accountsReducer,
    transactions: transactionsReducer,
  },
});

export default store;
