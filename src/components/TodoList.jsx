import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import _ from 'lodash'

import './TodoList.css'

import TodoItem from './TodoItem'

class TodoList extends Component {
  getList() {
    const { todoList, currentTab } = this.props

    if (currentTab === 'All') {
      return todoList
    } else if (currentTab === 'Active') {
      return _.filter(todoList, todo => !todo.isFinished)
    } else if (currentTab === 'Finished') {
      return _.filter(todoList, todo => todo.isFinished)
    }
  }

  render() {
    const list = this.getList()

    return (
      <div className='todolist'>
        {list.map((todo, index) => {
          return (
            <TodoItem key={todo.id} todo={todo} index={index} />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { todoList, currentTab } = state.todos
  return {
    todoList,
    currentTab
  }
}

export default connect(mapStateToProps)(TodoList)
