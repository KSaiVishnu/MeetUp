import {Link} from 'react-router-dom'
import MeetContext from '../../context/MeetContext'
import Header from '../Header'

const Home = () => (
  <MeetContext.Consumer>
    {value => {
      const {showRegister, inputValue, selectValue} = value

      return (
        <div>
          <Header />
          {showRegister ? (
            <div>
              <h1>{`Hello ${inputValue}`}</h1>
              <p>Welcome to {selectValue}</p>
            </div>
          ) : (
            <div>
              <h1>Welcome to Meetup</h1>
              <p>Please register for the topic</p>
              <Link to="/register">
                <button>Register</button>
              </Link>
            </div>
          )}
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </div>
      )
    }}
  </MeetContext.Consumer>
)

export default Home
