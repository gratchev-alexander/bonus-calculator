/*Слайд для ввода зарплаты*/

import   React
       ,{
         Component
        }             from 'react'
import {
   Redirect
  ,Link
  ,Route
}                     from 'react-router-dom'
import {
  connect
}                     from 'react-redux'
import {
  setSalary
}                     from './Actions'
import {
   INPUT_SIZE
  ,CURRENCY
  ,SALARY_PLACEHOLDER
  ,TEXT_INPUT_TYPE
}                     from './Consts'

export const slidePath = '/Salary'
export const slideName = 'Salary'

const mapStateToProps = (state) => {
  return {
    salary: state.CalculationsReducer.salary
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSalary: (salary) => dispatch(setSalary(salary))
  }
}

class ConnectedSalarySlide extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    this.props.setSalary({
      salary: event.target.value
    })
  }

  render() {
    const {
      salary
          } = this.props

    return (
      <div>
        <input
          type={TEXT_INPUT_TYPE}
          placeholder={SALARY_PLACEHOLDER}
          value={salary}
          onChange={this.handleChange}
          size={INPUT_SIZE}
        /> {CURRENCY}
      </div>
    )
  }
}

const SalarySlide = connect(mapStateToProps, mapDispatchToProps)(ConnectedSalarySlide)

export default SalarySlide
