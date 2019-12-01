/*Слайд для ввода зарплаты*/

import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {setSalary, goToNextSlide} from './Actions'

export const slidePath = '/Salary'

const mapStateToProps = (state) => {
  return {
    salary: state.CalculationsReducer.salary
    ,salaryValid: state.CalculationsReducer.salaryValid
    ,redirectPath: state.NavigationReducer.redirectPath
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSalary: (salary) => dispatch(setSalary(salary))
    ,goToNextSlide: (currentSlide) => dispatch(goToNextSlide(currentSlide))
  }
}

class ConnectedSalarySlide extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleChange = (event) => {
    this.props.setSalary({salary: event.target.value})
  }

  submit = () => {
    this.props.goToNextSlide({
      currentSlide: slidePath
    })
  }

  render() {
    const {salary, salaryValid, redirectPath} = this.props

    if (redirectPath && redirectPath != slidePath) {
      return (
        <Redirect to={redirectPath}/>
      )
    } else {
      return (
        <div>
          <input type='text' name='salary' placeholder='Input salary' value={salary} onChange={this.handleChange}/> RUB
          <input type='button' value='Submit' onClick={this.submit} disabled={!salaryValid}/>
        </div>
      )
    }
  }
}

const SalarySlide = connect(mapStateToProps, mapDispatchToProps)(ConnectedSalarySlide)

export default SalarySlide
