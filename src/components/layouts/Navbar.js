import React, { Component } from 'react'
import  { Link } from 'react-router'


class Navbar extends Component {
  render(){
    return(
      <div>
        <header className="header_s">

  <div id="slidepanel">

  </div>



  <div className="menu-block">

    <div className="container">

      <nav className="navbar ownavigation">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a href="#" href="#"><img src="assets/images/logo2.png" alt="Post" /></a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="dropdown active"><Link to={'/'}>Hjem</Link><i className="ddl-switch fa fa-angle-down"></i></li>
            <li><Link to={'/hundeluftning'}>Hundeluftning</Link></li>
            <li><Link to={'/hundepension'}>Hundepension</Link></li>
            <li><Link to={'/hvalpe'}>Hvalpe</Link></li>
            <li><Link to={'/traning'}>Træning</Link></li>
            <li><Link to={'/priser'}>Priser</Link></li>
            <li><Link to={'/contact'} href="#">Kontakt</Link></li>


          </ul>
        </div>
        <div id="loginpanel" className="desktop-hide">
          <div className="right" id="toggle">
            <a id="slideit" href="#slidepanel"><i className="fo-icons fa fa-inbox"></i></a>
            <a id="closeit" href="#slidepanel"><i className="fo-icons fa fa-close"></i></a>
          </div>
        </div>
      </nav>

    </div>

  </div>

</header>
      </div>


    )
  }
}

export default Navbar
