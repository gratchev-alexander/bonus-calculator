/*Корневой слайд - переводит на первый слайд с полем ввода*/

import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {calculateResult, goToNextSlide} from './Actions'

export const slidePath = '/'

const mapStateToProps = (state) => {
  return {
    redirectPath: state.NavigationReducer.redirectPath
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToNextSlide: (currentSlide) => dispatch(goToNextSlide(currentSlide))
  }
}

class ConnectedRootSlide extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.goToNextSlide({
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
      return(<div/>)
    }
  }
}

const RootSlide = connect(mapStateToProps, mapDispatchToProps)(ConnectedRootSlide)

export default RootSlide
