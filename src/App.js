import { useEffect, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const API_URL = "https://simpleapi-app.herokuapp.com/api/expenses";

function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    let response = await fetch(API_URL);
    const expenses = await response.json();
    console.log(expenses);
    setExpenses(expenses);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpenseHandler = async (expense) => {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(expense),
    });
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="container">
      <h1>My Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
