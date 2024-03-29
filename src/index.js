import React             from 'react'
import ReactDOM          from 'react-dom'
import App               from './App'
import {
   createStore
  ,applyMiddleware
}                        from 'redux'
import AllReducers       from './Reducers'
import {
  Provider
}                        from 'react-redux'
import {
  calculationsMiddleware
}                        from './CalculationsMiddleware'
import                        './index.css'

const store = createStore(AllReducers, applyMiddleware(calculationsMiddleware))

ReactDOM.render(
  <Provider
    store={store}
  >
    <App/>
  </Provider>,
  document.getElementById('root')
)

export default store
