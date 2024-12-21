// redux의 store, reducer를 통한 "hello" or 1 return

import { createStore } from "redux";

const countModifier = (count = 0) => {
    return count;
}

const countStore = createStore(countModifier);
console.log(countStore.getState());

