/*Слайд для перехода при ошибке маршрутизации*/

import   React
       ,{
         Component
        }          from 'react'
import {
  Redirect
}                  from 'react-router-dom'
import {
  connect
}                  from 'react-redux'
import {
  calculateResult
}                  from './Actions'

export const slidePath = '/Error'
export const slideName = 'Error'

class ErrorSlide extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        Something went wrong. Push the back button to return to the start of the bonus calculator<br/>
      </div>
    )
  }
}

export default ErrorSlide
