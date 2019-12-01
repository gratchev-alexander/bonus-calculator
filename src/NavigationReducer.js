import {
  GO_TO_NEXT_SLIDE
  ,GO_TO_PREVIOUS_SLIDE
      } from './Consts'
import {slidePath as salaryPath} from './SalarySlide'
import {slidePath as bankCoeffPath} from './BankCoeffSlide'
import {slidePath as teamCoeffPath} from './TeamCoeffSlide'
import {slidePath as myMarkPath} from './MyMarkSlide'
import {slidePath as resultPath} from './ResultSlide'
import {slidePath as errorPath} from './ErrorSlide'
import {slidePath as rootPath} from './RootSlide'

const initialState = {
  redirectPath: null  /*Слайд, на который необходимо перейти*/
}

/*Определение следующего слайда в зависимости от текущего*/
const getNextSlide = (currentSlide) => {
  switch (currentSlide) {
    case rootPath:
        return salaryPath
      break
    case salaryPath:
        return bankCoeffPath
      break
    case bankCoeffPath:
        return teamCoeffPath
      break
    case teamCoeffPath:
        return myMarkPath
      break
    case myMarkPath:
        return resultPath
      break
    default:
      return errorPath
  }
}

/*Определение предыдущего слайда в зависимости от текущего*/
const getPreviousSlide = (currentSlide) => {
  switch (currentSlide) {
    case bankCoeffPath:
        return salaryPath
      break
    case teamCoeffPath:
        return bankCoeffPath
      break
    case myMarkPath:
        return teamCoeffPath
      break
    case resultPath:
        return myMarkPath
      break
    case errorPath:
        return salaryPath
      break
    default:
      return errorPath
  }
}

const NavigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GO_TO_NEXT_SLIDE:
      return {
        redirectPath: getNextSlide(action.payload.currentSlide)
      }
      break
    case GO_TO_PREVIOUS_SLIDE:
      return {
        redirectPath: getPreviousSlide(action.payload.currentSlide)
      }
      break
    default:
      return state
  }
}

export default NavigationReducer
