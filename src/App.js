/*Приложение - отрисовывает меню переключения между слайдами и текущий слайд*/

import  React
      ,{
        Component
       }                             from 'react'
import   SalarySlide
       ,{
          slidePath as salaryPath
         ,slideName as salaryName
        }                            from './SalarySlide'
import   BankCoeffSlide
       ,{
          slidePath as bankCoeffPath
         ,slideName as bankCoeffName
        }                            from './BankCoeffSlide'
import   TeamCoeffSlide
       ,{
          slidePath as teamCoeffPath
         ,slideName as teamCoeffName
        }                            from './TeamCoeffSlide'
import   MyMarkSlide
       ,{
          slidePath as myMarkPath
         ,slideName as myMarkName
        }                            from './MyMarkSlide'
import  ResultSlide
      ,{
         slidePath as resultPath
        ,slideName as resultName
       }                             from './ResultSlide'
import   ErrorSlide
       ,{
          slidePath as errorPath
         ,slideName as errorName
        }                            from './ErrorSlide'
import   RootSlide
       ,{
          slidePath as rootPath
         ,slideName as rootName
        }                            from './RootSlide'
import {
   HashRouter
  ,Route
  ,Link
}                                    from 'react-router-dom'
import {
  connect
}                                    from 'react-redux'
import {
   LINK_WIDTH
  ,LINK_FLOATING
  ,LINK_TEXT_ALIGN
  ,LINK_BORDER
}                                    from './Consts'

/*Параметры слайдов - начало*/
const VISIBLE_SLIDES = {
   salarySlide: {
      slidePath: salaryPath
     ,slideName: salaryName
     ,component: SalarySlide
     ,exact    : false
   }
  ,bankCoeffSlide: {
     slidePath: bankCoeffPath
    ,slideName: bankCoeffName
    ,component: BankCoeffSlide
    ,exact    : false
  }
  ,teamCoeffSlide: {
     slidePath: teamCoeffPath
    ,slideName: teamCoeffName
    ,component: TeamCoeffSlide
    ,exact    : false
  }
  ,myMarkSlide: {
     slidePath: myMarkPath
    ,slideName: myMarkName
    ,component: MyMarkSlide
    ,exact    : false
  }
  ,resultSlide: {
     slidePath: resultPath
    ,slideName: resultName
    ,component: ResultSlide
    ,exact    : false
  }
}

const ALL_SLIDES = {
   rootSlide : {
      slidePath: rootPath
     ,slideName: rootName
     ,component: RootSlide
     ,exact    : true
   }
  ,errorSlide: {
     slidePath: errorPath
    ,slideName: errorName
    ,component: ErrorSlide
    ,exact    : false
  }
  ,...VISIBLE_SLIDES
}
/*Параметры слайдов - окончание*/

/*Признак возможности перехода на слайд (на другой слайд можно перейти, если на текущем нет ошибок)*/
const mapStateToProps = (state) => {
  return {
     showSalary   : state.CalculationsReducer.showSalary
    ,showBankCoeff: state.CalculationsReducer.showBankCoeff
    ,showTeamCoeff: state.CalculationsReducer.showTeamCoeff
    ,showMyMark   : state.CalculationsReducer.showMyMark
    ,showResult   : state.CalculationsReducer.showResult
  }
}

const Links = (props) => {
  const linkStyle = {
     width    : LINK_WIDTH
    ,float    : LINK_FLOATING
    ,textAlign: LINK_TEXT_ALIGN
    ,border   : LINK_BORDER
  }

  return (
    Object.keys(VISIBLE_SLIDES).map((key) => {
      if (props['props'][key]) {
        return (
          <div
            style={linkStyle}
          >
            <Link
              to={VISIBLE_SLIDES[key].slidePath}
            >
              {VISIBLE_SLIDES[key].slideName}
            </Link>
          </div>
        )
      } else {
        return (
          <div
            style={linkStyle}
          >
            <label>
              {VISIBLE_SLIDES[key].slideName}
            </label>
          </div>
        )
      }
    })
  )
}

const Routes = () => {
  return (
    Object.keys(ALL_SLIDES).map((key) => {
      if (ALL_SLIDES[key].exact) {
        return (
          <Route
            exact
            path={ALL_SLIDES[key].slidePath}
            component={ALL_SLIDES[key].component}
          />
        )
      } else {
        return (
          <Route
            path={ALL_SLIDES[key].slidePath}
            component={ALL_SLIDES[key].component}
          />
        )
      }
    })
  )
}

class ConnectedApp extends Component {
  render() {
    const {
       showSalary
      ,showBankCoeff
      ,showTeamCoeff
      ,showMyMark
      ,showResult
    } = this.props

    const slideProps = {
       salarySlide   : showSalary
      ,bankCoeffSlide: showBankCoeff
      ,teamCoeffSlide: showTeamCoeff
      ,myMarkSlide   : showMyMark
      ,resultSlide   : showResult
    }

    return (
      <div className='container'>
        <HashRouter>
          <Links
            props={slideProps}
          />
          <br/><br/>
          <Routes/>
        </HashRouter>
      </div>
    )
  }
}

const App = connect(mapStateToProps)(ConnectedApp)

export default App
