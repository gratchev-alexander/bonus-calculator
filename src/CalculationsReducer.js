import {
   SET_SALARY
  ,INVALID_SALARY
  ,SET_BANK_COEFF
  ,SET_BANK_COEFF_DONT_KNOW
  ,INVALID_BANK_COEFF
  ,DEFAULT_BANK_COEFF
  ,SET_TEAM_COEFF
  ,SET_TEAM_COEFF_DONT_KNOW
  ,INVALID_TEAM_COEFF
  ,DEFAULT_TEAM_COEFF
  ,SET_MY_MARK
  ,MARK_ENCODING
  ,CALCULATE_RESULT
}                           from './Consts'

const initialState = {
  /*Для слайда с зарплатой - начало*/
  salary      : null  /*Зарплата для расчёта*/
  ,salaryValid: false  /*Признак корректности введённой зарплаты*/
  /*Для слайда с зарплатой - окончание*/

  /*Для слайда с коэффициентом Банка - начало*/
  ,bankCoeff             : null  /*Коэффициент Банка для расчёта*/
  ,userInputBankCoeff    : null  /*Коэффициент Банка для отображения на экране*/
  ,bankCoeffInputDisabled: false  /*Признак активности поля ввода (в зависимости от галки Не знаю)*/
  ,bankCoeffValid        : false  /*Признак корректности введённого коэффициента*/
  /*Для слайда с коэффициентом Банка - окончание*/

  /*Для слайда с коэффициентом команды - начало*/
  ,teamCoeff             : null  /*Коэффициент команды для расчёта*/
  ,userInputTeamCoeff    : null  /*Коэффициент команды для отображения на экране*/
  ,teamCoeffInputDisabled: false  /*Признак активности поля ввода (в зависимости от галки Не знаю)*/
  ,teamCoeffValid        : false  /*Признак корректности введённого коэффициента*/
  /*Для слайда с коэффициентом команды - окончание*/

  /*Для слайда с самооценкой - начало*/
  ,myMark       : null  /*Буквенное значение оценки*/
  ,myMarkValid  : false  /*Признак наличия выбранной оценки*/
  ,myMarkDigital: null  /*Соответственное цифровое значение оценки*/
  /*Для слайда с самооценкой - окончание*/

  /*Для слайда с результатом - начало*/
  ,bonus: null  /*Результат - рассчитанная премия*/
  /*Для слайда с результатом - окончание*/

  /*Для кнопок навигации - начало*/
  ,showSalary   : true
  ,showBankCoeff: true
  ,showTeamCoeff: true
  ,showMyMark   : true
  ,showResult   : true
  /*Для кнопок навигации - окончание*/
}

/*Если отмечена галка Не знаю, в расчёте используется значение по умолчанию*/
const calculateBankCoeff = (action) => {
  return action.payload.checkBoxStatus ? DEFAULT_BANK_COEFF : action.payload.userInputBankCoeff
}

/*Ввод считается корректным, если что-то введено или отмечена галка Не знаю*/
const calculateBankCoeffValid = (action) => {
  return action.payload.checkBoxStatus || action.payload.userInputBankCoeff
}

/*Если отмечена галка Не знаю, в расчёте используется значение по умолчанию*/
const calculateTeamCoeff = (action) => {
  return action.payload.checkBoxStatus ? DEFAULT_TEAM_COEFF : action.payload.userInputTeamCoeff
}

/*Ввод считается корректным, если что-то введено или отмечена галка Не знаю*/
const calculateTeamCoeffValid = (action) => {
  return action.payload.checkBoxStatus || action.payload.userInputTeamCoeff
}

/*Расчёт результата путём перемножения входных параметров*/
const calculateBonus = (state) => {
  return state.salary * state.bankCoeff * state.teamCoeff * state.myMarkDigital
}

/*Получение числового значения саооценки из справочника*/
const calculateMyMarkDigital = (action) => {
  return MARK_ENCODING[action.payload.myMark]
}

const CalculationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SALARY:
      return {
         ...state
        ,salary       : action.payload.salary
        ,salaryValid  : true
        ,showSalary   : true
        ,showBankCoeff: true
        ,showTeamCoeff: true
        ,showMyMark   : true
        ,showResult   : true
      }
      break
    case INVALID_SALARY:
      return {
         ...state
        ,salary       : action.payload.salary
        ,salaryValid  : false
        ,showSalary   : true
        ,showBankCoeff: false
        ,showTeamCoeff: false
        ,showMyMark   : false
        ,showResult   : false
      }
      break
    case SET_BANK_COEFF:
      return {
         ...state
        ,bankCoeff             : action.payload.userInputBankCoeff
        ,userInputBankCoeff    : action.payload.userInputBankCoeff
        ,bankCoeffInputDisabled: false
        ,bankCoeffValid        : true
        ,showSalary            : true
        ,showBankCoeff         : true
        ,showTeamCoeff         : true
        ,showMyMark            : true
        ,showResult            : true
      }
      break
    case SET_BANK_COEFF_DONT_KNOW:
      return {
         ...state
        ,bankCoeff             : calculateBankCoeff(action)
        ,userInputBankCoeff    : action.payload.userInputBankCoeff
        ,bankCoeffInputDisabled: action.payload.checkBoxStatus
        ,bankCoeffValid        : calculateBankCoeffValid(action)
        ,showSalary            : calculateBankCoeffValid(action)
        ,showBankCoeff         : true
        ,showTeamCoeff         : calculateBankCoeffValid(action)
        ,showMyMark            : calculateBankCoeffValid(action)
        ,showResult            : calculateBankCoeffValid(action)
      }
      break
    case INVALID_BANK_COEFF:
      return {
         ...state
        ,bankCoeff         : action.payload.userInputBankCoeff
        ,userInputBankCoeff: action.payload.userInputBankCoeff
        ,bankCoeffValid    : false
        ,showSalary        : false
        ,showBankCoeff     : true
        ,showTeamCoeff     : false
        ,showMyMark        : false
        ,showResult        : false
      }
      break
    case SET_TEAM_COEFF:
      return {
         ...state
        ,teamCoeff             : action.payload.userInputTeamCoeff
        ,userInputTeamCoeff    : action.payload.userInputTeamCoeff
        ,teamCoeffInputDisabled: false
        ,teamCoeffValid        : true
        ,showSalary            : true
        ,showBankCoeff         : true
        ,showTeamCoeff         : true
        ,showMyMark            : true
        ,showResult            : true
      }
      break
    case SET_TEAM_COEFF_DONT_KNOW:
      return {
         ...state
        ,teamCoeff             : calculateTeamCoeff(action)
        ,userInputTeamCoeff    : action.payload.userInputTeamCoeff
        ,teamCoeffInputDisabled: action.payload.checkBoxStatus
        ,teamCoeffValid        : calculateTeamCoeffValid(action)
        ,showSalary            : calculateTeamCoeffValid(action)
        ,showBankCoeff         : calculateTeamCoeffValid(action)
        ,showTeamCoeff         : true
        ,showMyMark            : calculateTeamCoeffValid(action)
        ,showResult            : calculateTeamCoeffValid(action)
      }
      break
    case INVALID_TEAM_COEFF:
      return {
         ...state
        ,teamCoeff         : action.payload.userInputTeamCoeff
        ,userInputTeamCoeff: action.payload.userInputTeamCoeff
        ,teamCoeffValid    : false
        ,showSalary        : false
        ,showBankCoeff     : false
        ,showTeamCoeff     : true
        ,showMyMark        : false
        ,showResult        : false
      }
      break
    case SET_MY_MARK:
      return {
         ...state
        ,myMark       : action.payload.myMark
        ,myMarkDigital: calculateMyMarkDigital(action)
        ,myMarkValid  : true
      }
      break
    case CALCULATE_RESULT:
      return {
         ...state
        ,bonus: calculateBonus(state)
      }
      break
    default:
      return state
  }
}

export default CalculationsReducer
