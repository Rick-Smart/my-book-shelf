import { createAction, createReducer } from "@reduxjs/toolkit";
import initState from "./initState";

export const loadBooks = createAction("LOAD_BOOKS");
export const addBook = createAction("ADD_BOOK");
export const checkOutBook = createAction("CHECK_OUT_BOOK");
export const removeBook = createAction("REMOVE_BOOK");
export const focusBook = createAction("FOCUS_BOOK");

export default createReducer(initState, {
  [loadBooks.type]: (state, action) => {
    state.books = action.payload;
  },
  [addBook.type]: (state, action) => {
    state.books.unshift(action.payload);
    console.log(action);
  },
  [checkOutBook.type]: (state, action) => {
    state.focusedBook.checkedOut = !state.focusedBook.checkedOut;
    console.log(action);
  },
  [focusBook.type]: (state, action) => {
    state.focusedBook = action.payload;
  },
});
