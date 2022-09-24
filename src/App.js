import "./App.css";
import AddExpense from "./components/AddExpense";
import ExpenseContainer from "./components/ExpenseContainer";

function App() {
  return (
    <>
      <div className="app">
        <div className="main">
          <AddExpense />
          <ExpenseContainer />
        </div>
      </div>
    </>
  );
}

export default App;
