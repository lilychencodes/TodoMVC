import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import {
  addTodo
} from '../actions/index'

import './Todo.css'

import TodoList from './TodoList'
import Tabs from './Tabs'

class Todo extends Component {
  constructor(props) {
    super(props)

    this.state = {currentText: ''}

    this.updateText = this.updateText.bind(this)
    this.addTodo = this.addTodo.bind(this)
  }

  updateText(event) {
    this.setState({currentText: event.target.value})
  }

  addTodo(event) {
    if (event.key === 'Enter') {
      this.props.addTodo(this.state.currentText)
      this.setState({currentText: ''})
    }
  }

  render() {
    return (
      <div>
        <div className='main-content'>
          <input className='input-box' placeholder='What needs to be done?' type='text' value={this.state.currentText} onChange={this.updateText} onKeyPress={this.addTodo} />
          <TodoList />
          {this.props.todoList.length > 0 && <Tabs />}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { todoList } = state.todos
  return {
    todoList
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addTodo
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
