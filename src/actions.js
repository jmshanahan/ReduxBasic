import { CREATE_POST, EDIT_POST, SET_FILTER } from './actionTypes';
// This is an action creator and it is returning an action
export const createPost = (user, text) => { 
  return {type: CREATE_POST, user, text}
}
export const editPost = (id, text) => {
  return {type: EDIT_POST, id, text}
}
export const setFilter = (filter) => {return {type: SET_FILTER, filter}}



