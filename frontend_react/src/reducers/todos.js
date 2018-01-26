import * as types from 'constants/ActionTypes';
import { List, Map } from 'immutable';
import { combineReducers } from 'redux';

const config = require('../config/config');

function todoList(state = List(), action) {
  switch (action.type) {
    case types.ADD_TODO:
      return state.push(Map({
        id: action.id,
        text: action.text,
        isCompleted: false,
      }));

    case types.COMPLETE_TODO:
      // map through todos to find matching ID
      return state.map(todo => {
        if (todo.get('id') === action.id) {
          return todo.update('isCompleted', v => !v);
        }
        return todo;
      });

    case types.DELETE_TODO:
      return state.filter(todo => todo.get('id') !== action.id);

    case types.DELETE_ALL_TODOS:
      return state.clear();

    default:
      return state;
  }
}


function auth(state, name, passwd){
  fetch(config.AUTH_API_URL_ENDPOINT + 'api/auth/token/obtain/', {
    method: 'POST',
    headers:  {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: name,
      password: passwd,
    }),
  }).then((response) => response.json())
  .then((responseJson) => {
    if(responseJson.success){
      localStorage.setItem(config.AUTH.LS_USER_TOKEN, responseJson.token);
      state.user = {isAuthorized: true, token: responseJson.token};
    } else{
      state.user = {isAuthorized: false};
    }
    return state;
  })
  .catch((error) => {
    console.error(error);
  });;
}


function authList(state = List(), action) {
  switch (action.type) {
    case types.LOGIN:
      console.log('LOG: ', action);
      auth(state, action.user, action.password);
      return action;
    case type.LOGOUT:
      console.log('logout', action);
      localStorage.removeItem(config.AUTH.LS_USER_TOKEN);
      return action;
    default:
      return state;
  }
}

export default combineReducers({
  authList,
  todoList,
});
