/*Слайд для ввода коэффициента команды*/

import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {setTeamCoeff, setTeamCoeffDontKnow, goToNextSlide, goToPreviousSlide} from './Actions'

export const slidePath = '/TeamCoeff'

const mapStateToProps = (state) => {
  return {
    teamCoeff: state.CalculationsReducer.teamCoeff
    ,userInputTeamCoeff: state.CalculationsReducer.userInputTeamCoeff
    ,teamCoeffInputDisabled: state.CalculationsReducer.teamCoeffInputDisabled
    ,teamCoeffValid: state.CalculationsReducer.teamCoeffValid
    ,redirectPath: state.NavigationReducer.redirectPath
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setTeamCoeff: (teamCoeff) => dispatch(setTeamCoeff(teamCoeff))
    ,setTeamCoeffDontKnow: (dontKnow) => dispatch(setTeamCoeffDontKnow(dontKnow))
    ,goToNextSlide: (currentSlide) => dispatch(goToNextSlide(currentSlide))
    ,goToPreviousSlide: (currentSlide) => dispatch(goToPreviousSlide(currentSlide))
  }
}

class ConnectedTeamCoeffSlide extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
    this.handleCheckBox = this.handleCheckBox.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  handleChange = (event) => {
    this.props.setTeamCoeff({
      userInputTeamCoeff: event.target.value
    })
  }

  submit = () => {
    this.props.goToNextSlide({
      currentSlide: slidePath
    })
  }

  handleCheckBox = (event) => {
    this.props.setTeamCoeffDontKnow({
      checkBoxStatus: event.target.checked
      ,userInputTeamCoeff: this.props.userInputTeamCoeff
    })
  }

  goBack = (event) => {
    this.props.goToPreviousSlide({
      currentSlide: slidePath
    })
  }

  render() {
    const {teamCoeff, userInputTeamCoeff, teamCoeffInputDisabled, teamCoeffValid, redirectPath} = this.props

    if (redirectPath && redirectPath != slidePath) {
      return (
        <Redirect to={redirectPath}/>
      )
    } else {
      return (
        <div>
          <input type='text' name='teamCoeff' placeholder='Input team coefficient' value={userInputTeamCoeff} onChange={this.handleChange} disabled={teamCoeffInputDisabled}/>
          <input type='button' value='Submit' onClick={this.submit} disabled={!teamCoeffValid}/>
          <input type='checkbox' checked={teamCoeffInputDisabled} onChange={this.handleCheckBox}/><label>I don't know</label><br/>
          <input type='button' value='Go back' onClick={this.goBack}/>
        </div>
      )
    }
  }
}

const TeamCoeffSlide = connect(mapStateToProps, mapDispatchToProps)(ConnectedTeamCoeffSlide)

export default TeamCoeffSlide
