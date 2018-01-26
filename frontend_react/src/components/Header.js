import React, { PropTypes } from 'react';
import { deleteTodo, completeTodo } from 'actions/todos';
import PureComponent from './PureComponent';
import cn from 'classnames';
import { LoginForm } from './LoginForm'

export class Header extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <span>Header</span>
        <LoginForm dispatch={dispatch} />
      </div>
    );
  }
}
