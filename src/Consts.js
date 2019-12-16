/*Методы - начало*/
export const SET_SALARY               = 'SET_SALARY'
export const INVALID_SALARY           = 'INVALID_SALARY'
export const SET_BANK_COEFF           = 'SET_BANK_COEFF'
export const SET_BANK_COEFF_DONT_KNOW = 'SET_BANK_COEFF_DONT_KNOW'
export const INVALID_BANK_COEFF       = 'INVALID_BANK_COEFF'
export const SET_TEAM_COEFF           = 'SET_TEAM_COEFF'
export const SET_TEAM_COEFF_DONT_KNOW = 'SET_TEAM_COEFF_DONT_KNOW'
export const INVALID_TEAM_COEFF       = 'INVALID_TEAM_COEFF'
export const SET_MY_MARK              = 'SET_MY_MARK'
export const CALCULATE_RESULT         = 'CALCULATE_RESULT'
/*Методы - окончание*/

/*Цифровые константы - начало*/
export const DEFAULT_BANK_COEFF = 1
export const MIN_BANK_COEFF     = 0
export const MAX_BANK_COEFF     = 2
export const DEFAULT_TEAM_COEFF = 1
export const MIN_TEAM_COEFF     = 0
export const MAX_TEAM_COEFF     = 2
/*Цифровые константы - окончание*/

/*Таблица перекодировки буквенных оценок в цифровые*/
export const MARK_ENCODING = {
   A: 1.2
  ,B: 1.1
  ,C: 1
  ,D: 0.9
  ,E: 0.8
}

/*Параметры интерфейса - начало*/
export const SLIDER_WIDTH      = 200
export const SLIDER_MARGIN     = 20
export const SLIDER_STEP       = 0.1
export const INPUT_SIZE        = 23
export const LINK_WIDTH        = 100
export const LINK_FLOATING     = 'left'
export const LINK_TEXT_ALIGN   = 'center'
export const LINK_BORDER       = 'solid black 1px'
export const MARK_FLOATING     = 'left'
export const BONUS_FONT_WEIGHT = 'bold'
/*Параметры интерфейса - окончание*/

/*Текст - начало*/
export const CURRENCY           = 'RUB'
export const SALARY_PLACEHOLDER = 'Input salary'
export const TEXT_INPUT_TYPE    = 'text'
export const CHECBOX_INPUT_TYPE = 'checkbox'
export const BANK_PLACEHOLDER   = 'Input bank coefficient (max '
export const I_DONT_KNOW        = 'I don\'t know'
export const TEAM_PLACEHOLDER   = 'Input team coefficient (max '
export const MY_MARK_TEXT       = 'Select your mark:'
export const RESULT_SALARY      = 'Salary: '
export const RESULT_BANK_COEFF  = 'Bank coeff: '
export const RESULT_TEAM_COEFF  = 'Team coeff: '
export const RESULT_MY_MARK     = 'My mark: '
export const RESULT_BONUS       = 'Bonus: '
export const LEFT_PARENTHESIS   = '('
export const RIGHT_PARENTHESIS  = ')'
/*Текст - окончание*/
