import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = (state = 0, action) => {
	console.log(state, action);
	/*
  state = 0 state의 default Value는 0이다.
	countModifier 즉, reducer는 action을 통해 데이터를 수정가능하다.
  action은 redux에서 함수를 부를 때 쓰는 두 번째 인자이다.
  dispatch를 통해 action을 보낼 수 있다.
  ex) reducer(state= 0{type: "ADD"})
  */
	if (action.type === "ADD") {
		return state + 1;
	}
	if (action.type === "MINUS") {
		return state - 1;
	}
	return state;
};
//reducer은 내 데이터를 수정할 수 있는 함수이다
//숫자가 increase증가 or decrease감소 할 수 있다.
//이곳에서 return하는 것은 뭐든지  내 app의 데이터가 된다.

const store = createStore(reducer);
//countStore
//store은 데이터를 저장하는곳

store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "ADD" });
store.dispatch({ type: "MINUS" });

console.log(store.getState());
