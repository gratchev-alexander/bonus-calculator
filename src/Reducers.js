import {combineReducers} from 'redux'
import NavigationReducer from './NavigationReducer'
import CalculationsReducer from './CalculationsReducer'

const AllReducers = combineReducers({
  NavigationReducer
  ,CalculationsReducer
})

export default AllReducers
