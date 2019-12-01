/*Слайд для ввода коэффициента Банка*/

import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setBankCoeff, setBankCoeffDontKnow, goToNextSlide, goToPreviousSlide} from './Actions'

export const slidePath = '/BankCoeff'

const mapStateToProps = (state) => {
  return {
    bankCoeff: state.CalculationsReducer.bankCoeff
    ,userInputBankCoeff: state.CalculationsReducer.userInputBankCoeff
    ,bankCoeffInputDisabled: state.CalculationsReducer.bankCoeffInputDisabled
    ,bankCoeffValid: state.CalculationsReducer.bankCoeffValid
    ,redirectPath: state.NavigationReducer.redirectPath
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setBankCoeff: (bankCoeff) => dispatch(setBankCoeff(bankCoeff))
    ,setBankCoeffDontKnow: (dontKnow) => dispatch(setBankCoeffDontKnow(dontKnow))
    ,goToNextSlide: (currentSlide) => dispatch(goToNextSlide(currentSlide))
    ,goToPreviousSlide: (currentSlide) => dispatch(goToPreviousSlide(currentSlide))
  }
}

class ConnectedBankCoeffSlide extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
    this.handleCheckBox = this.handleCheckBox.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  handleChange = (event) => {
    this.props.setBankCoeff({
      userInputBankCoeff: event.target.value
    })
  }

  submit = () => {
    this.props.goToNextSlide({
      currentSlide: slidePath
    })
  }

  handleCheckBox = (event) => {
    this.props.setBankCoeffDontKnow({
      checkBoxStatus: event.target.checked
      ,userInputBankCoeff: this.props.userInputBankCoeff
    })
  }

  goBack = (event) => {
    this.props.goToPreviousSlide({
      currentSlide: slidePath
    })
  }

  render() {
    const {bankCoeff, userInputBankCoeff, bankCoeffInputDisabled, bankCoeffValid, redirectPath} = this.props

    if (redirectPath && redirectPath != slidePath) {
      return (
        <Redirect to={redirectPath}/>
      )
    } else {
      return (
        <div>
          <input type='text' name='bankCoeff' placeholder='Input bank coefficient' value={userInputBankCoeff} onChange={this.handleChange} disabled={bankCoeffInputDisabled}/>
          <input type='button' value='Submit' onClick={this.submit} disabled={!bankCoeffValid}/>
          <input type='checkbox' checked={bankCoeffInputDisabled} onChange={this.handleCheckBox}/><label>I don't know</label><br/>
          <input type='button' value='Go back' onClick={this.goBack}/>
        </div>
      )
    }
  }
}

const BankCoeffSlide = connect(mapStateToProps, mapDispatchToProps)(ConnectedBankCoeffSlide)

export default BankCoeffSlide
