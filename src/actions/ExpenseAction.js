export const AddNewExpense = (newExpense) => {
  return {
    type: "ADD_NEW_EXPENSE",
    payload: newExpense,
  };
};

export const DeleteExpense = (id) => {
  return {
    type: "DELETE_EXPENSE",
    payload: id,
  };
};
export const EditExpense = (data) => {
  return {
    type: "EDIT_EXPENSE",
    payload: { data },
  };
};
