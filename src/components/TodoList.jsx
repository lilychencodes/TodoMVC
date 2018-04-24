import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'

import './TodoList.css'

import TodoItem from './TodoItem'

import debugRender from 'react-render-debugger'

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
    return (
      <div className='todolist'>
        {this.getList().map((todo, index) => {
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

// const connectedComponent = connect(mapStateToProps)(TodoList)
// export default debugRender(connectedComponent)

export default connect(mapStateToProps)(TodoList)
