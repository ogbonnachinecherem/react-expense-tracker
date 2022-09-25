import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { AddNewExpense } from "../actions/ExpenseAction";
import { bars } from "../icons";

function AddExpense() {
  const dispatch = useDispatch();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(
    `${new Date().getDate()}/${
      new Date().getMonth() + 1
    }/${new Date().getFullYear()}`
  );
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !category) {
      setMsg("All fields are Required!");
      setTimeout(() => {
        setMsg("");
      }, 2000);
    } else {
      dispatch(
        AddNewExpense({ id: uuidv4(), title, date, time, amount, category })
      );
      setMsg("Expense Added Successfully!");
      setAmount(0);
      setTitle("");
      setCategory("");
      setTimeout(() => {
        setMsg("");
      }, 2000);
      setTitle("");
      setAmount("");
    }
  };
  return (
    <>
      <span className="bars" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        {bars}
      </span>
      <form className={isSidebarOpen ? "expense-form" : "hide-form"}>
        <h2>Expense Tracker</h2>
        <label htmlFor="title">Item | Service</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          type="text"
          id="date"
          disabled
          value={`${new Date().getDate()}/${
            new Date().getMonth() + 1
          }/${new Date().getFullYear()}`}
        />
        <label htmlFor="amount">Amount</label>
        <div className="amount">
          <p>$</p>
          <input
            type="number"
            name="amount"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Select</option>
          <option value="Food">Food</option>
          <option value="Drink">Drink</option>
          <option value="Accommodation">Accommodation</option>
          <option value="Transportation">Transportation</option>
          <option value="Housing">Housing</option>
          <option value="Rent">Rent</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
        <button
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
            setIsSidebarOpen(false);
          }}
        >
          Save
        </button>
        <h3>{msg}</h3>
      </form>
    </>
  );
}

export default AddExpense;