import { combineReducers } from "redux";
import user from './user_reducer';


// comment:: combineReducers 를 이용해서 rootReducer에 기능을 합쳐준다.
const rootReducer = combineReducers({
  user,
})

export default rootReducer;