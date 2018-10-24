import { call, put, takeEvery } from "redux-saga/effects";
import * as types from "./contants/ActionTypes";
import * as api from "./api/api";

function* getApiListToDo(){ 
    try{
        const listToDo = yield call(api.fetchListToDo);
        yield put({
            type: types.RECEIVE_API_LIST_TO_DO,
            listToDo: listToDo
        });
    } catch (error) {
        console.log(error);
    }
}

function* addItem(action){
    try{
        yield call(api.postItem, action.value);
        yield put({
            type: types.REQUEST_API_LIST_TO_DO
        })
    } catch (error) {
        console.log(error);
    }
}

function* deleteItem(action){
    try{
        yield call(api.deleteItem, action.key);
        yield put({
            type: types.REQUEST_API_LIST_TO_DO
        })
    } catch (error) {
        console.log(error);
    }
}

function* editItem(action){
    try{
        yield call(api.putItem, action.key, action.value);
        yield put({
            type: types.REQUEST_API_LIST_TO_DO
        })
    } catch (error) {
        console.log(error);
    }
}

export default function* mySaga(){
    yield takeEvery(types.REQUEST_API_LIST_TO_DO, getApiListToDo);
    yield takeEvery(types.REQUEST_ADD_ITEM, addItem);
    yield takeEvery(types.REQUEST_DELETE_ITEM, deleteItem);
    yield takeEvery(types.REQUEST_EDIT_ITEM, editItem);
}