/*Слайд для ввода самооценки*/

import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {RadioGroup, Radio} from 'react-radio-group'
import {connect} from 'react-redux'
import {setMyMark, goToNextSlide, goToPreviousSlide} from './Actions'
import {MARK_ENCODING} from './Consts'

export const slidePath = '/MyMark'

const mapStateToProps = (state) => {
  return {
    myMark: state.CalculationsReducer.myMark
    ,myMarkValid: state.CalculationsReducer.myMarkValid
    ,redirectPath: state.NavigationReducer.redirectPath
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setMyMark: (myMark) => dispatch(setMyMark(myMark))
    ,goToNextSlide: (currentSlide) => dispatch(goToNextSlide(currentSlide))
    ,goToPreviousSlide: (currentSlide) => dispatch(goToPreviousSlide(currentSlide))
  }
}

const Marks = () => {
  return (
    Object.keys(MARK_ENCODING).map((key) => {
      return (
        <div>
          <Radio value={key}/><label>{key}</label>
        </div>
      )
    })
  )
}

class ConnectedMyMarkSlide extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  submit = () => {
    this.props.goToNextSlide({
      currentSlide: slidePath
    })
  }

  handleChange = (event) => {
    this.props.setMyMark({myMark: event})
  }

  goBack = (event) => {
    this.props.goToPreviousSlide({
      currentSlide: slidePath
    })
  }

  render() {
    const {myMark, myMarkValid, redirectPath} = this.props

    if (redirectPath && redirectPath != slidePath) {
      return (
        <Redirect to={redirectPath}/>
      )
    } else {
      return (
        <div>
          Select your mark:<br/>
          <RadioGroup name='mark' selectedValue={myMark} onChange={this.handleChange}>
            <Marks/>
          </RadioGroup>
          <input type='button' value='Submit' onClick={this.submit} disabled={!myMarkValid}/><br/>
          <input type='button' value='Go back' onClick={this.goBack}/>
        </div>
      )
    }
  }
}

const MyMarkSlide = connect(mapStateToProps, mapDispatchToProps)(ConnectedMyMarkSlide)

export default MyMarkSlide
