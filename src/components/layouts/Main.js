import React, { Component } from 'react'
import { Navbar, Footer} from './index'

class Main extends Component {

  render(){
    return(
      <div>
        <Navbar/>
          <div>
              {this.props.children}
          </div>
        <Footer/>
      </div>
    )
  }
}

export default Main
