import initState from "./initState";

export default function reducer(state = initState, action) {
  if (action.type === "ADD_BOOK") {
    return {
      ...state,
      books: [action.payload, ...state.books],
    };
  } else if (action.type === "CHECK_OUT_BOOK") {
    return {
      ...state,
      books: state.books.map((book) => {
        return book._id != action.payload.book._id;
      }),
    };
  } else return state;
}
