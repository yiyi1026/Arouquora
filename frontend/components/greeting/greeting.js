import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => {
  let header = (
     <div className='col-lg-offset-4'>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand brand-sm" href="#"><span className='brand-sm'>Duora</span></a>
                        </div>
                        
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <form className="navbar-form navbar-left">
                            <div className="form-group">
                            <input type="text" className="form-control" placeholder="Ask or Search Duora"/>
                            </div>
                            <button type="submit" className="btn btn-default">Ask Question</button>
                        </form>
                        <ul className="nav navbar-nav red-text">
                            <li className="active"><a href="#" className="active"><span className='glyphicon glyphicon-list-alt'></span>Read <span className="sr-only">(current)</span></a></li>
                            <li><a href="#"><span className='glyphicon glyphicon-edit'></span>Answer</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"><span className='glyphicon glyphicon-bell'></span>Notifications</a></li>
                            <li className="dropdown ">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span className='glyphicon glyphicon-user'></span>{currentUser.username} </a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Profile</a></li>
                                <li><a href="#">Stats</a></li>
                                <li><a href="#">Settings</a></li>
                                <li role="separator" className="divider"></li>
                                <li><a href="#" onClick={logout} >Logout</a></li>
                            </ul>
                            </li>
                        </ul>
                        
                        </div>
                    </div>
                </nav>
            </div>
  );
  let originalHeader = (<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
  </hgroup>
  )

  return( header )
};

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : (<span></span>)
);

export default Greeting;