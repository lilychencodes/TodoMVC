import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Tabs.css'

import TabItem from './TabItem'

import debugRender from 'react-render-debugger'

class Tabs extends Component {
  render() {
    return (
      <div className='tabs'>
        <span className='count'>({this.props.todoList.length})</span>
        {['All', 'Active', 'Finished'].map(tab => <TabItem key={tab} tab={tab} />)}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { todoList } = state.todos
  return {
    todoList,
  }
}

export default connect(mapStateToProps)(Tabs)

// export default debugRender(Tabs)
