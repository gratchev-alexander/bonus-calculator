/*Слайд для ввода коэффициента Банка*/

import   React
       ,{
         Component
        }               from 'react'
import {
   Redirect
  ,Link
}                       from 'react-router-dom'
import {
  connect
}                       from 'react-redux'
import {
   setBankCoeff
  ,setBankCoeffDontKnow
}                       from './Actions'
import {
   MAX_BANK_COEFF
  ,INPUT_SIZE
  ,BANK_PLACEHOLDER
  ,RIGHT_PARENTHESIS
  ,TEXT_INPUT_TYPE
  ,CHECBOX_INPUT_TYPE
  ,I_DONT_KNOW
}                       from './Consts'

export const slidePath = '/BankCoeff'
export const slideName = 'Bank Coeff'

const mapStateToProps = (state) => {
  return {
     userInputBankCoeff    : state.CalculationsReducer.userInputBankCoeff
    ,bankCoeffInputDisabled: state.CalculationsReducer.bankCoeffInputDisabled
  }
}

function mapDispatchToProps(dispatch) {
  return {
     setBankCoeff        : (bankCoeff) => dispatch(setBankCoeff(bankCoeff))
    ,setBankCoeffDontKnow: (dontKnow)  => dispatch(setBankCoeffDontKnow(dontKnow))
  }
}

class ConnectedBankCoeffSlide extends Component {
  constructor(props) {
    super(props)

    this.handleChange   = this.handleChange.bind(this)
    this.handleCheckBox = this.handleCheckBox.bind(this)
  }

  handleChange = (event) => {
    this.props.setBankCoeff({
      userInputBankCoeff: event.target.value
    })
  }

  handleCheckBox = (event) => {
    this.props.setBankCoeffDontKnow({
       checkBoxStatus    : event.target.checked
      ,userInputBankCoeff: this.props.userInputBankCoeff
    })
  }

  render() {
    const {
       userInputBankCoeff
      ,bankCoeffInputDisabled
    } = this.props

    const placeholder = BANK_PLACEHOLDER + MAX_BANK_COEFF + RIGHT_PARENTHESIS

    return (
      <div>
        <input
          type={TEXT_INPUT_TYPE}
          placeholder={placeholder}
          value={userInputBankCoeff}
          onChange={this.handleChange}
          disabled={bankCoeffInputDisabled}
          size={INPUT_SIZE}
        />
        <input
          type={CHECBOX_INPUT_TYPE}
          checked={bankCoeffInputDisabled}
          onChange={this.handleCheckBox}
        /><label>{I_DONT_KNOW}</label><br/>
      </div>
    )
  }
}

const BankCoeffSlide = connect(mapStateToProps, mapDispatchToProps)(ConnectedBankCoeffSlide)

export default BankCoeffSlide
