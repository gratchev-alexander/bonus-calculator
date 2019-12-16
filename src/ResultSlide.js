/*Результирующий слайд*/

import   React
       ,{
         Component
        }            from 'react'
import {
  Redirect
}                    from 'react-router-dom'
import {
  connect
}                    from 'react-redux'
import {
   calculateResult
  ,setBankCoeff
  ,setTeamCoeff
}                    from './Actions'
import {
   MIN_BANK_COEFF
  ,MAX_BANK_COEFF
  ,MIN_TEAM_COEFF
  ,MAX_TEAM_COEFF
  ,SLIDER_WIDTH
  ,SLIDER_MARGIN
  ,SLIDER_STEP
  ,BONUS_FONT_WEIGHT
  ,CURRENCY
  ,RESULT_SALARY
  ,RESULT_BANK_COEFF
  ,RESULT_TEAM_COEFF
  ,RESULT_MY_MARK
  ,RESULT_BONUS
  ,LEFT_PARENTHESIS
  ,RIGHT_PARENTHESIS
}                    from './Consts'
import Slider        from 'rc-slider'
import Tooltip       from 'rc-tooltip'
import                    'rc-slider/assets/index.css'
import                    'rc-tooltip/assets/bootstrap.css'

export const slidePath = '/Result'
export const slideName = 'Result'

const mapStateToProps = (state) => {
  return {
     salary       : state.CalculationsReducer.salary
    ,bankCoeff    : state.CalculationsReducer.bankCoeff
    ,teamCoeff    : state.CalculationsReducer.teamCoeff
    ,myMarkDigital: state.CalculationsReducer.myMarkDigital
    ,myMark       : state.CalculationsReducer.myMark
    ,bonus        : state.CalculationsReducer.bonus
  }
}

function mapDispatchToProps(dispatch) {
  return {
     calculateResult: (params)    => dispatch(calculateResult(params))
    ,setBankCoeff   : (bankCoeff) => dispatch(setBankCoeff(bankCoeff))
    ,setTeamCoeff   : (teamCoeff) => dispatch(setTeamCoeff(teamCoeff))
  }
}

class ConnectedResultSlide extends Component {
  constructor(props) {
    super(props)

    this.handleBankCoeffChange = this.handleBankCoeffChange.bind(this)
    this.handleTeamCoeffChange = this.handleTeamCoeffChange.bind(this)
  }

  componentDidMount() {
    this.props.calculateResult({})
  }

  handle = (props) => {
    const {
       value
      ,dragging
      ,index
      ,...restProps
    } = props

    return (
      <Tooltip
        prefixCls='rc-slider-tooltip'
        overlay={value}
        visible={dragging}
        placement='top'
        key={index}
      >
        <Slider.Handle
          value={value} {...restProps}
        />
      </Tooltip>
    )
  }

  handleBankCoeffChange = (props) => {
    this.props.setBankCoeff({
      userInputBankCoeff: props
    })
    this.props.calculateResult({})
  }

  handleTeamCoeffChange = (props) => {
    this.props.setTeamCoeff({
      userInputTeamCoeff: props
    })
    this.props.calculateResult({})
  }

  render() {
    const {
       salary
      ,bankCoeff
      ,teamCoeff
      ,myMark
      ,myMarkDigital
      ,bonus
    } = this.props

    const sliderStyle = {
       width : SLIDER_WIDTH
      ,margin: SLIDER_MARGIN
    }

    return(
      <div>
        <div>
          <label>
            {RESULT_SALARY}{salary} {salary ? CURRENCY : null}
          </label>
        </div>
        <br/>
        <div>
          <label>
            {RESULT_BANK_COEFF}{bankCoeff}
          </label>
          <div
            style={sliderStyle}
          >
            <Slider
              min={MIN_BANK_COEFF}
              max={MAX_BANK_COEFF}
              handle={this.handle}
              step={SLIDER_STEP}
              onChange={this.handleBankCoeffChange}
              value={bankCoeff}
            />
          </div>
        </div>
        <div>
          <label>
            {RESULT_TEAM_COEFF}{teamCoeff}
          </label>
          <div
            style={sliderStyle}
          >
            <Slider
              min={MIN_TEAM_COEFF}
              max={MAX_TEAM_COEFF}
              handle={this.handle}
              step={SLIDER_STEP}
              onChange={this.handleTeamCoeffChange}
              value={teamCoeff}
            />
          </div>
        </div>
        <div>
          <label>
            {RESULT_MY_MARK}{myMark} {myMark ? LEFT_PARENTHESIS + myMarkDigital + RIGHT_PARENTHESIS : null}
          </label>
        </div>
        <br/>
        <div
          style={
            {
              fontWeight: BONUS_FONT_WEIGHT
            }
          }
        >
          <label>
            {RESULT_BONUS}{bonus} {bonus ? CURRENCY : null}
          </label>
        </div>
      </div>
    )
  }
}

const ResultSlide = connect(mapStateToProps, mapDispatchToProps)(ConnectedResultSlide)

export default ResultSlide
