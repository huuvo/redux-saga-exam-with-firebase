import * as types from "../contants/ActionTypes";

export const requestApiListToDo = () => (
    {
        type: types.REQUEST_API_LIST_TO_DO
    }
)

export const requestAddItem = (value) => (
    {
        type: types.REQUEST_ADD_ITEM,
        value
    }
)

export const requestDeleteItem = (key) => (
    {
        type: types.REQUEST_DELETE_ITEM,
        key
    }
)

export const requestEditItem = (key, value) => (
    {
        type: types.REQUEST_EDIT_ITEM,
        key,
        value
    }
)