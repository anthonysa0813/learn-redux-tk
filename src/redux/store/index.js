import { configureStore } from "@reduxjs/toolkit";
import results from "../reducers";

export default configureStore({
  reducer: results,
});
