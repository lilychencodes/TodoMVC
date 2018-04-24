import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import {
  updateTodo,
  toggleFinishTodo,
  deleteTodo
} from '../actions/index'

import './TodoItem.css'

import debugRender from 'react-render-debugger'

class TodoItem extends Component {
  constructor(props) {
    super(props)

    this.state = {isEditing: false, text: props.todo.text, showDelete: false}

    this.setEditing = this.setEditing.bind(this)
    this.updateText = this.updateText.bind(this)
    this.finishEditing = this.finishEditing.bind(this)
    this.toggleTodoComplete = this.toggleTodoComplete.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.showDelete = this.showDelete.bind(this)
    this.hideDelete = this.hideDelete.bind(this)
  }

  setEditing() {
    this.setState({isEditing: true})
  }

  updateText(event) {
    this.setState({text: event.target.value})
  }

  showDelete() {
    if (!this.state.isEditing) {
      this.setState({showDelete: true})
    }
  }

  hideDelete() {
    if (!this.state.isEditing) {
      this.setState({showDelete: false})
    }
  }

  finishEditing(event) {
    if (event.key === 'Enter' || event.type === 'blur') {
      const { updateTodo, index } = this.props

      updateTodo(this.state.text, index)
      this.setState({isEditing: false})
    }
  }

  toggleTodoComplete() {
    const { toggleFinishTodo, index } = this.props
    toggleFinishTodo(index)
  }

  deleteTodo() {
    const { deleteTodo, index } = this.props

    deleteTodo(index)
  }

  content() {
    if (this.state.isEditing) {
      return '';
    }

    return (
      <div onClick={this.toggleTodoComplete} className='circle'>{this.props.todo.isFinished && <div className='done'>&#x2714;</div>}</div>
    )
  }

  render() {
    const { todo, index } = this.props
    const { isEditing, showDelete } = this.state
    return (
      <div
        onMouseEnter={this.showDelete}
        onMouseLeave={this.hideDelete}
        className='flex-row-center todo-item'
        style={isEditing ? {} : {padding: '5px 10px'}}>
        <div className='right-content'>{this.content()}</div>
        {!isEditing && <div className='flex-row-center flex1'>
                        <div className={`flex1 ${todo.isFinished && 'finished'}`} onDoubleClick={this.setEditing}>{todo.text}</div>
                        {showDelete && <div className='delete' onClick={this.deleteTodo}>X</div>}
                      </div>}
        {isEditing && <input className='flex1 input-box'
                              ref='input'
                              type='text'
                              value={this.state.text}
                              onChange={this.updateText}
                              onBlur={this.finishEditing}
                              onKeyPress={this.finishEditing} />}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateTodo,
  toggleFinishTodo,
  deleteTodo
}, dispatch)

export default connect(null, mapDispatchToProps)(TodoItem)
// debugRender(TodoItem)
