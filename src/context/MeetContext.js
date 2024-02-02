import React from 'react'

const MeetContext = React.createContext({
  inputValue: '',
  selectValue: 'Arts and Culture',
  showRegister: false,
  showErr: false,
  onChangeInput: () => {},
  onChangeSelect: () => {},
  onClickRegisterBtn: () => {},
})

export default MeetContext
