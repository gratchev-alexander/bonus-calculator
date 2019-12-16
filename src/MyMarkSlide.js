/*Слайд для ввода самооценки*/

import   React
       ,{
         Component
        }          from 'react'
import {
  Redirect
}                  from 'react-router-dom'
import {
   RadioGroup
  ,Radio
}                  from 'react-radio-group'
import {
  connect
}                  from 'react-redux'
import {
  setMyMark
}                  from './Actions'
import {
   MARK_ENCODING
  ,MARK_FLOATING
  ,MY_MARK_TEXT
}                  from './Consts'

export const slidePath = '/MyMark'
export const slideName = 'My Mark'

const mapStateToProps = (state) => {
  return {
    myMark: state.CalculationsReducer.myMark
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setMyMark: (myMark) => dispatch(setMyMark(myMark))
  }
}

const Marks = () => {
  return (
    Object.keys(MARK_ENCODING).map((key) => {
      return (
        <div
          style={{float: MARK_FLOATING}}
        >
          <Radio
            value={key}
          /><label>{key}</label>
        </div>
      )
    })
  )
}

class ConnectedMyMarkSlide extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    this.props.setMyMark({
      myMark: event
    })
  }

  render() {
    const {
      myMark
    } = this.props

    return (
      <div>
        {MY_MARK_TEXT}<br/>
        <RadioGroup
          selectedValue={myMark}
          onChange={this.handleChange}
        >
          <Marks/>
        </RadioGroup>
      </div>
    )
  }
}

const MyMarkSlide = connect(mapStateToProps, mapDispatchToProps)(ConnectedMyMarkSlide)

export default MyMarkSlide
