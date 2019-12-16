import {
   SET_SALARY
  ,INVALID_SALARY
  ,SET_BANK_COEFF
  ,INVALID_BANK_COEFF
  ,SET_TEAM_COEFF
  ,INVALID_TEAM_COEFF
  ,MIN_BANK_COEFF
  ,MAX_BANK_COEFF
  ,MIN_TEAM_COEFF
  ,MAX_TEAM_COEFF
}                     from './Consts'

export function calculationsMiddleware({dispatch}) {
  return function(next) {
    return function(action) {
      switch (action.type) {
        /*Проверка введённой зарплаты - должно быть положительное целое число*/
        case SET_SALARY:
          if (   !isFinite(action.payload.salary)
              || action.payload.salary != parseInt(action.payload.salary, 10)
              || action.payload.salary <= 0) {
            return dispatch({
               type   : INVALID_SALARY
              ,payload: action.payload
            })
          }
          break
        /*Проверка введённого коэффициента Банка - должно быть положительное вещественное число, ограниченное сверху*/
        case SET_BANK_COEFF:
          if (   !isFinite(action.payload.userInputBankCoeff)
              || action.payload.userInputBankCoeff < MIN_BANK_COEFF
              || action.payload.userInputBankCoeff > MAX_BANK_COEFF) {
            return dispatch({
               type   : INVALID_BANK_COEFF
              ,payload: action.payload
            })
          }
          break
        /*Проверка введённого коэффициента команды - должно быть положительное вещественное число, ограниченное сверху*/
        case SET_TEAM_COEFF:
          if (   !isFinite(action.payload.userInputTeamCoeff)
              || action.payload.userInputTeamCoeff < MIN_TEAM_COEFF
              || action.payload.userInputTeamCoeff > MAX_TEAM_COEFF) {
            return dispatch({
               type   : INVALID_TEAM_COEFF
              ,payload: action.payload
            })
          }
          break
        default:
          break
      }

      return next(action)
    }
  }
}
