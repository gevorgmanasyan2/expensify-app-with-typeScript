import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import "./styles/styles.css";
import App from "./App";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import AppRouter from "../src/router/AppRouter";
import reportWebVitals from "./reportWebVitals";
import "react-dates/lib/css/_datepicker.css";
import LoadingPage from "./components/LoadingPage";
import reactDom from "react-dom";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 1500 }));
store.dispatch(
  addExpense({ description: "Gaz bill", amount: 800, createdAt: 1000 })
);
store.dispatch(addExpense({ description: "Rent", amount: 109500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
const jsx = (
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(jsx, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
