import { createStore } from "redux";
import rootReducer from "./reducer";
import { applyMiddleware } from "redux";
import { DEPOSIT, DRAW } from "./action";
// Tạo middleware myMiddleware
const middleware =(store) => (next) =>(action) =>{
    if(action.type == DEPOSIT){
        alert('Bạn được cộng thêm 10$');
       
    }
    if(action.type == DRAW){
        alert('Bạn đã rút 10$');
    }       

    next(action);
    // const store = createStore(rootReducer);
    
}
const store = createStore(rootReducer,applyMiddleware(middleware))
export default store;