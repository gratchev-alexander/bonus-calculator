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
}                           from './Consts'

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

/*Расчёт премии*/
export function calculateResult(payload) {
  return {
     type: CALCULATE_RESULT
    ,payload
  }
}
