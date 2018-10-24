import * as types from "../contants/ActionTypes";

var listToDo = (state = [], action) => {
    switch(action.type){
        case types.RECEIVE_API_LIST_TO_DO:
            return action.listToDo;
        default: 
            return state;
    }
}

export default listToDo;