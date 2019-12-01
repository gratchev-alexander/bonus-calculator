/*Результирующий слайд*/

import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {calculateResult, goToPreviousSlide} from './Actions'

export const slidePath = '/Result'

const mapStateToProps = (state) => {
  return {
    salary: state.CalculationsReducer.salary
    ,bankCoeff: state.CalculationsReducer.bankCoeff
    ,teamCoeff: state.CalculationsReducer.teamCoeff
    ,myMarkDigital: state.CalculationsReducer.myMarkDigital
    ,myMark: state.CalculationsReducer.myMark
    ,bonus: state.CalculationsReducer.bonus
    ,redirectPath: state.NavigationReducer.redirectPath
  }
}

function mapDispatchToProps(dispatch) {
  return {
    calculateResult: (params) => dispatch(calculateResult(params))
    ,goToPreviousSlide: (currentSlide) => dispatch(goToPreviousSlide(currentSlide))
  }
}

class ConnectedResultSlide extends Component {
  constructor(props) {
    super(props)

    this.goBack = this.goBack.bind(this)
  }

  componentDidMount() {
    this.props.calculateResult({})
  }

  goBack = (event) => {
    this.props.goToPreviousSlide({
      currentSlide: slidePath
    })
  }

  render() {
    const {salary, bankCoeff, teamCoeff, myMark, myMarkDigital, bonus, redirectPath} = this.props

    if (redirectPath && redirectPath != slidePath) {
      return (
        <Redirect to={redirectPath}/>
      )
    } else {
      return(
        <div>
          Result:<br/>
          <label>Salary: {salary} RUB</label><br/>
          <label>Bank coeff: {bankCoeff}</label><br/>
          <label>Team coeff: {teamCoeff}</label><br/>
          <label>My mark: {myMark} ({myMarkDigital})</label><br/>
          <label>Bonus: {bonus} RUB</label><br/>
          <input type='button' value='Go back' onClick={this.goBack}/>
        </div>
      )
    }
  }
}

const ResultSlide = connect(mapStateToProps, mapDispatchToProps)(ConnectedResultSlide)

export default ResultSlide
