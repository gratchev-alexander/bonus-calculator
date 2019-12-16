/*Слайд для ввода коэффициента команды*/

import   React
       ,{
         Component
        }               from 'react'
import {
  Redirect
}                       from 'react-router-dom'
import {
  connect
}                       from 'react-redux'
import {
   setTeamCoeff
  ,setTeamCoeffDontKnow
}                       from './Actions'
import {
   MAX_TEAM_COEFF
  ,INPUT_SIZE
  ,TEAM_PLACEHOLDER
  ,RIGHT_PARENTHESIS
  ,TEXT_INPUT_TYPE
  ,CHECBOX_INPUT_TYPE
  ,I_DONT_KNOW
}                       from './Consts'

export const slidePath = '/TeamCoeff'
export const slideName = 'Team Coeff'

const mapStateToProps = (state) => {
  return {
     userInputTeamCoeff    : state.CalculationsReducer.userInputTeamCoeff
    ,teamCoeffInputDisabled: state.CalculationsReducer.teamCoeffInputDisabled
  }
}

function mapDispatchToProps(dispatch) {
  return {
     setTeamCoeff        : (teamCoeff) => dispatch(setTeamCoeff(teamCoeff))
    ,setTeamCoeffDontKnow: (dontKnow)  => dispatch(setTeamCoeffDontKnow(dontKnow))
  }
}

class ConnectedTeamCoeffSlide extends Component {
  constructor(props) {
    super(props)

    this.handleChange   = this.handleChange.bind(this)
    this.handleCheckBox = this.handleCheckBox.bind(this)
  }

  handleChange = (event) => {
    this.props.setTeamCoeff({
      userInputTeamCoeff: event.target.value
    })
  }

  handleCheckBox = (event) => {
    this.props.setTeamCoeffDontKnow({
       checkBoxStatus    : event.target.checked
      ,userInputTeamCoeff: this.props.userInputTeamCoeff
    })
  }

  render() {
    const {
       userInputTeamCoeff
      ,teamCoeffInputDisabled
    } = this.props

    const placeholder = TEAM_PLACEHOLDER + MAX_TEAM_COEFF + RIGHT_PARENTHESIS

    return (
      <div>
        <input
          type={TEXT_INPUT_TYPE}
          placeholder={placeholder}
          value={userInputTeamCoeff}
          onChange={this.handleChange}
          disabled={teamCoeffInputDisabled}
          size={INPUT_SIZE}
        />
        <input
          type={CHECBOX_INPUT_TYPE}
          checked={teamCoeffInputDisabled}
          onChange={this.handleCheckBox}
        /><label>{I_DONT_KNOW}</label><br/>
      </div>
    )
  }
}

const TeamCoeffSlide = connect(mapStateToProps, mapDispatchToProps)(ConnectedTeamCoeffSlide)

export default TeamCoeffSlide
