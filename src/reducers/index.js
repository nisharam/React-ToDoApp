import { combineReducers } from 'redux';
import appReducer from './appReducer';
import LoginReducer from './loginReducer'
import todoReducer from './todoReducer';
// import reducers from the reducers export all, making this as root reducer
// export default combineReducers({
// })
// export default combineReducers({
//     appReducer,
//     LoginReducer,
//     todoReducer
// });

const rootReducer = combineReducers({
    appReducer,
    LoginReducer,
    todoReducer
});
export default rootReducer;