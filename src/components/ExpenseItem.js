import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteIcon, editIcon } from "../icons";
import { DeleteExpense } from "../actions/ExpenseAction";
import { Modal } from "react-bootstrap";
import EditExpenseForm from "./EditExpenseForm";

function ExpenseItem() {
  const dispatch = useDispatch();
  const { expenses } = useSelector((store) => store);

  const [show, setShow] = useState(false);
  const [editExpense, setEditExpense] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setEditExpense(data);
    setShow(true);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditExpenseForm editExpense={editExpense} hide={handleClose} />
        </Modal.Body>
      </Modal>
      {expenses?.map((item) => {
        const { id, title, date, time, amount, category } = item;
        return (
          <article key={id} className="expense-item">
            <h3>Item: {title}</h3>
            <p>Amount :${amount}</p>
            <p>Category: {category}</p>
            <button
              className="delete-btn"
              onClick={() => dispatch(DeleteExpense(id))}
            >
              {deleteIcon}
            </button>
            <div className="dates">
              <div className="date-added">
                <p>Date Added:</p>
                <h6>{time}</h6>
                <h6>{date}</h6>
              </div>
              {item.dateMod && (
                <div className="date-modified">
                  <p>Date Modified:</p>
                  <h6>{item.timeMod}</h6>
                  <h6>{item.dateMod}</h6>
                </div>
              )}
            </div>
            <button className="edit-btn" onClick={() => handleShow(item)}>
              {editIcon}
            </button>
          </article>
        );
      })}
    </>
  );
}

export default ExpenseItem;
