import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = new Date(props.date).toLocaleString("en-us", {
    month: "short",
  });
  const day = new Date(props.date).toLocaleString("en-us", { day: "2-digit" });
  const year = new Date(props.date).getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
