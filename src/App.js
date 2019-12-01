import React, {Component} from 'react'
import SalarySlide, {slidePath as salaryPath} from './SalarySlide'
import BankCoeffSlide, {slidePath as bankCoeffPath} from './BankCoeffSlide'
import TeamCoeffSlide, {slidePath as teamCoeffPath} from './TeamCoeffSlide'
import MyMarkSlide, {slidePath as myMarkPath} from './MyMarkSlide'
import ResultSlide, {slidePath as resultPath} from './ResultSlide'
import ErrorSlide, {slidePath as errorPath} from './ErrorSlide'
import RootSlide, {slidePath as rootPath} from './RootSlide'
import {HashRouter, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className='container'>
      <HashRouter>
        <Route path={rootPath} component={RootSlide}/>
        <Route path={salaryPath} component={SalarySlide}/>
        <Route path={bankCoeffPath} component={BankCoeffSlide}/>
        <Route path={teamCoeffPath} component={TeamCoeffSlide}/>
        <Route path={myMarkPath} component={MyMarkSlide}/>
        <Route path={resultPath} component={ResultSlide}/>
        <Route path={errorPath} component={ErrorSlide}/>
      </HashRouter>
      </div>
    )
  }
}

export default App
