import { createStore} from "redux";
import statsReducer from "./reducers/stats";


const store = createStore(statsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store