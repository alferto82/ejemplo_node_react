


import React, { PropTypes } from 'react';
import { deleteTodo, completeTodo } from 'actions/todos';
import PureComponent from './PureComponent';
import cn from 'classnames';
import { login } from '../actions/todos';

export class LoginForm extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }


  login(e) {
    e.preventDefault();
    const inputName = this.refs.name;
    const inputPasswd = this.refs.password;
    const name = inputName.value.trim();
    const pwd = inputPasswd.value.trim();
    if (name && pwd) {
      this.props.dispatch(login(name, pwd));
      inputName.value = '';
      inputPasswd.value = '';
    }
  }

  logout() {
      this.props.dispatch(logout());
  }

  isAuthenticated(){
      return localStorage.getItem("token") != undefined;
  }

  render() {
    const { dispatch } = this.props;

const authOK = (<div><span>Welcome</span> <button>Logout</button></div>);

    return (
      
      
        {this.isAuthenticated? authOK :
        (<div className="pull-right">
            <form onSubmit={e => this.login(e)}>
              <input className="form-control" type="text" value="test" placeholder="nbame" ref="name"/>
              <input className="form-control" type="password" value="password" placeholder="password" ref="password"/>
              <button className="btn btn-danger" >Login</button>
            </form>
          
        </div>)}
    
    );
  }
}
