import {
        SET_SALARY
        ,INVALID_SALARY
        ,SET_BANK_COEFF
        ,SET_BANK_COEFF_DONT_KNOW
        ,INVALID_BANK_COEFF
        ,SET_TEAM_COEFF
        ,SET_TEAM_COEFF_DONT_KNOW
        ,INVALID_TEAM_COEFF
        ,SET_MY_MARK
        ,CALCULATE_RESULT
        ,GO_TO_NEXT_SLIDE
        ,GO_TO_PREVIOUS_SLIDE
        ,GO_TO_THE_FIRST_SLIDE
      } from './Consts'

/*Сеттеры - начало*/
export function setSalary(payload) {
  return {
    type: SET_SALARY
    ,payload
  }
}

export function setBankCoeff(payload) {
  return {
    type: SET_BANK_COEFF
    ,payload
  }
}

export function setBankCoeffDontKnow(payload) {
  return {
    type: SET_BANK_COEFF_DONT_KNOW
    ,payload
  }
}

export function setTeamCoeff(payload) {
  return {
    type: SET_TEAM_COEFF
    ,payload
  }
}

export function setTeamCoeffDontKnow(payload) {
  return {
    type: SET_TEAM_COEFF_DONT_KNOW
    ,payload
  }
}

export function setMyMark(payload) {
  return {
    type: SET_MY_MARK
    ,payload
  }
}
/*Сеттеры - окончание*/

/*Переходы по слайдам - начало*/
export function goToNextSlide(payload) {
  return {
    type: GO_TO_NEXT_SLIDE
    ,payload
  }
}

export function goToPreviousSlide(payload) {
  return {
    type: GO_TO_PREVIOUS_SLIDE
    ,payload
  }
}
/*Переходы по слайдам - окончание*/

/*Расчёт премии*/
export function calculateResult(payload) {
  return {
    type: CALCULATE_RESULT
    ,payload
  }
}
