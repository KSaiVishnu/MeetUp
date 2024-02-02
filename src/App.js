import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import MeetContext from './context/MeetContext'

import './App.css'

class App extends Component {
  state = {
    inputValue: '',
    selectValue: 'Arts and Culture',
    showRegister: false,
    showErr: false,
  }

  onChangeInput = name => {
    console.log(name)
    this.setState({inputValue: name})
  }

  onChangeSelect = topic => {
    this.setState({selectValue: topic})
  }

  onClickRegisterBtn = value => {
    if (value === 'true') {
      this.setState({showErr: true})
    } else {
      this.setState({showRegister: true})
    }
  }

  render() {
    const {inputValue, selectValue, showRegister, showErr} = this.state
    return (
      <MeetContext.Provider
        value={{
          inputValue,
          selectValue,
          showRegister,
          showErr,
          onChangeInput: this.onChangeInput,
          onChangeSelect: this.onChangeSelect,
          onClickRegisterBtn: this.onClickRegisterBtn,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetContext.Provider>
    )
  }
}

export default App
