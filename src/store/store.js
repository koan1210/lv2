// store.js

import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import todoReducer from "./reducers/todoReducer";

const store = createStore(todoReducer);

const App = () => {
  return (
    <Provider store={store}>{/* 라우팅 설정과 컴포넌트 렌더링 */}</Provider>
  );
};

export default App;
