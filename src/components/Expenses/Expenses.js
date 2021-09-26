import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const filteredExpenses = expenses.filter(
    (expense) =>
      new Date(expense.date).getFullYear().toString() === selectedYear
  );

  const saveSelectChangeHandler = (yearSelected) => {
    setSelectedYear(yearSelected);
  };

  return (
    <li>
      <Card className="expenses">
        <div>
          <ExpensesFilter
            selected={selectedYear}
            onSelectChange={saveSelectChangeHandler}
          />
        </div>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
