/*Слайд для перехода при ошибке маршрутизации*/

import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {calculateResult, goToPreviousSlide} from './Actions'

export const slidePath = '/Error'

const mapStateToProps = (state) => {
  return {
    redirectPath: state.NavigationReducer.redirectPath
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToPreviousSlide: (currentSlide) => dispatch(goToPreviousSlide(currentSlide))
  }
}

class ConnectedErrorSlide extends Component {
  constructor(props) {
    super(props)

    this.goToPreviousSlide = this.goToPreviousSlide.bind(this)
  }

  goToPreviousSlide = (event) => {
    this.props.goToPreviousSlide({
      currentSlide: slidePath
    })
  }

  render() {
    const {redirectPath} = this.props

    if (redirectPath && redirectPath != slidePath) {
      return (
        <Redirect to={redirectPath}/>
      )
    } else {
      return(
        <div>
          Something went wrong. Push the button to return to the start of the bonus calculator<br/>
          <input type='button' value='Return to start' onClick={this.goToPreviousSlide}/>
        </div>
      )
    }
  }
}

const ErrorSlide = connect(mapStateToProps, mapDispatchToProps)(ConnectedErrorSlide)

export default ErrorSlide
