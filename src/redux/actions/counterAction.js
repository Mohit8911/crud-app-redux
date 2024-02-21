import { decrementCounter, incrementCounter } from "../reducers/counterReducer";
import { store } from "../store";

const dispatch = store.dispatch;

export default {
  increment: () => {
    dispatch(incrementCounter(1));
  },
  decrement: () => {
    dispatch(decrementCounter(1));
  },
};
