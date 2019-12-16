/*Корневой слайд - переводит на первый слайд с полем ввода*/

import   React
       ,{
         Component
        }                 from 'react'
import {
  Redirect
}                         from 'react-router-dom'
import {
  slidePath as salaryPath
}                         from './SalarySlide'

export const slidePath = '/'
export const slideName = 'Root'

class RootSlide extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <Redirect
        to={salaryPath}
      />
    )
  }
}

export default RootSlide
