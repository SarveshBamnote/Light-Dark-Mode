import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {darkMode: true}

  changeMode = () => {
    this.setState(prevState => ({darkMode: !prevState.darkMode}))
  }

  getBtnText = () => {
    const {darkMode} = this.state
    return darkMode ? 'Light Mode' : 'Dark Mode'
  }

  getClass = () => {
    const {darkMode} = this.state
    return darkMode ? 'dark' : 'light'
  }

  render() {
    const btnText = this.getBtnText()
    const modeCls = this.getClass()

    return (
      <div className="main-container">
        <div className={`card-container ${modeCls}`}>
          <h1>Click To Change Mode</h1>
          <button onClick={this.changeMode} className="button" type="button">
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
