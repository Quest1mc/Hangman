
import {NEW_HELLO_WORLD} from '../actions/test'
import { ADD_ALBUM } from '../actions/test'

export default (state = [], action = {}) => {
  switch(action.type){
      case NEW_HELLO_WORLD:
      return{
        ...action.payload}
      case ADD_ALBUM:
      return{
      ...action.payload
    }
  default:
    return state
} 
}