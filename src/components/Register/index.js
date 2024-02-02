import MeetContext from '../../context/MeetContext'
import Header from '../Header'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => (
  <MeetContext.Consumer>
    {value => {
      const {
        inputValue,
        selectValue,
        onChangeInput,
        onChangeSelect,
        onClickRegisterBtn,
        showErr,
      } = value

      const onSubmitForm = event => {
        event.preventDefault()
        if (inputValue === '' || selectValue === '') {
          onClickRegisterBtn('true')
        } else {
          const {history} = props
          history.replace('/')
          onClickRegisterBtn('false')
        }
      }

      const changeInput = event => {
        onChangeInput(event.target.value)
      }

      const changeSelect = event => {
        onChangeSelect(event.target.value)
      }

      return (
        <div>
          <Header />
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <form onSubmit={onSubmitForm}>
              <h1>Let us join</h1>
              <label htmlFor="name">NAME</label>
              <input
                onChange={changeInput}
                id="name"
                type="text"
                placeholder="Your name"
              />
              <label htmlFor="topics">TOPICS</label>
              <select value={selectValue} id="topics" onChange={changeSelect}>
                {topicsList.map(eachItem => (
                  <option value={eachItem.id} key={eachItem.id}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <button type="submit">Register Now</button>
              {showErr && <p>Please enter your name</p>}
            </form>
          </div>
        </div>
      )
    }}
  </MeetContext.Consumer>
)

export default Register
