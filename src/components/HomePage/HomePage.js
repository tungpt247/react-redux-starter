import React, { Component, PropTypes } from 'react'

class HomePage extends Component {
  renderText() {
    return 'Hello Me'
  }

  render() {
    return (
      <div className='home-page-container'>
        Home Page
        <br/>
        {this.renderText()}
      </div>
    )
  }
}

export default HomePage
